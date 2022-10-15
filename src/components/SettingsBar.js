import React, { useState } from 'react'
import SettingsBarTop from './SettingsBarTop'
import SettingsBarMiddle from './SettingsBarMiddle'
import SettingsBarBottom from './SettingsBarBottom'
import SettingsBtnMobile from './SettingsBtnMobile'
import { isOrientationLandscape, isTouchDevice } from './Utils'

export default function SettingsBar({setLightMode}) {

    const [darkGradient, setDarkGradient] = useState(1)
    const [lightGradient, setLightGradient] = useState(1)
    const [menuOpen, setMenuOpen] = useState(false)
    const root = document.querySelector(':root')

    function chooseDarkmodeGradient(darkGradient) {
        const allDarkGradients = document.querySelectorAll('.theme-gradient.dark')
        allDarkGradients.forEach(gradient => gradient.classList.remove('active'))
        const lightModeIconActive = document.querySelector('.lightmode-toggle.active svg')

        if (darkGradient === 1) {
            allDarkGradients[0].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--turquoise-clr)')
            root.style.setProperty('--gradient-clr2', 'var(--pink-clr)')
            root.style.setProperty('--negative-percent-clr', 'var(--pink-clr)')
            root.style.setProperty('--positive-percent-clr', 'var(--turquoise-clr)')
            lightModeIconActive.style.fill = 'var(--turquoise-clr)'
            setDarkGradient(1)

        } else if (darkGradient === 2) {
            allDarkGradients[1].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--blue-clr-1)')
            root.style.setProperty('--gradient-clr2', 'var(--red-clr-3)')
            root.style.setProperty('--negative-percent-clr', 'var(--red-clr-3)')
            root.style.setProperty('--positive-percent-clr', 'var(--blue-clr-1)')
            lightModeIconActive.style.fill = 'var(--blue-clr-1)'
            setDarkGradient(2)

        } else if (darkGradient === 3) {
            allDarkGradients[2].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--purple-clr)')
            root.style.setProperty('--gradient-clr2', 'var(--green-clr-1)')
            root.style.setProperty('--negative-percent-clr', 'var(--purple-clr)')
            root.style.setProperty('--positive-percent-clr', 'var(--green-clr-1)')
            lightModeIconActive.style.fill = 'var(--green-clr-1)'
            setDarkGradient(3)

        } else if (darkGradient === 4) {
            allDarkGradients[3].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--yellow-clr-1)')
            root.style.setProperty('--gradient-clr2', 'var(--blue-clr-2)')
            root.style.setProperty('--negative-percent-clr', 'var(--yellow-clr-1)')
            root.style.setProperty('--positive-percent-clr', 'var(--blue-clr-2)')
            lightModeIconActive.style.fill = 'var(--yellow-clr-1)'
            setDarkGradient(4)

        } else if (darkGradient === 5) {
            allDarkGradients[4].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--red-clr-3)')
            root.style.setProperty('--gradient-clr2', 'var(--yellow-clr-2)')
            root.style.setProperty('--negative-percent-clr', 'var(--red-clr-3)')
            root.style.setProperty('--positive-percent-clr', 'var(--green-clr-1)')
            lightModeIconActive.style.fill = 'var(--yellow-clr-2)'
            setDarkGradient(5)
        }
    }

    function chooseLightmodeGradient(lightGradient) {
        const allLightGradients = document.querySelectorAll('.theme-gradient.light')
        allLightGradients.forEach(gradient => gradient.classList.remove('active'))
        const lightModeIconActive = document.querySelector('.lightmode-toggle.active svg')
        lightModeIconActive.style.fill = '#F1F1F1'

        if (lightGradient === 1) {
            allLightGradients[0].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'hsl(240, 4%, 23%)')
            root.style.setProperty('--gradient-clr2', 'hsl(240, 4%, 23%)')
            root.style.setProperty('--negative-percent-clr', 'var(--red-clr-2)')
            root.style.setProperty('--positive-percent-clr', 'var(--green-clr-2)')
            setLightGradient(1)

        } else if (lightGradient === 2) {
            allLightGradients[1].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--blue-clr-3)')
            root.style.setProperty('--gradient-clr2', 'var(--red-clr-1)')
            root.style.setProperty('--negative-percent-clr', 'var(--red-clr-1)')
            root.style.setProperty('--positive-percent-clr', 'var(--blue-clr-3)')
            setLightGradient(2)

        } else if (lightGradient === 3) {
            allLightGradients[2].classList.add('active')
            root.style.setProperty('--gradient-clr1', 'var(--red-clr-2)')
            root.style.setProperty('--gradient-clr2', 'var(--yellow-clr-3)')
            root.style.setProperty('--negative-percent-clr', 'var(--red-clr-2)')
            root.style.setProperty('--positive-percent-clr', 'var(--green-clr-2)')
            setLightGradient(3)
        }
    }

    const settingsbarTop = document.querySelector('.settingsbar-top-border')
    const settingsbarBottom = document.querySelector('.settingsbar-bottom-border')
    const settingsIconDesktop = document.querySelector('.settings-icon.desktop')
    const settingsIconMobile = document.querySelector('.settings-icon.mobile')

    function toggleSettings() {
        if(menuOpen === false) {
            settingsbarTop.style.left = '0'
            settingsbarBottom.style.left = '0'
            settingsIconDesktop.classList.add('rotate')
            settingsIconMobile.classList.add('rotate')
            setMenuOpen(true)
        } else {
            settingsbarTop.style.left = '-115%'
            settingsbarBottom.style.left = '-115%'
            settingsIconDesktop.classList.remove('rotate')
            settingsIconMobile.classList.remove('rotate')
            setMenuOpen(false)
        }
    }

    function hideSettingsBar() {
        if(settingsbarTop === undefined) return
        if(menuOpen === true && isOrientationLandscape() && isTouchDevice()) {
            settingsbarTop.style.left = '-115%'
            settingsbarBottom.style.left = '-115%'
            setMenuOpen(false)
        }
    }

    if(window.screen.orientation !== undefined) { 
        window.screen.orientation.addEventListener('change', hideSettingsBar)
    } else {
        window.addEventListener('orientationchange', hideSettingsBar)
    }

    return (
        <>
            <div className='settingsbar-container'>
                <SettingsBarTop 
                    chooseDarkmodeGradient={chooseDarkmodeGradient}
                    chooseLightmodeGradient={chooseLightmodeGradient}
                />
                <SettingsBarMiddle 
                    toggleSettings={toggleSettings}
                />
                <SettingsBarBottom 
                    setLightMode={setLightMode}
                    chooseDarkmodeGradient={chooseDarkmodeGradient}
                    chooseLightmodeGradient={chooseLightmodeGradient}
                    darkGradient={darkGradient}
                    lightGradient={lightGradient}
                    settingsbarTop={settingsbarTop} 
                    settingsbarBottom={settingsbarBottom}
                    root={root}
                />
            </div>
            <SettingsBtnMobile toggleSettings={toggleSettings} />
        </>
    )
}
