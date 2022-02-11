import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
      <div className="NavBar">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
          <div className="container-fluid">
            <div className="navbar-brand">Proyecto Coder - Fiorellas</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <div className="nav-link active" aria-current="page">Home</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">Link</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</div>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</div>
                  <ul className="dropdown-menu" aria-labelledby="dropdown04">
                    <li><div className="dropdown-item">Action</div></li>
                    <li><div className="dropdown-item">Another action</div></li>
                    <li><div className="dropdown-item">Something else here</div></li>
                  </ul>
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