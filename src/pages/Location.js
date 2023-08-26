import React, { useEffect, useState } from 'react';

const Location = () => {

    const [myPos, setMyPos] = useState();

    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => { // from getCurrentPosition to watchPosition
                console.log(position)
                // setMyPos(position)
            })
        }
    }, []);
        return ( 
        <>
            <h1>This is Location!</h1>
  
            {/* <p>Latitude: {myPos?.coords.latitude}</p> */}
        
        </> 
    );
}

export default Location;

