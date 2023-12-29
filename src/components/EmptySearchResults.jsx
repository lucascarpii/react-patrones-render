const EmptySearchResults = ({searchText}) => {
  return (
    <div className="text-neutral-600 flex flex-col items-center justify-center text-center w-full gap-2 pt-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>No hay resultados para <strong>"{searchText}"</strong>.</span>
    </div>
  )
}

export { EmptySearchResults }