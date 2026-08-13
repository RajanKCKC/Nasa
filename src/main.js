import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="app-container">
  <nav class="navbar">
    <div class="logo">
      <span class="logo-text">Nasa Fact</span>
    </div>
    <button id="login-btn" class="login-btn">Log In</button>
  </nav>
</div>
`

setupCounter(document.querySelector('#counter'))
