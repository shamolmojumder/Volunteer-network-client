import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={require(`../../images/${event.pic}`)} alt=""/>
            <h3>{event.name}</h3>
            
        </div>
    );
};

export default Event;