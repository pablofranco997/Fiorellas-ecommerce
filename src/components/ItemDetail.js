import ItemCount from "./ItemCount"

function ItemDetail(product){

    const add = (cantidad) => {
    alert(cantidad);
   };

    return(
        <div className="container px-4 px-lg-1 my-1" stock={product.stock} key={product.id}>
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.img} alt={product.name} /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BTS-498</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>${product.price} </span>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex">
                            <ItemCount onAdd={add} stock={product.stock} initial={1} />
                        </div>
                    </div>
                </div>
            </div>
     )
 }

 export default ItemDetail