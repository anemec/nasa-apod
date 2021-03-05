import React from "react";

const ImageLoad = (props) => {
  function loadImg() {}
  console.log(props.isFlipped);
  return (
    <>
      <div className="picture-card__explanation">
        <h1>Explanation</h1>
        <p>{props.data.explanation}</p>
      </div>
      <div className="picture-card__wrapper">
        <img
          className="picture-card__image"
          src={props.data.hdurl}
          alt={props.data.title}
        />
      </div>
    </>
  );
};

export default ImageLoad;
