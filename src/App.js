import "./styles/bootstrap-grid.css";
import "./styles/bootstrap-reboot.css";
import "./styles/bootstrap-utilities.css";
import "./styles/bootstrap.css";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import { useEffect, useReducer, useState } from "react";

/*
rod11:12
rod10:15
challenge de react
implementar react-query en kokekosas 
react query leer docs 
crear un componente wrapper que envuelva el componente App y que solamente lo renderize cuando el fetch este completo
style add to cart button so it changes background on focus
*/

function reducer(state, action) {
  const selectedId = action.id;
  if (action.type === "ADD_PRODUCT") {
    return { ...state, [action.id]: state[selectedId] + 1 };
  } else if (action.type === "REMOVE_PRODUCT") {
    return { ...state, [action.id]: state[selectedId] - 1 };
  } else if (action.type === "INIT") {
    return action.state;
  }
}
function normalizeCart(products) {
  return products.reduce((acc, product) => {
    return { ...acc, [product.id]: 0 };
  }, {});
}

function App() {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    fetch(
      "https://shoecycle-7u9lzblyo-rodalcala.vercel.app/api/kokekosas/products"
    )
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProducts(products);
        dispatch({ type: "INIT", state: normalizeCart(products) });
      });
  }, []);

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
                      setShowCart(!showCart);
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
                      style={{ display: "flex" }}
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
      {showCart ? (
        <Cart dispatch={dispatch} cart={cart} products={products} setShowCart={setShowCart}/>
      ) : null}
      <div id="principal" className="row widgets justify-content-evenly">
        <div>
          <Filter products={products} setProducts={setProducts} />
        </div>

        <section className="row widgets justify-content-evenly" id="cards">
          {products.map((product) => (
            <Card
              dispatch={dispatch}
              product={product}
              products={products}
              setProducts={setProducts}
              key={product.id}
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
