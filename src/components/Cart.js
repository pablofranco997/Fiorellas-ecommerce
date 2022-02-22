import { useContext } from "react"
import { CartContext } from "./CartContext"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";


const Cart = () => {
    const test = useContext(CartContext)

    return(
        <>
            <div className="p-4 mt-4 mt-lg-0 rounded">
                <h4 className="header-title mb-3">Carrito de compras</h4>
                {test.cartList.length === 0
                ?
                    <>
                        <p>No hay nada en tu carrito.</p> <Link to="/" style={{textDecoration:"none"}}> Volver a Inicio</Link>
                    </>
                :
                <div className="table-responsive border">
                    <table className="table table-nowrap table-centered mb-0">
                        <tbody> 
                            {
                                test.cartList.length > 0 &&
                                test.cartList.map(item =>
                                    <> 
                                        <tr>
                                            <td>
                                                <Link to={`/item/${item.id}`}><img src={item.img} alt={item.name}  className="rounded me-4" style={{height: 200}}/></Link>
                                                <div className="m-0 d-inline-block align-middle">
                                                    <small className="text-body fw-semibold">{item.name}</small>
                                                    <br/>
                                                    <small>Cantidad: {item.qty} </small>
                                                    <br/>
                                                    <small>Precio: ${item.price} c/u</small>
                                                </div>
                                            </td>
                                            <td className="text-middle align-middle">
                                                ${(item.price*item.qty)}
                                            </td>
                                            <td className="align-middle">
                                            <DeleteOutlineIcon onClick={() => test.deleteItem(item.id)} sx={{ fontSize: 45 }}/>
                                            </td>
                                            
                                        </tr>
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                }
                {
                    test.cartList.length === 0
                    ? <></>
                    :   <>
                            <button className="btn bg-dark m-2" style={{color:"white"}} onClick={() => test.removeList()}>
                                Borrar todo
                            </button>
                        </>
                }                                           
            </div>         
        </>   
)
}
export default Cart

