import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer/>} />   
        <Route path='/category/:idCategory' element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
