
import { getCenter } from 'geolib';
import {useState} from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

function ReactMap({searchResults}) {
  
  const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))
           
    
    const center = getCenter(coordinates)

 


  return (
    <Map
      initialViewState={{
        latitude: center.latitude,
        longitude: center.longitude,

        zoom: 11,
      }}
      style={{width: 900, height: 900}}
   mapStyle="mapbox://styles/nroc/cl9a87qi5002e14mmf7zw6b7a"
        mapboxAccessToken={process.env.mapbox_key}

        >
            {searchResults.map(result => ( 
                <div 
                key={result.long}>
                <Marker
                className="cursor-pointer text-2xl animate-bounce"
                latitude={result.lat}
                longitude={result.long}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p className='cursor-pointer text-2xl animate-pulse'
                    role="img" 
                    aria-label="push-pin">📌</p>
                    </Marker>

                    {selectedLocation.long === result.long ? ( 
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            closeButton={true}
                            latitude={result.lat}
                            longitude={result.long}
                            anchor='bottom'
                            >
                                {result.title}
                        </Popup>
                        ) : (
                            false
                           ) }
                </div>
            ))}

        </Map>
    
  );
}

export default ReactMap


