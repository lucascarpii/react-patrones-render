import React from "react"

function CreateTodoButton({ setOpenModal, loading }) {
  if (loading) {
    return (
      <div className="animate-pulse bg-gradient-to-br from-gray-300 to-gray-400 rounded-full h-11 w-11 fixed bottom-6 right-6"></div>
    )
  }
  return (
    <button 
      type="button" 
      onClick={() => setOpenModal(state => !state)}
      className="fixed bottom-6 right-6 text-white bg-gradient-to-br from-blue-400 to-indigo-500 scale-100 hover:scale-105 transition-all duration-100 outline-none rounded-full p-2.5 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  )
}

export { CreateTodoButton }