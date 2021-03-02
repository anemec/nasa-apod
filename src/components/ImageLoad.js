import React from 'react';

const ImageLoad = (props) => {
  function loadImg() {}
  return (
    <>
      {props.isLoading ? (
        <p>Loading...</p>
      ) : (
        <img
          className='picture-card__image'
          src={props.data.hdurl}
          alt={props.data.title}
        />
      )}
    </>
  );
};

export default ImageLoad;
