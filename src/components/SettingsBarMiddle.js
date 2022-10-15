import React, { useRef } from 'react'
import { isOrientationLandscape, isOrientationPortrait, isTouchDevice } from './Utils'

export default function SettingsBarMiddle({toggleSettings}) {

    const settingsBtnDesktop = useRef()

    function hideSettingsBtn() {
      if (settingsBtnDesktop.current === undefined) return
      const settingsBtnMobile = document.querySelector('.settings-btn.mobile')

      if(isTouchDevice() && isOrientationLandscape()) {
          settingsBtnDesktop.current.classList.add('hide')
          settingsBtnMobile.classList.add('hide')
      } else if(isTouchDevice() && isOrientationPortrait()) {
          settingsBtnDesktop.current.classList.remove('hide')
          settingsBtnMobile.classList.remove('hide')
      }
    }

    hideSettingsBtn()

    if(window.screen.orientation !== undefined) {
        window.screen.orientation.addEventListener('change', hideSettingsBtn)
    } else {
        window.addEventListener('orientationchange', hideSettingsBtn)
    }

    return (
        <div className='settingsbar-middle'>
          <div className='settings-btn desktop' ref={settingsBtnDesktop} onClick={toggleSettings}>
            <svg className='settings-icon desktop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
          </div>
        </div>
    )
}
