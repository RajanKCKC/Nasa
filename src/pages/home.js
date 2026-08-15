import nasaLogo from '../assets/nasa.svg'

export const renderHome = (appDiv, navigate) => {
  appDiv.innerHTML = `
    <div class="app-container">
      <nav class="navbar">
        <div class="logo">
          <img src="${nasaLogo}" alt="NASA Logo" class="nasa-logo" />
          <span class="brand-text">NASA Facts</span>
        </div>
        <button id="nav-login-btn" class="login-btn">Log In</button>
      </nav>

      <main class="hero">
        <div class="glass-card">
          <p class="subtitle">Welcome Explorer</p>
          <h2>Discover the Universe</h2>
          <p class="hero-description">
            Unlock daily space facts, explore the cosmos, and expand your mind. Log in to start your journey.
          </p>
          <button id="hero-login-btn" class="primary-btn">Log In to Explore</button>
        </div>
      </main>
    </div>
  `

  document.querySelector('#nav-login-btn').addEventListener('click', () => navigate('/auth'))
  document.querySelector('#hero-login-btn').addEventListener('click', () => navigate('/auth'))
}