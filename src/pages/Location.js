import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Location = () => {

    const [myPos, setmyPos] = useState();

    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.watchPosition((position) => { // from getCurrentPosition to watchPosition
                console.log(position)
                setmyPos(position)
            })
        }
    }, []);

        return ( 
        <>
            <h1>This is Location!</h1>

            <p>Latitude: {myPos?.coords.latitude}</p>
            <p>Longitude: {myPos?.coords.longitude}</p>
            <p>Altitude: {myPos?.coords.altitude}</p>
            <p>Speed: {myPos?.coords.speed}</p>
            <p>Accuracy: {myPos?.coords.accuracy}</p>
        </> 
    );
}

export default Location;
