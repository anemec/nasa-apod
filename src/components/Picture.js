import React, { useState, useEffect } from 'react';
import {
  getPicture,
  getPrevPicture,
  getNextPicture,
} from '../utils/getPicture';
import ImageLoad from './ImageLoad';

const d = {
  copyright: 'U. Mishra',
  date: '2021-03-01',
  explanation:
    'The Pelican Nebula is changing.   The entire nebula, officially designated IC 5070, is divided from the larger North America Nebula by a molecular cloud filled with dark dust.  The Pelican, however, is particularly interesting because it is an unusually active mix of star formation and evolving gas clouds.  The featured picture was processed to bring out two main colors, red and blue, with the red dominated by light emitted by interstellar hydrogen. Ultraviolet light emitted by young energetic stars is slowly transforming cold gas in the nebula to hot gas, with the advancing boundary between the two, known as an ionization front, visible in bright red across the image center. Particularly dense tentacles of cold gas remain.  Millions of years from now this nebula might no longer be known as the Pelican, as the balance and placement of stars and gas will surely leave something that appears completely different.   APOD in world languages: Arabic, Bulgarian, Catalan, Chinese (Beijing), Chinese (Taiwan), Croatian, Czech, Dutch, Farsi, French, German, Hebrew, Indonesian, Korean, Montenegrin, Polish, Russian, Serbian, Slovenian,  Spanish, Taiwanese, Turkish, Turkish, and  Ukrainian',
  hdurl: 'https://apod.nasa.gov/apod/image/2102/Pelican_PetraskoEtAl_3555.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'The Pelican Nebula in Red and Blue',
  url: 'https://apod.nasa.gov/apod/image/2102/Pelican_PetraskoEtAl_960.jpg',
};

const Picture = () => {
  const [picData, setPicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const result = await getPicture();
      updatePicture(result);
    }
    // getData();
    updatePicture(d);
  }, []);

  async function prevPicture() {
    setLoading(true);
    let result = await getPrevPicture(picData.date);
    updatePicture(result);
  }

  async function nextPicture() {
    setLoading(true);
    let result = await getNextPicture(picData.date);
    updatePicture(result);
  }

  function updatePicture(result) {
    setPicData(result);
    setLoading(false);
  }

  return (
    <>
      <div className='picture-card'>
        <h1 className='picture-card__title'>{picData && picData.title}</h1>
        <div className='picture-card__image-holder'>
          {/* {loading ? <p>Loading...</p> : <ImageLoad data={picData} />} */}
          <ImageLoad data={picData} isLoading={loading} />
        </div>
      </div>
      <div className='btn-container'>
        <button
          className='btn-container__btn btn-container__btn-left'
          onClick={() => prevPicture()}
        >
          {'<'}
        </button>
        <button
          className='btn-container__btn btn-container__btn-right'
          onClick={() => nextPicture()}
        >
          {'>'}
        </button>
      </div>
    </>
  );
};

export default Picture;
