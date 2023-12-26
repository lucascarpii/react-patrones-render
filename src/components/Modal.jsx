import React from "react"
import ReactDOM from "react-dom"

function Modal({ children, modalTitle, setOpenModal }){
  return ReactDOM.createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-black/20">
      <div className="bg-white rounded-lg max-w-screen-sm w-full">
            <div className="flex items-center justify-between p-4 border-b">
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
            <div className="p-4">
                {children}
            </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }