
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import IteamListContainer from './Components/IteamListContainer/IteamListContainer.js';
//import Items from './Components/IteamListContainer/Items';
import Prueba2 from './Components/prueba2';



function App() {
  return (
    <div className="App">
      <Navbar />
      <IteamListContainer greeting= "Lucas"/>
      <Prueba2 />

    </div>
  );
}

export default App;