import React from "react"

function CreateTodoButton({ setOpenModal, loading }) {
  if (loading) {
    return (
      <div className="animate-pulse  bg-gray-300 rounded-full h-10 w-10 absolute bottom-6 right-6"></div>
    )
  }
  return (
    <button 
      type="button" 
      onClick={() => setOpenModal(state => !state)}
      className="absolute bottom-6 right-6 text-white bg-gradient-to-br from-indigo-600 to-blue-500 scale-100 hover:scale-105 transition-all duration-100 outline-none rounded-full p-2 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  )
}

export { CreateTodoButton }