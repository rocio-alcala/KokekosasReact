import { useRef } from "react";

function Filter(props) {
  const setProducts = props.setProducts;
  const products = props.products;
  const filtroRef = useRef(null);
  const newOrder = [...products]

  function handleSelecction(products, setProducts) {
    const selecction = filtroRef.current.value;
    if (selecction === "precioCreciente") {
      newOrder.sort((a, b) => a.price - b.price);
    } else if (selecction === "precioDecreciente") {
      newOrder.sort((a, b) => b.price - a.price);
    } else if (selecction === "alfabetico") {
      newOrder.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selecction === "masVendidos") {
      newOrder.sort((a, b) => a.id - b.id);
    }
    setProducts(newOrder);
  }
  return (
    <div className="input-group mb-3" id="filtros">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        Filtros
      </label>
      <select
        className="form-select"
        id="filtro"
        ref={filtroRef}
        onChange={() => {
          handleSelecction(products, setProducts);
          console.log(products);
        }}
      >
        <option id="masVendido" value="masVendidos">
          Mas vendidos
        </option>
        <option value="precioCreciente">Precio creciente</option>
        <option value="precioDecreciente">Precio decreciente</option>
        <option value="alfabetico">A - Z</option>
      </select>
    </div>
  );
}

export default Filter;
