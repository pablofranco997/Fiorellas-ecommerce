import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar/>
      <ItemListContainer greeting="¡ItemListconatiner!"/>
      <ItemCount/>
    </>
  );
}

export default App;
