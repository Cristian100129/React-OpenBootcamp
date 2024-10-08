import logo from './logo.svg';
import './App.css';
// import Greeting from './Components/pure/greeting';
// import GreetingF from './Components/pure/greetingF';
import TaskListComponent from './Components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="cristian"></Greeting> */}
        {/* <GreetingF name="Cristian"></GreetingF> */}
        {/* Componente de lsitado de tareas */}
        <TaskListComponent/>
      </header>
    </div>
  ); 
}

export default App;
