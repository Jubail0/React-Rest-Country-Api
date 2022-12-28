import React from 'react'
import{Link , useParams}from "react-router-dom"
import './index.css';
export default function Country (){
const { name}=useParams()
const [country, setCountry] =React.useState([])

function fetchCountryData(){
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then (data => setCountry(data))

}

console.log(country)
React.useEffect(()=>{
fetchCountryData()
},[name])
    return (
        
        <div className='country-con'>
           <Link to="/"> <button className='back'>Back</button></Link>
           {country.filter(item => {
            if(item.name === name){
                return item
            }
           }).map((item,index) =>

             <div className='main-con' key={item.numericCode}>
             <div className='image-con'>
             <img className='country-image' src={item.flag} alt={item.name}/>
             </div>
             <div className='informations'>
             <div>
             <h1>{item.name}</h1>
              </div>
             <div className='wrapper'>
              <div className='info-1'>
              <span><strong>Native Name:</strong> {item.nativeName}</span>   
              <span><strong>Population:</strong> {item.population}</span>   
              <span><strong>Region:</strong> {item.region}</span>   
              <span><strong>Sub Region:</strong> {item.subregion}</span>   
              <span><strong>Capital:</strong> {item.capital}</span>
              </div>  
 
             <div className='info-2'>
             <span><strong>Top Level Domain:</strong> {item.topLevelDomain}</span>    
             <span><strong>Currencies:</strong> {item.currencies[0].name}</span>    
             <span><strong>Languages:</strong> {item.languages[0].name}</span>    
             </div> 
             </div>
 
             
         </div>
        
             </div>
)}
          
        </div>
    )
}