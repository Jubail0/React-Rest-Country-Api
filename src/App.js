import React from 'react'
import Cards from './cards'
import './index.css';
import Country from './country';
import {
BrowserRouter as Router, 
Switch, 
Route
}from 'react-router-dom' 

export default function App() {
   const[allCountryData ,setAllCountryData]=React.useState([])
   const[toggle ,setToggle]=React.useState(false) 
   const [userValue,setUserValue]=React.useState({ countryName : "", regionName :"" }) 
   
   function handleChange(e) {
        let {name, value}=e.target 
        setUserValue(prevState =>({ ...prevState, [name] :value }))
    }


    function getData() {
        fetch("https://restcountries.com/v2/all") 
        .then(res => res.json()) 
        .then(data => setAllCountryData(data.map((item, index) => { 
          return{ name : item.name,
                  image : item.flag,
                  population : item.population,
                  region : item.region,
                  capital : item.capital, } })))
    }

    React.useEffect(() => 
   { getData() },[]) 
   
   function darkMode() {
        setToggle(prevState => !prevState) 
        console.log(toggle)
    }

    const displayCountry = allCountryData.filter(item => 
    { if(item.name.toLowerCase().includes(userValue.countryName.toLowerCase()) && 
      item.region.toLowerCase().includes(userValue.regionName.toLowerCase()))
      { return item; }
      else if(userValue.regionName.length <=3 && item.name.toLowerCase().includes(userValue.countryName.toLowerCase()))
      { return item; } }).map((item,index) => 
      <Cards key={index} 
      name = {item.name} 
      population ={item.population} 
      region ={item.region} 
      capital ={item.capital} 
      image ={item.image} />) 
    return(
    <Router> 
    <main > 
    <nav className='navBar'> 
    <h1 className='nav--heading'>Where in the world?</h1> 
    <p className='nav--darkMode' onClick={darkMode} >Dark Mode</p> 
    </nav>

    <div className='searchBox-container' > 
   
    <input className='search-box' 
    onChange={handleChange} 
    value={userValue.countryName} 
    name ="countryName" 
    placeholder='Search for a country...' 
    type="text" /> 
    
    <select className='filterByRegions' 
    onChange={handleChange} 
    name="regionName" > 
    
    <option value="all" >All</option> 
    <option value="africa">Africa</option> 
    <option value="america">America</option> 
    <option value="europe">Europe</option> 
    <option value="asia">Asia</option> 
    <option value="oceania">oceania</option> 
    </select> 
    
    </div> 
    <Switch> 

    <Route path="/" exact> 
    <section className='section'> 
    {displayCountry}
    </section> 
    </Route>

    <Route path="/:name"> 
    <Country/> 
    </Route>

    </Switch> 
    </main> 
    </Router>)
}
