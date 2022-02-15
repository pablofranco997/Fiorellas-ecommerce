
function Item({name, img, price, stock, id}){
    // let itemLink = "/item/"+{id}

    return(
        <div className="col mb-5">
            <div className="card" stock={stock} key={id} style={{width: "15rem"}}>
                <img className="card-img-top" src={img} alt={name}/>
                <span>{name}</span>
                <span>${price}</span>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>      
     )
 }

 export default Item


