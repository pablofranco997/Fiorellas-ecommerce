import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
    <NavBar/>
      <ItemListContainer greeting="¡ItemListconatiner!"/>
    </>
  );
}

export default App;
