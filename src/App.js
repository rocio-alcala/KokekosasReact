import "./styles/bootstrap-grid.css";
import "./styles/bootstrap-reboot.css";
import "./styles/bootstrap-utilities.css";
import "./styles/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ">
              <a className="navbar-brand" href="/">
                Menu
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="/" id="home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" id="contacto">
                      Contacto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" id="nosotros">
                      Nosotros
                    </a>
                  </li>
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{width: "100px"}}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Ver carrito
                  </button>
                  <div className="col input-group flex-wrap">
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                    ></span>
                    <input
                      id="buscar"
                      type="text"
                      className="form-control"
                      placeholder="Buscar"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <img className="col banner" src="kokekosas.png" alt="Kokekosas" />
      </header>

      <div id="principal" className="row widgets justify-content-evenly">
        <div className="input-group mb-3" id="filtros">
          <label className="input-group-text" for="inputGroupSelect01">
            Filtros
          </label>
          <select className="form-select" id="filtro">
            <option id="masVendido" value="masVendidos">
              Mas vendidos
            </option>
            <option value="precioCreciente">Precio creciente</option>
            <option value="precioDecreciente">Precio decreciente</option>
            <option value="alfabetico">A - Z</option>
          </select>
        </div>

        <section
          className="row widgets justify-content-evenly"
          id="cards"
        ></section>
      </div>

      <footer className="row justify-content-center">
        <div className="col-5">
          <p className="center">Copyright © 2022 Kokekosas</p>
        </div>
      </footer>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tu carrito
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="col-3" scope="col">
                      Nombre
                    </th>
                    <th className="col-2" scope="col">
                      Precio
                    </th>
                    <th className="col-2" scope="col">
                      Cantidad
                    </th>
                    <th className="col-3" scope="col">
                      Precio total
                    </th>
                    <th className="col-3" scope="col">
                      Borrar
                    </th>
                  </tr>
                </thead>
                <tbody id="tbody"></tbody>
                <tfoot>
                  <tr id="tfoot">
                    <th colspan="12"> No cargaste nada a tu carrito </th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Continuar comprando
              </button>
              <button
                type="button"
                className="btn btn-light"
                id="terminarCompra"
              >
                Terminar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
