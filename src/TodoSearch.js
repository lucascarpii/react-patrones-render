import React from "react"
function TodoSearch({searchValue, setSearchValue}){
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