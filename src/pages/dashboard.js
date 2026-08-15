import { supabase } from '../supabase.js'
import nasaLogo from '../assets/nasa.svg'

export const renderDashboard = (appDiv, navigate, user) => {
  appDiv.innerHTML = `
    <div class="app-container">
      <nav class="navbar">
        <div class="logo">
          <img src="${nasaLogo}" alt="NASA Logo" class="nasa-logo" />
          <span class="brand-text">NASA Facts</span>
        </div>
        <div class="user-controls">
          <!-- Profile Icon with hover tooltip -->
          <div class="profile-icon" title="${user?.email || 'Explorer'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <button id="logout-btn" class="login-btn">Log Out</button>
        </div>
      </nav>

      <main class="hero">
        <div class="glass-card fact-card">
          <p class="subtitle">Daily Discovery</p>
          <h2>Space Fact of the Day</h2>
          <p class="fact-content">
            Did you know? One million Earths could fit inside the Sun, and a hollow Sun would fill up with about 960,000 spherical Earths.
          </p>
          <button id="next-fact-btn" class="primary-btn">Next Fact</button>
        </div>
      </main>
    </div>
  `
  
  document.querySelector('#logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut()
    navigate('/')
  })

  document.querySelector('#next-fact-btn').addEventListener('click', () => {
    alert('You will add your API fetch logic here later!')
  })
}