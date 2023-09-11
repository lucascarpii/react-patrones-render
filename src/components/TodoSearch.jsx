import React from "react"
import { TodoContext } from "../TodoContext"
function TodoSearch(){
  const {searchValue, setSearchValue, loading} = React.useContext(TodoContext)
  if(loading){
    return (
      <div className="animate-pulse bg-white py-2 px-4 w-full rounded mb-4 h-[40px] flex items-center" >
        {/* <span className="bg-gray-300 h-5 w-32 rounded"></span> */}

        {/* <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span>
        <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span>
        <span className="h-2 w-2 bg-gray-300 animate-pulse rounded-full mr-1"></span> */}
        
        <p className="text-gray-300 font-medium">Cargando datos...</p>
      </div>
    )
  }
  return(
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      <input 
        className="w-full py-2 pl-10 pr-4 font-medium text-gray-500 rounded bg-white outline-indigo-300 placeholder-gray-400" 
        placeholder="Buscar TODOs..." 
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }} />
    </div>
  )
}

export { TodoSearch }