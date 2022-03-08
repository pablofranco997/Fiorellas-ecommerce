import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Page404 from './components/utilities/Page404';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategory' element={<ItemListContainer/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
