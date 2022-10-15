import React, { useState, useEffect, useRef } from 'react'
import './scss/App.scss'
import SearchBar from './components/SearchBar'
import CoinListingHeader from './components/CoinListingHeader'
import CoinListing from './components/CoinListing'
import Footer from './components/Footer'
import SettingsBar from './components/SettingsBar'
import BackToTop from './components/BackToTop'

export const SearchBarContext = React.createContext() 
export const ListingHeaderContext = React.createContext()

export default function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [timePeriod, setTimePeriod] = useState('24h')
  const [currency, setCurrency] = useState('€')
  const [showListings, setShowListings] = useState('All')
  const [lightMode, setLightMode] = useState('dark')
  const [priceOrder, setPriceOrder] = useState(null)
  const [volumeOrder, setVolumeOrder] = useState(null)
  const [mktCapOrder, setMktCapOrder] = useState('desc')
  const [priceChangeOrder, setPriceChangeOrder] = useState(null)

  const scrollOffset = useRef(0)
  let allTimeouts = useRef([])

  function getApiData(currencyType) {
    if (currencyType === '€') {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y', {cache: "no-store"})
        .then(res => {
            return res.json()
        })
        .then(res => {
            setCoins(res)
        })
        .catch(error => {
            console.log(error)
        })

    } else if (currencyType === '$') {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y', {cache: "no-store"})
        .then(res => {
            return res.json()
        })
        .then(res => {
            setCoins(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
  }

  useEffect(() => {
      getApiData('€')
  }, [])

  // 1. Filter coins for search
  const filteredCoins_Search = coins.filter(coin => {
      return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  // 2. Filter coins for showListings +/-/all in selected timePeriod
  const filteredCoins_showListings_inTimePeriod = filteredCoins_Search.filter(coin => {
      let filteredCoin
      if (showListings === '+' && getPriceChangePercent_inTimePeriod(coin) > 0) {
          filteredCoin = coin
      } else if (showListings === '-' && getPriceChangePercent_inTimePeriod(coin) < 0) {
          filteredCoin = coin
      } else if (showListings === 'All') {
          filteredCoin = coin
      }
      return filteredCoin
  })

  // 3. Filter coins for Order
  let filteredCoins_Order
  let coinsOrderedForPriceChange = false

    if(priceOrder !== null) {
        orderCoinsForPrice(priceOrder)
    } else if (volumeOrder !== null) {
        orderCoinsForVolume(volumeOrder)
    } else if (mktCapOrder !== null) {
        orderCoinsForMktCap(mktCapOrder)
    } else if (priceChangeOrder !== null) {
        orderCoinsForPriceChange(priceChangeOrder)
    } 

  function orderCoinsForPrice(priceOrder) {
    if(priceOrder === 'desc') {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinB.current_price - coinA.current_price
        })
    } else {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinA.current_price - coinB.current_price
        })
    }
  }

  function orderCoinsForVolume(volumeOrder) {
    if(volumeOrder === 'desc') {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinB.total_volume - coinA.total_volume
        })
    } else {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinA.total_volume - coinB.total_volume
        })
    }
  }

  function orderCoinsForMktCap(mktCapOrder) {
    if(mktCapOrder === 'desc') {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinB.market_cap - coinA.market_cap
        })
    } else {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
          return coinA.market_cap - coinB.market_cap
        })
    }
  }

  function orderCoinsForPriceChange(priceChangeOrder) {
    coinsOrderedForPriceChange = true
    if(priceChangeOrder === 'desc') {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
            let sortCalculation
            if (timePeriod === '7d') {
                sortCalculation = coinB.price_change_percentage_7d_in_currency - coinA.price_change_percentage_7d_in_currency
            } else if (timePeriod === '30d') {
                sortCalculation = coinB.price_change_percentage_30d_in_currency - coinA.price_change_percentage_30d_in_currency
            } else if (timePeriod === '1y') {
                sortCalculation = coinB.price_change_percentage_1y_in_currency - coinA.price_change_percentage_1y_in_currency
            } else if (timePeriod === '24h') {
                sortCalculation = coinB.price_change_percentage_24h_in_currency - coinA.price_change_percentage_24h_in_currency
            } else if (timePeriod === '1h') {
                sortCalculation = coinB.price_change_percentage_1h_in_currency - coinA.price_change_percentage_1h_in_currency
            }
            return sortCalculation
        })
    } else {
        filteredCoins_Order = filteredCoins_showListings_inTimePeriod.sort((coinA, coinB) => {
            let sortCalculation
            if (timePeriod === '7d') {
                sortCalculation = coinA.price_change_percentage_7d_in_currency - coinB.price_change_percentage_7d_in_currency
            } else if (timePeriod === '30d') {
                sortCalculation = coinA.price_change_percentage_30d_in_currency - coinB.price_change_percentage_30d_in_currency
            } else if (timePeriod === '1y') {
                sortCalculation = coinA.price_change_percentage_1y_in_currency - coinB.price_change_percentage_1y_in_currency
            } else if (timePeriod === '24h') {
                sortCalculation = coinA.price_change_percentage_24h_in_currency - coinB.price_change_percentage_24h_in_currency
            } else if (timePeriod === '1h') {
                sortCalculation = coinA.price_change_percentage_1h_in_currency - coinB.price_change_percentage_1h_in_currency
            }
            return sortCalculation
        })
    }}

  // 4. Put coins with no pricePercent data last
  if(coinsOrderedForPriceChange === true) { 
    const filteredCoins_withPercentData = filteredCoins_Order.filter(coin => getPriceChangePercent_inTimePeriod(coin) !== null)
    const filteredCoins_withoutPercentData = filteredCoins_Order.filter(coin => getPriceChangePercent_inTimePeriod(coin) === null)
    filteredCoins_Order = filteredCoins_withPercentData.concat(filteredCoins_withoutPercentData)
  }

  function getPriceChangePercent_inTimePeriod(coin) {
    if(timePeriod === '7d') {
        return coin.price_change_percentage_7d_in_currency
    } else if(timePeriod === '30d') {
        return coin.price_change_percentage_30d_in_currency
    } else if(timePeriod === '1y') {
        return coin.price_change_percentage_1y_in_currency
    } else if(timePeriod === '1h') {
        return coin.price_change_percentage_1h_in_currency 
    } else if(timePeriod === '24h') {
        return coin.price_change_percentage_24h_in_currency 
    }
  }

  function addScrollIdentifier(e) {
      const allRightContainer = document.querySelectorAll('.row-right-container')
      allRightContainer.forEach(rightContainer => rightContainer.classList.remove('scroll'))
      const headerRightContainer = document.querySelector('.listing-header-right')
      headerRightContainer.classList.remove('scroll')

      if(e.target.closest('.row-right-container')) {
          e.target.closest('.row-right-container').classList.add('scroll') 
      } else {
          e.target.closest('.listing-header-right').classList.add('scroll') 
      }
  }

  function scrollAllRows(e) {
    if(!e.target.classList.contains('scroll')) return
      scrollOffset.current = e.target.scrollLeft
      const headerRightContainer = document.querySelector('.listing-header-right')
      if(e.target !== headerRightContainer) {
        headerRightContainer.scrollLeft = scrollOffset.current
      }
      const noScrollingContainers = document.querySelectorAll('.row-right-container:not(.scroll)')
      noScrollingContainers.forEach(container => container.scrollLeft = scrollOffset.current)
  }

  clearAnimation()
  function clearAnimation() {
    for (let i = 0; i < allTimeouts.current.length; i++) {
        clearTimeout(allTimeouts.current[i])
    }
    const allCoinRows = document.querySelectorAll('.coin-row')
    allCoinRows.forEach(coinRow => {
          coinRow.style.visibility = 'visible'
          coinRow.classList.remove('fly-in-row')
    })
  }

  return (
    <div className='crypto-app'>
      <SearchBarContext.Provider 
          value={{ setSearch, timePeriod, setTimePeriod, getApiData, currency, setCurrency, 
                   showListings, setShowListings, lightMode, clearAnimation, allTimeouts }}>
          <SearchBar />
      </SearchBarContext.Provider>
      <ListingHeaderContext.Provider 
          value={{ timePeriod, priceOrder, setPriceOrder, volumeOrder, setVolumeOrder, 
                   priceChangeOrder, setPriceChangeOrder, mktCapOrder, setMktCapOrder, 
                   scrollAllRows, addScrollIdentifier }}>
          <CoinListingHeader />
      </ListingHeaderContext.Provider>
      <div className='coin-listings-container'>
          {filteredCoins_Order.map(coin => {
            return (
              <CoinListing
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketCap={coin.market_cap}
                marketCapRank={coin.market_cap_rank}
                volume={coin.total_volume}
                price={coin.current_price}
                currencyType={currency}
                priceChange={getPriceChangePercent_inTimePeriod(coin)}
                scrollAllRows={scrollAllRows}
                addScrollIdentifier={addScrollIdentifier}
                scrollOffset={scrollOffset}
              />
            )
          })}
      </div>
      <Footer />
      <SettingsBar setLightMode={setLightMode} />
      <BackToTop />
    </div>
  )
}