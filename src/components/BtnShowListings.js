import React, { useContext, useRef } from 'react'
import { SearchBarContext } from '../App.js'

export default function BtnShowListings() {

  const {showListings, setShowListings} = useContext(SearchBarContext)
  const btnShowListings = useRef()
  const allText = useRef()
  const plusIcon = useRef()
  const minusIcon = useRef()

  function updateListings() {
    if (showListings === 'All') {
        setShowListings('+')
        switchIconTo(plusIcon.current)
        btnShowListings.current.title = 'show only negative price changes'

    } else if (showListings === '+') {
        setShowListings('-')
        switchIconTo(minusIcon.current)
        btnShowListings.current.title = 'show all price changes'

    } else if (showListings === '-') {
        setShowListings('All')
        switchIconTo(allText.current)
        btnShowListings.current.title = 'show only positive price changes'
    }
  }

  function switchIconTo(activeIcon) {
        const allIcons = document.querySelectorAll('.show-listings-icon')
        allIcons.forEach(icon => icon.style.display = 'none')
        activeIcon.style.display = 'block'
  }
 
  return (
      <div className='btn-control show-listings' ref={btnShowListings} onClick={updateListings} title="show only positive price changes">
          <span className='show-listings-icon all-text' ref={allText}>All</span>
          <svg className='show-listings-icon plus-icon' ref={plusIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          <svg className='show-listings-icon minus-icon' ref={minusIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>
      </div>
  )
}
