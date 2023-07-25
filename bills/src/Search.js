 import React ,{ useState } from "react"

function Search({handleSearch}){
    const [dataInput , setDataInput]= useState("")
    function handleChange(event){
        setDataInput(event.target.value)
        handleSearch(event.target.value)
    }
    return(
        
       <form>
        <label htmlFor="src">Search</label>
        <input type="text" value={dataInput} onChange={handleChange}></input>
       </form>
        
        

    )
}
export default Search
