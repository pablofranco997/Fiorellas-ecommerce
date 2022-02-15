import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
      <div className="NavBar">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{textDecoration: 'none'}}>Proyecto Coder - Fiorellas</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/" style={{textDecoration: 'none'}}><div className="nav-link active" aria-current="page">Home</div></Link>
                </li>
                <li className="nav-item">
                <Link to="category/1" style={{textDecoration: 'none'}}><div className="nav-link">Rosas</div></Link>
                </li>
                <li className="nav-item">
                  <Link to="category/2" style={{textDecoration: 'none'}}><div className="nav-link">Girasoles</div></Link>
                </li>
              </ul>
              <CartWidget/>
            </div>
          </div>
        </nav>
      </div>
      </>
    );
  }
  
  export default NavBar;