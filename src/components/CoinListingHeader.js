import React, { useContext, useEffect, useRef } from 'react'
import { ListingHeaderContext } from '../App'

export default function CoinListingHeader() {

    const {timePeriod, priceOrder, setPriceOrder, volumeOrder, setVolumeOrder, priceChangeOrder, setPriceChangeOrder, mktCapOrder, setMktCapOrder, scrollAllRows, addScrollIdentifier} = useContext(ListingHeaderContext)

    const orderIcons = document.querySelectorAll('.order-icon')

    // reset on refresh
    const listingHeaderRight = useRef()
    useEffect(() => {
        listingHeaderRight.current.scrollLeft = 0
    }, [])

    function changeOrder(i, orderState, setOrderState) {
        resetAllIconRotation()
        resetOrder()
        orderIcons[i].classList.add('active')
        orderIcons[i].style.background = 'linear-gradient(225deg, var(--gradient-clr1), var(--gradient-clr2))'

        if(orderState === null || orderState === 'asc') {
            orderIcons[i].style.transform = 'var(--arrow-down)'
            setOrderState('desc')
        } else {
            orderIcons[i].style.transform = 'var(--arrow-up)'
            setOrderState('asc')
        }
    }

    /* HELPER FUNC 1 */
    function resetAllIconRotation() {
        orderIcons.forEach(orderIcon => {
            orderIcon.classList.remove('active')
            orderIcon.style.transform = 'var(--arrow-default)'
            orderIcon.style.background = 'var(--secondary-clr)'
        })
    }    

    /* HELPER FUNC 2 */
    function resetOrder() {
        setPriceOrder(null)
        setVolumeOrder(null)
        setPriceChangeOrder(null)
        setMktCapOrder(null)
    }

    return (
        <div className='coin-listing-header'>
            <span className='listing-header-left'>
                <span className='header-element rank'>
                    <span className='header-text'>#</span>
                </span>
                <span className='header-element coin'>
                    <span className='header-text'>Coin</span>
                </span>
            </span>
            <span className='listing-header-right' ref={listingHeaderRight} onScroll={e => scrollAllRows(e)} onMouseEnter={e => addScrollIdentifier(e)} onTouchStart={e => addScrollIdentifier(e)}>
                <span className='listing-header-right-inner'>
                    <span className='header-element price'>
                        <span className='header-element-clickable price' onClick={() => changeOrder(0, priceOrder, setPriceOrder)}>
                            <svg className='order-icon price' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                            <span className='header-text'>Price</span>
                        </span>
                    </span>
                    <span className='header-element volume'>
                        <span className='header-element-clickable volume' onClick={() => changeOrder(1, volumeOrder, setVolumeOrder)}>
                            <svg className='order-icon volume' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                            <span className='header-text'>24h Volume</span> 
                        </span>
                    </span>
                    <span className='header-element price-change'>
                        <span className='header-element-clickable price-change' onClick={() => changeOrder(2, priceChangeOrder, setPriceChangeOrder)}>
                            <svg className='order-icon price-change' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                            <span className='header-text'>{timePeriod}</span>
                        </span>
                    </span>
                    <span className='header-element mkt-cap'>
                        <span className='header-element-clickable mkt-cap' onClick={() => changeOrder(3, mktCapOrder, setMktCapOrder)}>
                            <svg className='order-icon mkt-cap active' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                            <span className='header-text'>Mkt Cap</span>
                        </span>
                    </span>
                </span>
            </span>
        </div>
    )
}