import React from 'react';

const Alert = ({ titulo = 'Alert title', texto = 'Alert text', onClickFn = ()=> {}, buttonText = 'Recargar' }) => (
  <div className="p-3 select-none text-sky-600 border border-sky-300 rounded-lg bg-sky-50 fixed top-10 right-10 w-80" role="alert">
    <div className="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd" />
      </svg>
      <h3 className="text-lg font-medium leading-none">{titulo}</h3>
    </div>
    <div className="text-sm my-2">
      {texto}
    </div>
    <div className="flex">
      <button type="button" onClick={onClickFn} className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center ">
        {buttonText}
      </button>
    </div>
  </div>
);

export  { Alert };
