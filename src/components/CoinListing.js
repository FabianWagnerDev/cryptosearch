import React, { useEffect, useRef } from 'react'

export default function CoinListing({name,image,symbol,price,currencyType,volume,priceChange,marketCap,marketCapRank,scrollAllRows,addScrollIdentifier,scrollOffset}) {

  function createCoinPercentEl() {
    if(priceChange == null) {
      return (
        <span className='coin-percent no-data'>-</span>
      )
    } else if(priceChange >= 0) {
        return (
          <span className='coin-percent positive'>{priceChange.toFixed(2)}%</span>
        )
    } else if(priceChange < 0) {
        return (
          <span className='coin-percent negative'>{priceChange.toFixed(2)}%</span>
        )
    }
  }

  const rowRightContainer = useRef()
  useEffect(() => {
    rowRightContainer.current.scrollLeft = scrollOffset.current
  })

  return (
      <div className='coin-row'>
          <div className='row-left-container'>
              <div className='coin-rank-container'>
                  <span className='coin-rank'>{marketCapRank}</span>
              </div>
              <span className='coin-name-container'>
                  <img src={image} className="coin-img" alt="coin" />
                  <div className='coin-name-container-inner'>
                      <h2 className='coin-name'>{name}</h2>
                      <span className='coin-name-short'>{symbol}</span>
                  </div>
              </span>
          </div>
          <div className='row-right-container' ref={rowRightContainer} onScroll={e => scrollAllRows(e)} onMouseEnter={e => addScrollIdentifier(e)} onTouchStart={e => addScrollIdentifier(e)}> 
              <div className='row-right-container-inner'>
                  <span className='coin-price'>{price + currencyType}</span>
                  <span className='coin-volume'>{volume.toLocaleString() + currencyType}</span>
                  {createCoinPercentEl()}
                  <span className='coin-marketcap'>{marketCap.toLocaleString() + currencyType}</span>
              </div>
          </div>
      </div>
  )
}
