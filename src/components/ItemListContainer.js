import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "./utilities/firebaseutilities";
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        const fireStoreFetch = async() => {
            const querySnapshot = await getDocs(collection(db, "items"));

            return querySnapshot.docs.map( document => ({
                id:document.id,
                ...document.data()
            }))
        }
        if(idCategory===undefined){
            fireStoreFetch()
            .then (result => setProducts(result))
            .catch (error => console.log(error));
        }else{
            fireStoreFetch()
            .then (result => setProducts(result.filter(product => product.categoryId === idCategory)))
            .catch (error => console.log(error))
        }
    }, [idCategory])
    

    return (
        <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
            products.length === 0 ? <h1 className="text-center">Cargando ...</h1> : <ItemList product={products}/>
        }
        </div>
        
        </div>
    );

    
    
}

export default ItemListContainer;

