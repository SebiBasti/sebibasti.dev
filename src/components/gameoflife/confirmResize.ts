import PrimeReact from 'primereact/api'
import { confirmDialog } from 'primereact/confirmdialog'

export const confirmResize = (toggleFullscreen: () => void) => {
  // overwrite the default container to actual position
  PrimeReact.appendTo = 'self'
  confirmDialog({
    accept: () => toggleFullscreen(),
    dismissableMask: true,
    draggable: false,
    message: 'Resizing will reset the grid, are you sure?',
    resizable: false
  })
}
