import React from 'react';
import Tile from './tile';

function Econtainer({ eventId }) {
    const imageUrl = 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75';  // Replace with your image URL
    const description = 'This is an example image' + eventId;
    
    return (
        <div style={{ width: '100%', height: '50vh' }}>
            <Tile image={imageUrl} desc={description} />
        </div>
    );
}

export default Econtainer;
