import React, { useContext } from 'react'
import searchIconWhite from '../img/search-icon-white.png'
import searchIconDark from '../img/search-icon-dark.png'
import { SearchBarContext } from '../App.js'

export default function SearchForm() { 

    const {setSearch, lightMode} = useContext(SearchBarContext)

    let searchIcon = lightMode === 'dark' ? searchIconWhite : searchIconDark

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return (
        <form className='search-form'>
            <img className='search-icon' src={searchIcon} alt="" />
            <input autoFocus onChange={handleChange} className='coin-search-input' type="text" placeholder='Search' />
        </form>
    )
}
