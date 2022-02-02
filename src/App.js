import React, {useState} from "react";
import './App.css';

const api={
  key:"8580446645092610d198e600a87bd30b",
  base:'https://api.openweathermap.org/data/2.5/'
}
function App() {
const [query, setQuery] = useState('');
const [weather, setWeather]=useState('');

    const dateBuilder = (d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    }

  return (
    <div className="app">
<main>
   <div className='search-box'>
     <input type='text' className='search-bar' placeholder='Enter name'/>
   </div>
    <div className='location-box'>
        <div className='location'>New York City, US</div>
        <div className='date'>{dateBuilder(new Date())}</div>
    </div>
    <div className='weather-box'>
        <div className='temp'>
            15C
        </div>
        <div className='weather'>Sunny</div>
    </div>
</main>
    </div>
  );
}

export default App;
