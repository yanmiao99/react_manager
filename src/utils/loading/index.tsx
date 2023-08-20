import ReactDOM from 'react-dom/client'
import Loading from './loading'
import './loading.less'

let count = 0
export const showLoading = () => {
  if (count === 0) {
    const oDiv = document.createElement('div')
    oDiv.setAttribute('id', 'loading')
    document.body.appendChild(oDiv)

    const oLoading = document.getElementById('loading') as HTMLDivElement
    ReactDOM.createRoot(oLoading).render(<Loading />)
  }
  count++
}

export const hideLoading = () => {
  if (count < 0) return
  count--
  if (count === 0) {
    const oLoading = document.getElementById('loading') as HTMLDivElement
    document.body.removeChild(oLoading)
  }
}
