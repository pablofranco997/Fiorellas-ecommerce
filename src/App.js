import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar/>
      <ItemListContainer greeting="¡ItemListconatiner!"/>
      <ItemCount stock="5" initial="1"/>
    </>
  );
}

export default App;
