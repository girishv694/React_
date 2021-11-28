import Todo from './components/Todo'
import './App.css';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <Todo/>
      <hr/>
      <div className="container">
      <DisplayTodo/>
      </div>
     
    </div>
  );
}

export default App;
