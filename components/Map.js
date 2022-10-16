import {useState} from 'react';
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter'

function Map({searchResults}) {
    
    

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
 

        
       
    return <ReactMapGL

    
      style={{width: 900, height: 900}}
        mapStyle="mapbox://styles/nroc/cl9a87qi5002e14mmf7zw6b7a"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
   ></ReactMapGL>
}

export default Map 