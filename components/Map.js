import {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter'

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({});
    
    

  //transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({ 
        
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
 
   

        
       
    return (<ReactMapGL 

    
      style={{width: 900, height: 900}}
        mapStyle="mapbox://styles/nroc/cl9a87qi5002e14mmf7zw6b7a"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport} 
        zoom={11}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
       

    >

    {searchResults.map((result) => (
    <div key={result.long}>
        <Marker
            longitude={result.long} 
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            >
            <p 
            onClick={() => setSelectedLocation(result)} 
            className="cursor-pointer text-2xl animate-bounce" 
            aria-label="push-pin" 
            role="img">📌</p>


        </Marker>

        {/* The popup that should show if we click on a Marker */}

        {selectedLocation.long === result.long ? (
            <Popup 

            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
          
                {result.title}
            </Popup>
        ) : (   
            
            false
        )}

    </div>
))}
   </ReactMapGL>
    )
}

export default Map 