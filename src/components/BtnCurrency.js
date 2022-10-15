import React, { useContext, useRef } from 'react'
import { SearchBarContext } from '../App.js'

export default function BtnCurrency() {

    const {currency, setCurrency, getApiData} = useContext(SearchBarContext)
    const euroIcon = useRef()
    const usdIcon = useRef()

    function changeCurrencyIcon() {
        if (currency === '€') {
            usdIcon.current.style.display = 'block'
            euroIcon.current.style.display = 'none'
            setCurrency('$')
            getApiData('$')

        } else if (currency === '$') {
            usdIcon.current.style.display = 'none'
            euroIcon.current.style.display = 'block'
            setCurrency('€')
            getApiData('€')
        }
    }

    return (
        <div className='btn-control currency' onClick={e => changeCurrencyIcon()} title="switch currency">
            <svg className='currency-icon euro' ref={euroIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><g fill="none" style={{ mixBlendMode: "normal" }}><path d="M0 172V0h172v172z"></path><path d="M107.615 136.962c-9.89 0-17.523-3.01-22.92-9.03-5.088-5.683-7.797-13.746-8.298-24.023h38.27V91.368H76.146V78.833h38.52V66.292H76.598c.703-9.546 3.369-17.114 8.228-22.475 5.303-5.855 12.864-8.78 22.69-8.78 6.586 0 13.15 1.011 19.679 3.025L129 24.16c-8.091-1.77-15.308-2.659-21.658-2.659-14.555 0-26.108 4.128-34.643 12.377-8.027 7.754-12.399 18.647-13.41 32.415H43v12.541h16.125v12.542H43v12.542h16.16c.667 14.498 4.989 25.878 13.18 33.955 8.536 8.421 20.232 12.628 35.088 12.628 7.189 0 14.377-.867 21.572-2.602l-1.799-13.867c-6.106 1.956-12.642 2.931-19.586 2.931z"></path></g></svg>
            <svg className='currency-icon usd' ref={usdIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><g fill="none" strokeMiterlimit="10" fontFamily="none" fontSize="none" fontWeight="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0 172V0h172v172z"></path><path d="M113.62 89.447c-5.267-3.297-12.599-6.314-21.987-9.059-9.388-2.737-16.132-5.783-20.224-9.144-4.1-3.347-6.15-7.855-6.15-13.51 0-6.091 1.943-10.85 5.827-14.254 3.877-3.411 9.482-5.11 16.806-5.11 7.016 0 12.599 2.3 16.72 6.909 4.128 4.608 6.192 10.822 6.192 18.64l-.007.581h16.999l.007-.573c0-11.338-2.874-20.275-8.636-26.804-5.762-6.521-13.81-10.427-24.158-11.696l-.05-.007V7.167H80.624v18.282c-9.976 1.182-17.874 4.58-23.628 10.263-5.884 5.812-8.83 13.25-8.83 22.324 0 8.908 3.003 16.254 9.009 22.037 6.005 5.777 15.566 10.47 28.68 14.068 9.425 2.824 16.119 5.977 20.096 9.46 3.963 3.49 5.956 7.776 5.956 12.865 0 6.034-2.315 10.793-6.93 14.276-4.623 3.483-10.966 5.224-19.035 5.224-8.25 0-14.628-2.071-19.121-6.22-4.494-4.15-6.737-10.07-6.737-17.76H43c0 10.951 3.246 19.623 9.74 26.015 6.328 6.228 15.057 9.819 26.093 10.872v15.96h14.334v-15.838l.179-.007c11.266-1.054 20.03-4.422 26.28-10.127 6.242-5.697 9.374-13.222 9.374-22.567 0-5.863-1.254-10.98-3.741-15.359-2.494-4.364-6.378-8.198-11.639-11.488z"></path></g></svg>
        </div>
    )
}
