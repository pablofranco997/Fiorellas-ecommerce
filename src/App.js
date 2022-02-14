import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  


  const add = (cantidad) => {
    alert(cantidad);
  };

  return (
    <>
    <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting="¡ItemListconatiner!"/>
      <ItemCount initial={1} stock ={5} onAdd={add} />
    </>
  );
}

export default App;
