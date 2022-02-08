import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock ="5", initial="1"}) => {
    const [cantidad, setCantidad] = useState(1);

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

    return(
        <div className="">
            <button className="" onClick={plus}>+</button>
            <p className="">{cantidad}</p>
            <button  className="" onClick={minus}>-</button>
        </div>
    )
};

export default ItemCount;