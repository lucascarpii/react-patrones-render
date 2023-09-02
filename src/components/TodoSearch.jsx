import React from "react"
import { TodoContext } from "../TodoContext"
function TodoSearch(){
  const {searchValue, setSearchValue, loading} = React.useContext(TodoContext)
  if(loading){
    return (
      <div className="animate-pulse bg-white py-2 px-4 w-full rounded mb-4 h-[42px] flex items-center" >
        {/* <span className="bg-gray-300 h-5 w-32 rounded"></span> */}

        {/* <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span>
        <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span>
        <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span> */}
        
        <p className="text-gray-300 font-semibold">Cargando datos...</p>
      </div>
    )
  }
  return(
    <input 
    className="bg-white py-2 px-4 w-full border rounded mb-4" 
    placeholder="Cortar cebolla" 
    value={searchValue}
    onChange={(e) => {
      setSearchValue(e.target.value)
    }} />
  )
}

export { TodoSearch }