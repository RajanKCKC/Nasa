import './style.css' 
import { supabase } from './supabase.js'
import { renderHome } from './pages/home.js'
import { renderAuth } from './pages/auth.js'
import { renderDashboard } from './pages/dashboard.js'

const appDiv = document.querySelector('#app')


export const navigate = (path) => {
  window.history.pushState({}, '', path)
  handleRoute()
}

window.addEventListener('popstate', handleRoute)

async function handleRoute() {
  let session = null
  try {
    const { data: { session: authSession } } = await supabase.auth.getSession()
    session = authSession
  } catch (error) {
    console.error('Auth error:', error)
  }
  
  const path = window.location.pathname

  if (path === '/dash') {
    if (session) {
      renderDashboard(appDiv, navigate, session.user)
    } else {
      navigate('/') 
    }
  } else if (path === '/auth') {
    if (session) {
      navigate('/dash')
    } else {
      renderAuth(appDiv, navigate)
    }
  } else {
    renderHome(appDiv, navigate)
  }
}

handleRoute()

supabase.auth.onAuthStateChange((_event, session) => {
  handleRoute()
})