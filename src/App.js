import logo from './logo.svg';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext';

function App() {
  return (
    <>
      <TodoProvider>
        <div className="app__container">
          <div class="app__inner-wrapper">
            <h1>My Todo List</h1>
            <AddTodoForm />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App;
