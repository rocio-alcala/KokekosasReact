import React from "react";

export default function ContactForm() {
//TO-DO: validacion de form con yup por ejemplo
//TO-DO: manejo del submit mediante un estado la info del form o react-hook-form
  return (
    <form id="formulario">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Direccion de e-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="nombre@ejemplo.com"
        ></input>
      </div>
      <div className="mb-3">
        <label
          htmlFor="nombre"
          className="form-label"
          placeholder="Ingresa tu nombre completo"
        >
          Nombre y apellido
        </label>
        <input type="text" className="form-control" id="nombre"></input>
      </div>
      <div className="mb-3">
        <label
          htmlFor="numero"
          className="form-label"
          placeholder="Ingresa tu numero de telefono"
        >
          Numero de telefono
        </label>
        <input type="tel" className="form-control" id="numero"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="consulta" className="form-label">
          Contanos en que te podemos ayudar
        </label>
        <textarea className="form-control" id="consulta" rows="3"></textarea>
      </div>
      <button
        type="submit"
        id="enviar"
        value="Enviar"
        className="btn btn-dark col-5 align-self-center"
        style={{width:80}}
      ></button>
    </form>
  );
}
