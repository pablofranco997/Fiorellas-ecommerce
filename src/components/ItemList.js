// import { useState } from "react";
import Item from "./Item.js"
import { Link } from "react-router-dom";



function ItemList ({product}) {
    
    return(
        product.map(({name, stock, price, img, id}) => {
            return(
                <Link to={`item/${parseInt(id)}`} style={{textDecoration: 'none', color: 'black'}}><Item name={name} stock={stock} price={price} img={img} key={id}/></Link>
            )
        }
        )
    )
}





export default ItemList;
        