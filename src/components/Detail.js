import React from "react";

export const Detail = ({ recipe, show, setshow }) => {
  return (
    <div>
      <div className="detail">
        <img src={recipe.imgUrl} />
        <div className="det-content">
          <h1>{recipe.title}</h1>
          <p>{recipe.details}</p>
        </div>
        <button onClick={() => setshow(!show)}>x</button>
      </div>
    </div>
  );
};
