import './App.css';
import {useEffect, useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import todo from './todo.png';
import Footer from './Footer';



function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the database and fetch new todos as they added/removed
  useEffect( () => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot( snapshot => {
          setTodos(snapshot.docs.map( doc => ({id: doc.id, todo: doc.data().todo})))
        })
  }, []);

  const addTodo = (event) => {
    //addTodo will hit when we click the button
      //this will stop whole page refreshing
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //clear the input after hit add Todo   
  }
  return (
    <div className="App">
      <div className="nav">
        <img src = {todo} alt="todo logo"/>
        <b><i> 📓 Todo App</i></b>
      </div>
      <h1>Let's Add Your Task</h1>
      <form>
        
        {/* onChange capture what we are typing and we call an event to setInput value to show it on input field*/}

        <FormControl className = "input">
            <InputLabel>Write your task here...</InputLabel>
            <Input value = {input} 
                   onChange = {event => setInput(event.target.value)}>
            </Input>
        </FormControl>

        <Button className = "button"
                variant="contained" 
                color="primary"
                type = "submit"
                onClick = {addTodo}
                disabled = {!input}>
            Add Task
        </Button>

        <ul>
          {
            todos.map(todo => (
              <Todo todo = {todo} />
            ))
          }
        </ul>
      </form>
      <Footer/>
         
    </div>
  );
}

export default App;
