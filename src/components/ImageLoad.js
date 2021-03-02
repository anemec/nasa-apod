import React from "react";

const ImageLoad = (props) => {
  function loadImg() {}
  console.log(props.isFlipped);
  return (
    <>
      {props.isFlipped ? (
        <div className="picture-card__explanation">
          <h1>Explanation</h1>
          <p>{props.data.explanation}</p>
        </div>
      ) : (
        <img
          className="picture-card__image"
          src={props.data.hdurl}
          alt={props.data.title}
        />
      )}
    </>
  );
};

export default ImageLoad;
