import React from 'react';
import Tilt from 'react-tilt';
import ai_face from './ai_face.png';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 60, width: 60 }} >
        <div className="Tilt-inner pa2">
          <img alt='logo' src={ai_face}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;