import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(parseInt(initial));

    const plus = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1);
        }
    };

    const minus = () => {
        if(cantidad > initial) {
            setCantidad(cantidad-1);
        }
        
    }

    const add = () => {
        if((stock > 1) && (stock >= cantidad)){
            alert(cantidad);
        }
    };



    return(
        <div className="">
            <button className="" onClick={plus}>+</button>
            <p className="">{cantidad}</p>
            <button  className="" onClick={minus}>-</button>
            <button onClick={add}>Agregar a carrito</button>
        </div>
    )
};

export default ItemCount;