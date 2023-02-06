import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`

setupCounter(document.querySelector('#counter'))
