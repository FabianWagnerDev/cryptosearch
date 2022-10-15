import React from 'react'

export default function SettingsBarBottom({setLightMode, chooseDarkmodeGradient, chooseLightmodeGradient, darkGradient, lightGradient, settingsbarTop, settingsbarBottom, root}) {
    
    const gradientContainerDark = document.querySelector('.theme-gradient-container.darkmode')
    const gradientContainerLight = document.querySelector('.theme-gradient-container.lightmode')
    const lightModeToggles = document.querySelectorAll('.lightmode-toggle')

    function switchLightMode(lightMode) {
        lightModeToggles.forEach(toggle => toggle.classList.remove('active'))
        const lightModeIcons = document.querySelectorAll('.lightmode-toggle svg')
        lightModeIcons.forEach(icon => icon.style.fill = 'var(--white-clr)')
        const searchContainerBorder = document.querySelector('.search-container-border')
        const searchContainer = document.querySelector('.search-container')

        if (lightMode === 'light') {
            setLightMode('light')
            root.style.setProperty('--primary-clr', '#F1F1F1')
            root.style.setProperty('--secondary-clr', 'hsl(240, 4%, 70%)')
            root.style.setProperty('--white-clr', 'hsl(240, 4%, 11%)')
            root.style.setProperty('--placeholder-clr', 'hsl(240, 4%, 41%)')
            root.style.setProperty('--active-order-icon-fill', '#F1F1F1')

            gradientContainerDark.style.display = 'none'
            gradientContainerLight.style.display = 'flex'

            searchContainerBorder.style.padding = '2px'
            searchContainer.style.borderRadius = '6px'
            settingsbarTop.style.padding = '0 2px 2px 0'
            settingsbarBottom.style.padding = '2px 2px 0 0'

            const lightModeToggle = document.querySelector('.lightmode-toggle-light')
            lightModeToggle.classList.add('active')
            chooseLightmodeGradient(lightGradient)

        } else {
            setLightMode('dark')
            root.style.setProperty('--primary-clr', 'hsl(240, 4%, 11%)')
            root.style.setProperty('--secondary-clr', 'hsl(240, 4%, 23%)')
            root.style.setProperty('--white-clr', 'hsl(0, 0%, 96.2%)')
            root.style.setProperty('--placeholder-clr', '#898989')
            root.style.setProperty('--active-order-icon-fill', 'hsl(240, 4%, 23%)')

            gradientContainerLight.style.display = 'none'
            gradientContainerDark.style.display = 'flex'

            searchContainerBorder.style.padding = '1px'
            searchContainer.style.borderRadius = 'var(--border-radius-1)'
            settingsbarTop.style.padding = '0 1px 1px 0'
            settingsbarBottom.style.padding = '1px 1px 0 0'

            const darkModeToggle = document.querySelector('.lightmode-toggle-dark')
            darkModeToggle.classList.add('active')
            chooseDarkmodeGradient(darkGradient)
        }
    }

    return (
        <div className='settingsbar-bottom-border'>
          <div className='settingsbar-bottom'>
            <div className='lightmode-toggle-container'>
              <div className='lightmode-toggle lightmode-toggle-light' onClick={() => switchLightMode('light')} title="choose light theme">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>
              </div>
              <div className='lightmode-toggle lightmode-toggle-dark active' onClick={() => switchLightMode('dark')} title="choose dark theme">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15.5,22c1.05,0,2.05-0.16,3-0.46c-4.06-1.27-7-5.06-7-9.54s2.94-8.27,7-9.54C17.55,2.16,16.55,2,15.5,2 c-5.52,0-10,4.48-10,10S9.98,22,15.5,22L15.5,22z"/></g></g></svg>
              </div>
            </div>
          </div>
        </div>
    )
}
