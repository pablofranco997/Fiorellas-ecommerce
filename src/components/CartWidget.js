import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';



const CartWidget = () =>{
    const test = useContext(CartContext)

    let item = 0;
    
    for(let i=0; i<test.cartList.length; i++){
    item += test.cartList[i].qty}

    return (
        <Link to="/cart">
            <Badge badgeContent = {item} color="primary">
                <ShoppingCartIcon style={{color:"white"}} />
            </Badge>
        </Link>
    );
}

export default CartWidget;
