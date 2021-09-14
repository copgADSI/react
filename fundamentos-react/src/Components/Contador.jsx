import React, { useState } from "react";

export function Contador(props) {
  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <h1> {contador} </h1>
      <h3> {props.titulo} </h3>
    </>
  );
}
