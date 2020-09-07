import React, { useState, useEffect } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import axios from 'axios';
import mapboxgl from 'mapbox-gl'


import styles from './Map.module.css';

const Map = () => {

    const fetchlocation = async () => {
        let url ='http://api.coronatracker.com/v3/stats/worldometer/country?countryCode';
          try {
            const  response = await axios.get(url);
        
            return response;
           
          } catch (error) {
            return error;
          }
        }

        const  [countries, setCountries] = useState([]);

        useEffect(() => { const locationFetched = async () => {
        
            setCountries(await fetchlocation());
            
        }
        console.log(countries);
            locationFetched()
        }, [])

        
        
    const Mapbox_token = "pk.eyJ1Ijoic2FsbWFuZGF5YWwiLCJhIjoiY2tiemVzcG54MTkzZjJ6cDc2bndtaWg2byJ9.voSr5ZNIeuGRTV2Qqu4h3w"

    const [viewport, setViewport] = useState({
       
        width:"100vw" ,
        height: "100vh",
        zoom:2,
        center:[0,20],
        latitude: 30,
        longitude: 60,
    })

    return (
        <div>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken= {Mapbox_token}
                mapStyle="mapbox://styles/salmandayal/ckbzhl5gn414q1io9bkh5cyci"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
       

            </ReactMapGL>
        </div>
    )
}

export default Map;
