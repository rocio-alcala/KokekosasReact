
import React from "react";
import { useRef } from "react";

function Filter(props) {
  const setFilteredProducts = props.setFilteredProducts;
  const filteredProducts = props.filteredProducts;
  const filtroRef = useRef(null);
  const newOrder = [...filteredProducts]

  function handleSelecction(setFilteredProducts) {
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
    setFilteredProducts(newOrder);
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
          handleSelecction(setFilteredProducts);
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
