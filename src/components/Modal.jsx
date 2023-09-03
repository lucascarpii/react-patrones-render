import React from "react"
import ReactDOM from "react-dom"
import { TodoContext } from "../TodoContext"

function Modal({ children, modalTitle }){
  const {setOpenModal} = React.useContext(TodoContext)
  return ReactDOM.createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-black/20">
      <div className="bg-white rounded-lg max-w-screen-sm w-full">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-500">
                    {modalTitle ?  modalTitle : 'Titulo del modal'}
                </h3>
                <button onClick={()=> setOpenModal(state => !state)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6">
                {children}
            </div>
            <div className="grid sm:grid-cols-2 p-4 sm:p-6 gap-2 border-t border-gray-200 ">
                <button onClick={()=> setOpenModal(state => !state)} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Cancelar</button>
                <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Agregar</button>
            </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }