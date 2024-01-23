import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';

 const url = 'https://api.tvmaze.com/shows';

function App() {
const [loading, setLoading] = useState(false);
const [tours, setTours] = useState([]);

const fetchTours = async () => {
  try {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
    setTours(data.slice(0,10));

    
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false);
  }
};

useEffect(() => {
  fetchTours();
}, []);


if(loading) {
  return (
    <main>  
      <Loading />
    </main>
  );
  
}
  return (
  <main>
    <Tours tours={tours}/>
  </main>)
}
export default App
