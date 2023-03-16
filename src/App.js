
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';





function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= "Lucas"/>
    

    </div>
  );
}

export default App;