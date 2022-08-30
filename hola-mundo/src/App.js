import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/componenteA';

function App() {
  const contactoPrueba = {
    nombre: 'LeoRD',
    apellido: 'Produciendo',
    email: 'hablamoahorañiño@alcaldia.com',
    conectado: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/*<Greeting name="Junior"></Greeting>*/}
        {/*Ejemplo componente funcional */}
        {/*<GreetingF name="Julio Cesar Jr."></GreetingF>*/}
        {/* Componente de listado de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ComponenteA contacto={contactoPrueba}/>
      </header>
    </div>
  );
}

export default App;
