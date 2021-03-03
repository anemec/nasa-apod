import React, { useState, useEffect } from 'react';
import {
  getDefaultUrl,
  getNextDateUrl,
  getPrevDateUrl,
} from '../utils/getPicture';
import ImageLoad from './ImageLoad';
import Loading from './Loading';
import useFetch from '../utils/useFetch';

const defaultUrl = getDefaultUrl();

const Picture = () => {
  const [flipped, setFlipped] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [status, data] = useFetch(url);

  useEffect(() => {
    setFlipped(false);
  }, [url]);

  return (
    <>
      <div className='picture-card'>
        <h1 className='picture-card__title'>{data && data.title}</h1>
        <div
          className='picture-card__image-holder'
          onClick={() => setFlipped(!flipped)}
        >
          {status === 'fetching' ? (
            <Loading />
          ) : (
            <ImageLoad data={data} isFlipped={flipped} />
          )}
        </div>
      </div>
      <div className='btn-container'>
        <button
          className='btn-container__btn btn-container__btn-left'
          onClick={() => setUrl(getPrevDateUrl(data.date))}
        >
          {'<'}
        </button>
        <button
          className='btn-container__btn btn-container__btn-right'
          onClick={() => setUrl(getNextDateUrl(data.date))}
        >
          {'>'}
        </button>
      </div>
    </>
  );
};

export default Picture;
