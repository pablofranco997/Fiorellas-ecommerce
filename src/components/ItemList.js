// import { useState } from "react";
import item from "./Item.js"

const is_ok = true;

function itemList () {
    // const [products, setProducts] = useState([]);
    const customFetch = (data,error) =>{
        return new Promise((resolve,reject) => {
                if (is_ok){
                    resolve(data)
                }else{
                    reject(error)
                }
        } );
    };
    
    function getProduct (){
        customFetch(item,"error")
        .then (data => console.log(data))
        .catch (error => alert(error))
    };

    getProduct();
}

// useEffect(() => {
//     setTimeout(() => {
//         customFetch()
//     }, 5000);
// }, [])



export default itemList
        