
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Error from './Components/ItemListContainer/Error';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


function App() {
  return (
    
      <BrowserRouter>
      

      <Navbar />
      
      
      <Routes>
          <Route path={'/'} exact element={<ItemListContainer/>} />
          <Route path={'/category/:categoryId'} exact element={<ItemListContainer/>} />
          <Route path={'/item/:id'} exact element={<ItemDetailContainer/>} />
          <Route path={'*'} exact element={<Error/>} />
          <Route path={'/cart'} exact element={<Cart/>} />
          <Route path={'/checkout'} exact element={<Checkout/>} />



        </Routes>
      </BrowserRouter>
     );
}

export default App;