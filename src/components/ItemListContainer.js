import item from "./stock";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    
    const customFetch = (data) =>{
        return new Promise((resolve) => {
                    resolve(data);
        } );
    };

    useEffect(() => {
        setTimeout(() => {
           customFetch(item,"error")
           .then (data => setProducts(data))
           .catch (error => alert(error));
         }, 2000);
    }, [])

    return (
        <div className="container px-4 px-lg-5 mt-5">
        <h1 className="text-center">{greeting}</h1>

        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
            products.length === 0 ? <h1 className="text-center">Cargando ...</h1> : <ItemList product={products}/>
        }
        </div>
        
        </div>
    );

    
    
    
}

export default ItemListContainer;

