import './style.css'

document.querySelector('#app').innerHTML = `
<div class="app-container">
  <nav class="navbar">
    <div class="logo">
      <span class="logo-text">Nasa Fact</span>
    </div>
    <button id="login-btn" class="login-btn">Log In</button>
  </nav>

  <main class="hero">
    <div>
      <p class="subtitle">Welcome Explorer</p>
      <h2 class="hero-h2">Discover the Universe</h2>

      <p class="description">
        Unlock daily space Facts, explore the cosmos, and expand your mind. Log in to start your journey through the stars.
      </p>

      <button id="hero-login-btn" class="primary-btn">Log In to Explore</button>
    <div>
  </main>
</div>
`

const handleLoginClick = () => {
  console.log('Login triggered! Time to show the auth screen.')
}

document.querySelector('#login-btn').addEventListener('click', handleLoginClick)
document.querySelector('#hero-login-btn').addEventListener('click', handleLoginClick)
