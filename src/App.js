import React from "react";
import './App.css';

const api={
  key:"8580446645092610d198e600a87bd30b",
  base:'https://api.openweathermap.org/data/2.5/'
}
function App() {

  return (
    <div className="app">
<main>
   <div className='search-box'>
     <input type='text' className='search-bar' placeholder='Enter name'/>
   </div>
</main>
    </div>
  );
}

export default App;
