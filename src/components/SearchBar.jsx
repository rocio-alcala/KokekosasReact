import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const setFilteredProducts = props.setFilteredProducts;
  const products = props.products;
  const [searchState, setShearchState] = useState("");
  const handleOnChange = (e) => {
    setShearchState(e.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="col input-group flex-wrap">
      <span className="input-group-text" id="addon-wrapping"></span>
      <input
        onChange={(e) => handleOnChange(e)}
        style={{ display: "flex" }}
        value={searchState}
        id="buscar"
        type="text"
        className="form-control"
        placeholder="Buscar"
      />
      <button
        onClick={() => {
          setShearchState("");
          setFilteredProducts(products);
        }}
      ></button>
    </div>
  );
}

export default SearchBar;
