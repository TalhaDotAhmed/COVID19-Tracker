import React, { useEffect, useState } from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from './images/image.png'
import CountryChart from './components/CountryChart/CountryChart';
import Map from './components/Map/Map';


function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect( () => {const dataFetched = async  () => {
    const data = await fetchData();

   setData(data);

  }
   dataFetched() }, []
     );

 const handleCountryChange =  async (country) => {
   
    const fetchedData = await fetchData(country);
   
    setCountry(fetchedData);
    setData(fetchedData);
  }

  return (
    

    <div className={styles.container}>
      <img src={image} className={styles.image} alt="covid19" />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Cards data={data}/>
      <Chart data={data} country={country} />
      <CountryChart data={data} country={country} />
      <Map />
   
    </div>
  );
}

export default App;
