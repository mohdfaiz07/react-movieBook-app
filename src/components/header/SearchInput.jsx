import React, { useContext, } from 'react'
import { moviesContext } from '../../context/ContextStore'

const SearchInput = () => {

    const {searchVal,setSearchVal} = useContext(moviesContext)
    
    const searchChangeHandler = (e)=>{
    
        setSearchVal(e.target.value)
    }


  return (
   <>
    <input type="text"
    placeholder='type movie name...' 
    value={searchVal}
    onChange={searchChangeHandler} 
    style={{padding: "7px 15px", borderRadius: '4px', border: "none", outline:'none', backgroundColor: 'white'}}/>
   </>
  )
}

export default SearchInput