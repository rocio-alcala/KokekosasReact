function Cart(props) {
  return  <div
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
  </div>;
}

export default Cart;
