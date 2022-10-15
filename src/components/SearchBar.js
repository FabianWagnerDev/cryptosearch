import React from 'react'
import SearchForm from './SearchForm'
import BtnShowListings from './BtnShowListings'
import BtnCurrency from './BtnCurrency'
import BtnTimePeriod from './BtnTimePeriod'
import BtnRefresh from './BtnRefresh'

export default function SearchBar() {

    return (
        <div className='search-container-border'>
            <div className='search-container'>
                <h1 className='crypto-search-hl'>Crypto Search</h1>
                <SearchForm />
                <div className='btn-control-wrapper'>
                    <BtnShowListings />
                    <BtnCurrency />
                    <BtnTimePeriod />
                    <BtnRefresh />
                </div>
            </div>
        </div>
    )
}
