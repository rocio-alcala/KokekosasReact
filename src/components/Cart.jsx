function Cart(props) {
  const cart = props.cart;
  const products = props.products;
  const dispatch = props.dispatch;
  const setShowCart = props.setShowCart;
  console.log("@productoscargados", products);
  console.log("@carrito", cart);
  return (
    <div
      /*     className="modal fade" */
      id="exampleModal"
      tabIndex="-1"
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
              aria-label="Close"
              onClick={() => setShowCart(false)}
            />
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
                {Object.keys(cart)
                  .filter((productId) => cart[productId] >= 1)
                  .map((productId) => {
                    const product = products.find(
                      (prod) => prod.id === productId
                    )
                    const quantity = cart[productId]
                    return (
                      <tr key={productId}>
                        <th className="col-3" scope="col">
                          {product.name}
                        </th>
                        <th className="col-2" scope="col">
                          ${product.price}
                        </th>
                        <th className="col-2" scope="col">
                          {quantity}
                        </th>
                        <th className="col-3" scope="col">
                         ${product.price*quantity}
                        </th>
                        <th className="col-3" scope="col">
                          <button
                            className="btn btn-dark add" 
                            onClick={() => {
                              dispatch({ type: "REMOVE_PRODUCT", id: product.id });
                            }}
                          >
                           Borrar
                          </button>
                        </th>
                      </tr>
                    );
                  })}
              </thead>
              <tbody id="tbody"></tbody>
              <tfoot>
                <tr id="tfoot">
                  <th colSpan="12"> No cargaste nada a tu carrito </th>
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
            <button type="button" className="btn btn-light" id="terminarCompra">
              Terminar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
