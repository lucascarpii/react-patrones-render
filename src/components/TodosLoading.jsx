import React from "react";

function TodosLoading(){
  return(
    <div className=" animate-pulse flex flex-col gap-2" >
      <span className=" bg-white p-3 h-12 rounded flex items-center justify-between" >
        <div className="flex">
          <div className="h-5 w-5 rounded-full bg-gray-300 mr-2"></div>
          <p className="h-5 w-32 rounded bg-gray-300"></p>
        </div>
        <div className="h-5 w-5 rounded bg-gray-300"></div>
      </span>
    </div>
  )
}

export {TodosLoading}