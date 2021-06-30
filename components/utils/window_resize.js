const resizeWindow = () => {
    if ( document.readyState !== 'loading' ) {
      let heightAdjust = (document.documentElement.clientHeight - 52).toString() + 'px'
      let mainContainer = document.getElementsByTagName('main')[0]
      mainContainer.style.minHeight = heightAdjust
    }

    let timeout = null
    window.onresize = () => {
        clearTimeout(timeout)
        timeout = setTimeout( () => {
          let heightAdjust = (document.documentElement.clientHeight - 52).toString() + 'px'
          let mainContainer = document.getElementsByTagName('main')[0]
          mainContainer.style.minHeight = heightAdjust
        }, 250)
    }
}

export { resizeWindow }

// source: https://bencentra.com/code/2015/02/27/optimizing-window-resize.html