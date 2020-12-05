import './App.css';
import {useState} from 'react'

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
      <form>
        <input value = {input} 
               onChange = {event => setInput(event.target.value)}/> 
               {/* onChange capture what we are typing and we call an event to setInput value to show it on input field*/}
        <button 
          type = "submit"
          onClick = {addTodo}>
            Add Todo
        </button>

        <ul>
          {
            todos.map(todo => (
            <li>{todo}</li>
            ))
          }
        </ul>
      </form>     
    </div>
  );
}

export default App;
