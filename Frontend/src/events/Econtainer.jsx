import React from 'react';
import Tile from './tile';

function Econtainer({ eventId }) {
    const imageUrl = 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75';  // Replace with your image URL
    const description = 'This is an example image' + eventId;
    
    return (
        <div className='eventcontainer' style={{ width: '99%', height: '57vh', margin: '10px'}}>
            <Tile imageSrc={imageUrl} descriptionText={description} headerText={eventId} tile={1}/>
        </div>
    );
}

export default Econtainer;
