function Card(props) {
  const product = props.product;
  const setProducts = props.setProducts;
  const products = props.products;
  const selectedProduct = products.find((p) => p.name === product.name);

  return (
    <div className="card col-4 col-md-4 col-lg-3">
      <img
        src={product.imagen}
        className="card-img-top"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text stock"></p>
        <button
          className="btn btn-dark"
          onClick={() => {
            console.log("@selectedProduct", selectedProduct);
            selectedProduct.inCart = selectedProduct.inCart + 1;
            setProducts(products);
            console.log("@products", products)
          }}
        >
          Agregar {product.name} a carrito
        </button>
      </div>
    </div>
  );
}

export default Card;
