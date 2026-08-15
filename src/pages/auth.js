import { supabase } from '../supabase.js'
import nasaLogo from '../assets/nasa.svg'

export const renderAuth = (appDiv, navigate) => {
  appDiv.innerHTML = `
    <div class="app-container">
      <nav class="navbar">
        <div class="logo" style="cursor: pointer;" id="home-link">
          <img src="${nasaLogo}" alt="NASA Logo" class="nasa-logo" />
          <span class="brand-text">NASA Facts</span>
        </div>
      </nav>

      <main class="hero">
        <div class="glass-card auth-card">
          <h2>Access Port</h2>
          <p class="hero-description">Enter your credentials to continue.</p>
          
          <form id="auth-form" class="auth-form">
            <input type="email" id="email" class="input-field" placeholder="Email Address" required />
            <input type="password" id="password" class="input-field" placeholder="Password" required />
            <p id="auth-error" class="error-msg"></p>
            
            <div class="btn-group">
              <button type="submit" id="signin-btn" class="primary-btn">Sign In</button>
              <button type="button" id="signup-btn" class="secondary-btn">Create Account</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  `

  document.querySelector('#home-link').addEventListener('click', () => navigate('/'))

  const emailInput = document.querySelector('#email')
  const passwordInput = document.querySelector('#password')
  const errorMsg = document.querySelector('#auth-error')

  // Sign In Logic
  document.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    errorMsg.textContent = ''
    
    const { error } = await supabase.auth.signInWithPassword({
      email: emailInput.value,
      password: passwordInput.value,
    })

    if (error) {
      errorMsg.textContent = error.message
    } else {
      navigate('/dash')
    }
  })

  // Sign Up Logic
  document.querySelector('#signup-btn').addEventListener('click', async () => {
    errorMsg.textContent = ''
    
    if (!emailInput.value || !passwordInput.value) {
      errorMsg.textContent = "Please enter an email and password to sign up."
      return
    }

    const { error } = await supabase.auth.signUp({
      email: emailInput.value,
      password: passwordInput.value,
    })

    if (error) {
      errorMsg.textContent = error.message
    } else {
      errorMsg.textContent = "Check your email for the confirmation link!"
      errorMsg.style.color = "#4ea8de"
    }
  })
}