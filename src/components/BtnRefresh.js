import React, { useState, useContext, useRef } from 'react'
import { SearchBarContext } from '../App.js'

export default function BtnRefresh() {
    
    const {getApiData, clearAnimation, allTimeouts} = useContext(SearchBarContext)
    const [iconRotation, setIconRotation] = useState(180)
    const refreshIcon = useRef()

    function rotateIcon() {
        refreshIcon.current.style.transform = `rotate(${iconRotation}deg)`
        setIconRotation(prevRotation => prevRotation + 180)
    }

    function hideShowCoinRows() {
        clearAnimation()
        const allCoinRows = document.querySelectorAll('.coin-row')
        
        new Promise(resolve => {
            const triggerFlyIn = setTimeout(() => resolve(), 340)
            allTimeouts.current.push(triggerFlyIn)

            allCoinRows.forEach(coinRow => {
                coinRow.style.visibility = 'hidden'
                coinRow.classList.remove('fly-in-row')
            })
        }).then(() => {
            allCoinRows.forEach((coinRow,index) => {
                const flyInRow = setTimeout(() => {
                    coinRow.style.visibility = 'visible'
                    coinRow.classList.add('fly-in-row')
                }, index * 30)
                allTimeouts.current.push(flyInRow)
            })
        })       
    }

    return (
        <div className='btn-control refresh' onClick={() => {rotateIcon(); hideShowCoinRows(); getApiData();}} title="refresh coin stats">
            <svg className='refresh-icon' ref={refreshIcon} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="m14 2.8008c-2.75 0-5.293 1.0156-7.2266 2.6445-0.26172 0.21484-0.38281 0.55078-0.32422 0.88281 0.054687 0.32812 0.28906 0.60547 0.60156 0.71875 0.31641 0.11328 0.67188 0.046875 0.92578-0.17188 1.6094-1.3594 3.7344-2.207 6.0234-2.207 4.8789 0 8.8281 3.6523 9.2891 8.3984h-2.7539l3.7305 5.6016 3.7344-5.6016h-2.8477c-0.47266-5.7539-5.2734-10.266-11.152-10.266zm-9.9844 5.5977-3.7344 5.6016h2.5195c0 6.1914 5.0078 11.199 11.199 11.199 2.75 0 5.293-1.0156 7.2266-2.6445 0.26172-0.21484 0.38281-0.55078 0.32422-0.88281-0.054687-0.32812-0.28906-0.60547-0.60156-0.71875-0.31641-0.11328-0.67188-0.046875-0.92578 0.17188-1.6094 1.3594-3.7344 2.207-6.0234 2.207-5.1953 0-9.332-4.1367-9.332-9.332h3.0781z"/></svg>
        </div>
    )
}
