import React, { useState } from "react";
import { Detail } from "./Detail";

function Recipes({ recipe }) {
  const [show, setshow] = useState(false);
  return (
    <div className="card">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <img className="imag" src={recipe.imgUrl} />
      <button onClick={() => setshow(!show)}> show detail</button>
      {show ? <Detail setshow={setshow} show={show} recipe={recipe} /> : null}
    </div>
  );
}

export default Recipes;
