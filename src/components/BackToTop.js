import React, { useRef } from 'react'

export default function BackToTop() {

    const backToTopContainer = useRef()

    if("ontouchstart" in window && backToTopContainer.current) {
        backToTopContainer.current.style.bottom = '10px'
    }

    window.addEventListener('scroll', showBackToTop)
    function showBackToTop() {
        if (window.scrollY > 400) {
            backToTopContainer.current.style.right = '10px'
            if('MozAppearance' in document.documentElement.style === false) return
                backToTopContainer.current.style.right = '6px'
        } else {
            backToTopContainer.current.style.right = '-200px'
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <div className='back-to-top-container' ref={backToTopContainer} onClick={scrollToTop}>
            <svg className='back-to-top-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
        </div>
    )
}
