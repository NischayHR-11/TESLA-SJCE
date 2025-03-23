import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile';

function Econtainer({ eventId }) {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/events/${eventId}`)
            .then(response => {
                setEventData(response.data);
            })
            .catch(error => {
                console.error("Error fetching event data:", error);
            });
    }, [eventId]);

    return (
        <div className='eventcontainer' style={{ width: '99%', height: '57vh', margin: '10px'}}>
            {eventData ? (
                eventData.events.map((session, index) => (
                    <Tile 
                        key={index}
                        imageSrc="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                        descriptionText={session.description}
                        headerText={session.title}
                        tile={session.tile}
                    />
                ))
            ) : (
                <p>Loading event data...</p>
            )}
        </div>
    );
}

export default Econtainer;
