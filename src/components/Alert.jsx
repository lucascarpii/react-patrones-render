import React from 'react';

const Alert = ({ titulo = 'Alert title', texto = 'Alert text', onClickFn = () => { }, buttonText = 'Recargar' }) => (
  <div className='bg-black/5 w-full h-screen fixed top-0 left-0 flex items-center justify-center'>
    <div className="p-4 select-none text-indigo-700 border border-indigo-300 rounded-lg bg-indigo-50 lg:fixed top-6 right-10 w-80" role="alert">
      <div className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
        </svg>
        <h3 className="text-lg font-medium leading-none">{titulo}</h3>
      </div>
      <div className="text-sm my-3">
        {texto}
      </div>
      <div className="flex">
        <button type="button" onClick={onClickFn} className="text-white bg-indigo-700 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg text-xs px-3 py-2 me-2 text-center inline-flex items-center ">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

export { Alert };
