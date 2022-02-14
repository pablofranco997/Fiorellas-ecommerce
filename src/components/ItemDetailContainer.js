import item from "./stock";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [productsDetail, setProductsDetail] = useState([]);
    
    const customFetch = (data) =>{
        return new Promise((resolve) => {
                    resolve(data);
        } );
    };

    useEffect(() => {
        setTimeout(() => {
           customFetch(item[2],"error")
           .then (data => setProductsDetail(data))
           .catch (error => alert(error));
         }, 2000);
    }, [])

    return (
        <div className="container px-4 px-lg-5 mt-5">
        <div>
        {
            productsDetail.length === 0 ? <h1 className="text-center">Cargando ...</h1> : <ItemDetail name={productsDetail.name} stock={productsDetail.stock} img={productsDetail.img} price={productsDetail.price} key={productsDetail.id} />
        }
        </div>
        
        </div>
    );

    
    
    
}

export default ItemDetailContainer;