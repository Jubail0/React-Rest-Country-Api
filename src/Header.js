import React from 'react'
import Cards from './cards'

export default function Header(){
  const[searchValue, setValue]=React.useState({
      searchCountryName:''
  })

  function search(event){
  let{type , name , value } = event.target
 setValue(prevState =>({
     ...prevState,
     [name]:value

 }))

  }


    return (
        <div>
        <div className='searchBoxes'>
        <input type ='text' onChange={search} value={searchValue.searchCountryName} name= 'searchCountryName'placeholder='Search for a country name...' className='search-box' />

        <select className='filterByRegions'>
            <option >filter by regions</option>
            <option value ='Africa' >Africa</option>
            <option value ='America' >America</option>
            <option value ='Europe' >Europe</option>
            <option value ='Asia' >Asia</option>
            <option value ='Oceania' >Oceania</option>
        </select>
        </div>

        <Cards inputValue = {searchValue}/>
        </div>
    )
} 