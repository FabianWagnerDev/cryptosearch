
 export function isOrientationLandscape() {
            if(window.screen.orientation.type === 'landscape-primary' || 
               window.screen.orientation.type === 'landscape-secondary' ||
               window.orientation === 90 ||
               window.orientation === -90) {
                    return true
            } else {
                    return false
            }
        }

 export function isOrientationPortrait() {
            if(window.screen.orientation.type === 'portrait-primary' || 
               window.screen.orientation.type === 'portrait-secondary' ||
               window.orientation === 0 ||
               window.orientation === 180) {
                    return true
            } else {
                    return false
            }
        }

 export function isTouchDevice() {
            return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0))
        }