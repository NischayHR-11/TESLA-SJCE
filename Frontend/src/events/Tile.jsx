import React from 'react';

function Tile({ image, desc }) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="imagediv" style={{width : '50%', height: '100%'}}>
                <img src={image} alt={desc} style={{ width: '50px', height: '50px' }} />
            </div>
            <p>{desc}</p>
        </div>
    );
}

export default Tile;
