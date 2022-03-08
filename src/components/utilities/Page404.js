import { Link } from "react-router-dom";

const Page404 = () => {
    return(
        <>
            <div>
                <img src="https://i.pinimg.com/originals/1a/9a/26/1a9a265442128cacd31310959fd14d9f.gif" className="mx-auto d-block m-5" style={{maxWidth:"30%"}} alt="flower"></img>
                <h2 className="text-center">Error 404: Pagina no encontrada</h2>
                <br/>
                <Link to="/"><p className="text-center">Volver al Inicio</p></Link>
            </div>
            
            
        </>
)};

export default Page404