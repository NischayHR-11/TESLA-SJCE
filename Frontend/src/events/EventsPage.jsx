import React from 'react';
import Econtainer from './Econtainer';

function EventsPage() {
    return (
        <div>
            <Econtainer eventId={1} />
            <Econtainer eventId={2} />
            <Econtainer eventId={3} />
        </div>
    );
}

export default EventsPage;
