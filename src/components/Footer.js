import React, { useEffect, useState, useRef } from 'react'

export default function Footer() {

    const [quote, setQuote] = useState('')
    const getQuoteBtn = useRef()
    let countClicks = useRef(0)

    if("ontouchstart" in window && getQuoteBtn.current) {
        getQuoteBtn.current.style.background = 'linear-gradient(-225deg, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%)'
    }

    function getQuote() {
        fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
            .then(res => {
                return res.json()
            })
            .then(res => {
                setQuote(res.slip.advice)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getQuote()
    }, [])

    function triggerBtnQuote() {
        countClicks.current++
        getQuoteBtn.current.classList.add('blend-in')

        if(countClicks.current > 1) return
            getQuote()
            setTimeout(() => {
                getQuoteBtn.current.classList.remove('blend-in') 
                countClicks.current = 0
            }, 2000)
    }

    return (
        <footer className='main-footer'>
            <div className='quote-container'>
                <p className='quote-text'>"{quote}"</p>
                <div className='btn-get-quote-border' ref={getQuoteBtn} onClick={() => {triggerBtnQuote()}}>
                    <button className='btn-get-quote'>Get new quote</button>
                </div>
            </div>
        </footer>
    )
}
