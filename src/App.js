import './App.css';
import image from './busy.jpg';
import imageTwo from './list.jpg';
import { List } from './List';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } width="200px" alt='busyLady'/></div>
      <div className='container'>
        <h1>To Do List</h1>
        </div>
      <List/>
      <div className='container'>
      <img src={ imageTwo } width="200px" alt='list'/></div>
    </div>
  );
}

export default App;
