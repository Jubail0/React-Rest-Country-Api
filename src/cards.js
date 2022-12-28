import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export default function Cards({name,capital,image,population,region,showCountry,id}) {
    return(<> 
    <Link to={`/${name}`}>
    <div className='card-container'> 
    
    <img className="card-img" src ={image} alt="not available" /> 
    <div className='card-info'> 
    <h4>{name}</h4> 
    <p><strong>Population:</strong> {population}</p> 
    <p><strong>Region:</strong> {region}</p> 
    <p><strong>Capital:</strong> {capital}</p> 
    </div>
    </div></Link> </>)
}
