import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';

 const url = 'https://api.tvmaze.com/shows';

function App() {
const [loading, setLoading] = useState(false);
const [tours, setTours] = useState([]);

const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id );
  setTours(newTours);
 } 


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

if(tours.length === 0) {
  return <main>
<div>
  <h1>No shows left</h1>
  <button className="btn" onClick={fetchTours}>refresh</button>
</div>
  </main> 
 
}
  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>)
}
export default App
