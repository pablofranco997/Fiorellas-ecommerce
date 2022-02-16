import item from "./stock";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams();
    
    const customFetch = (data) =>{
        return new Promise((resolve) => {
                    resolve(data);
        } );
    };

    useEffect(() => {
        setTimeout(() => {
        if(idCategory===undefined){
            customFetch(item,"error")
           .then (data => setProducts(data))
           .catch (error => alert(error));
        }else{
            customFetch(item.filter(product => product.categoryId === idCategory),"error")
           .then (data => setProducts(data))
           .catch (error => alert(error));
        }
         }, 2000);
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

