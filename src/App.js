
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Error from './Components/ItemListContainer/Error';
import Item from './Components/ItemListContainer/Item';




function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      
      <Routes>
          <Route path={'/'}  element={<ItemListContainer/>} />
          <Route path={'/category/:id'}  element={<ItemListContainer/>} />
          <Route path={'/item/:id'}  element={<Item/>} />
          <Route path={'*'}  element={<Error/>} />



        </Routes>
      </BrowserRouter>
     );
}

export default App;