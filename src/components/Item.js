import { Link } from "react-router-dom"

function Item({name, img, price, stock, id}){

    return(
        <Link to={`/item/${id}`} style={{textDecoration: 'none', color: 'black'}}>
            <div className="col mb-5">
                <div className="card" stock={stock} key={id} style={{width: "15rem"}}>
                    <img className="card-img-top" src={img} alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </Link>      
     )
 }

 export default Item


