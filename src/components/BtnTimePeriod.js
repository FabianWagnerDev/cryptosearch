import React, { useContext } from 'react'
import { SearchBarContext } from '../App.js'

export default function BtnTimePeriod() {

    const {timePeriod, setTimePeriod} = useContext(SearchBarContext)

    function changeTimePeriod() {
        if(timePeriod === '24h') {
            setTimePeriod('7d')
        } else if(timePeriod === '7d') {
            setTimePeriod('30d')
        } else if(timePeriod === '30d') {
            setTimePeriod('1y')
        } else if(timePeriod === '1y') {
            setTimePeriod('1h')
        } else if(timePeriod === '1h') {
            setTimePeriod('24h')
        }  
    }

    return (
        <div className='btn-control time-period' onClick={changeTimePeriod} title="change price percentage time-period">{timePeriod}</div>
    )
}
