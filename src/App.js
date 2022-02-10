import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount';
import itemList from './components/ItemList';



function App() {
  


  const add = (cantidad) => {
    alert(cantidad);
  };

  itemList();

  return (
    <>
    <NavBar/>
      <ItemListContainer greeting="¡ItemListconatiner!">

      </ItemListContainer>
      <ItemCount initial={1} stock ={5} onAdd={add} />
    </>
  );
}

export default App;
