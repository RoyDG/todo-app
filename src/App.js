import './App.css';
import {useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';


function App() {

  const [todos, setTodos] = useState(['todo state 1', 'todo state 2']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //addTodo will hit when we click the button
      //this will stop whole page refreshing
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(''); //clear the input after hit add Todo
     
  }
  return (
    <div className="App">
      <h1>Add TODO App</h1>
      <form>
        {/* onChange capture what we are typing and we call an event to setInput value to show it on input field*/}

        <FormControl>
            <InputLabel>Write a todo</InputLabel>
            <Input value = {input} 
                   onChange = {event => setInput(event.target.value)}>
            </Input>
        </FormControl>

        <Button variant="contained" 
                color="primary"
                type = "submit"
                onClick = {addTodo}
                disabled = {!input}>
            Add Todo
        </Button>

        <ul>
          {
            todos.map(todo => (
              <Todo text = {todo} />
            ))
          }
        </ul>
      </form>     
    </div>
  );
}

export default App;
