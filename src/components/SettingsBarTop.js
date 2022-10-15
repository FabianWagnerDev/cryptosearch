import React from 'react'

export default function SettingsBarTop({chooseDarkmodeGradient, chooseLightmodeGradient}) {

    return (
        <div className='settingsbar-top-border'>
          <div className='settingsbar-top'>
            <div className='theme-gradient-container darkmode'>
                <div className='theme-gradient dark one active' onClick={() => chooseDarkmodeGradient(1)} title="choose theme gradient"></div>
                <div className='theme-gradient dark two' onClick={() => chooseDarkmodeGradient(2)} title="choose theme gradient"></div>
                <div className='theme-gradient dark three' onClick={() => chooseDarkmodeGradient(3)} title="choose theme gradient"></div>
                <div className='theme-gradient dark four' onClick={() => chooseDarkmodeGradient(4)} title="choose  theme gradient"></div>
                <div className='theme-gradient dark five'onClick={() => chooseDarkmodeGradient(5)} title="choose  theme gradient"></div>
            </div>
            <div className='theme-gradient-container lightmode'>
                <div className='theme-gradient light one active' onClick={() => chooseLightmodeGradient(1)} title="choose theme gradient"></div>
                <div className='theme-gradient light two' onClick={() => chooseLightmodeGradient(2)} title="choose theme gradient"></div>
                <div className='theme-gradient light three' onClick={() => chooseLightmodeGradient(3)} title="choose theme gradient"></div>
            </div>
          </div>
        </div>
    )
}
