import "./styles/bootstrap-grid.css";
import "./styles/bootstrap-reboot.css";
import "./styles/bootstrap-utilities.css";
import "./styles/bootstrap.css";
import "./App.css";
import Card from "./components/Card";
import mockProducts from "./products.json";
import Cart from "./components/Cart";
import { useReducer, useState } from "react";

/* rod11:12
finish logic of ADD_PRODUCT action
add new action REMOVE_PRODUCT  */

function reducer(state, action) {
  const selectedId = action.id;
  if (action.type === "ADD_PRODUCT") {
    return { ...state, [action.id]: state.selectedId + 1 }
  } else if (action.type === "REMOVE_PRODUCT") {
    return;
  }
}

function normalizeCart(products) {
  return products.reduce((acc, product) => {
    return { ...acc, [product.id]: 0 };
  }, {});
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState(
    mockProducts.map((p) => ({ ...p, inCart: 0 }))
  );
  const [cart, dispatch] = useReducer(reducer, mockProducts, normalizeCart);
  console.log("@cart", cart);
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
                    style={{ width: "100px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
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
        <img className="col banner" src="media/kokekosas.png" alt="Kokekosas" />
      </header>
      {showModal ? <Cart /> : null}
      <div id="principal" className="row widgets justify-content-evenly">
        <div className="input-group mb-3" id="filtros">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
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

        <section className="row widgets justify-content-evenly" id="cards">
          {products.map((product) => (
            <Card
              dispatch={dispatch}
              product={product}
              products={products}
              setProducts={setProducts}
              key={product.nombre}
            />
          ))}
        </section>
      </div>

      <footer className="row justify-content-center">
        <div className="col-5">
          <p className="center">Copyright © 2022 Kokekosas</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
