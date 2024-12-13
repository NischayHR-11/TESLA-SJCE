import React from 'react';
import './Tile.css';

const tile1 = ({ imageSrc, headerText, descriptionText }) => {
  return (
    <div className="tile">
      <div className="tile-image">
        <img src={imageSrc} alt="Tile" />
      </div>
      <div className="tile-content">
        <h3>{headerText + "  style = 1"}</h3>
        <p>{descriptionText}</p>
      </div>
    </div>
  );
};

const tile2 = ({ imageSrc, headerText, descriptionText }) => {
  return (
    <div className="tile">
      <div className="tile-image">
        <img src={imageSrc} alt="Tile" />
      </div>
      <div className="tile-content">
        <h3>{headerText + "   style = 2"}</h3>
        <p>{descriptionText}</p>
      </div>
    </div>
  );
};

const Tile = ({ imageSrc, headerText, descriptionText , tile}) => {
  let ans = null;
  if(tile == 1){
    ans = tile1({imageSrc,headerText,descriptionText});
  }
  else if(tile == 2){
    ans = tile2({imageSrc,headerText,descriptionText});
  }
  return (
    ans
  );
};

export default Tile;
