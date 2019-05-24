import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ImgLinkForm">
      <p className='f3'>
        {'This App will detect faces in your pictures, and predict the celebrity. Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white button-color'
            onClick={onButtonSubmit}
          >Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;