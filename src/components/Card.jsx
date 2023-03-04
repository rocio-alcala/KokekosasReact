import { useState } from "react";

function Card(props) {
  const product = props.product;
  const dispatch = props.dispatch;
  const cart = props.cart;
  const isStockAvailable = product.stock > cart[product.id];

  const [isClickedAdd, setIsClickedAdd] = useState(false);

  return (
    <div className="card col-4 col-md-4 col-lg-3">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        {isClickedAdd ? <p>Agregado al carrito</p> : null}
        {isStockAvailable ? null : <p>Sin stock</p>}
        <p className="card-text stock"></p>
        <button
          disabled={!isStockAvailable}
          className="btn btn-dark add selected"
          onClick={() => {
            dispatch({ type: "ADD_PRODUCT", id: product.id });
            setIsClickedAdd(true);
          }}
        >
          Agregar {product.name} a carrito
        </button>
      </div>
    </div>
  );
}

export default Card;
