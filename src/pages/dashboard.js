import { supabase } from '../supabase.js'
import nasaLogo from '../assets/nasa.svg'

const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API}&count=4`

const fallbackFact = [
  {
    title: 'The View Near a Black Hole',
    date: '2014-03-23',
    url: 'https://apod.nasa.gov/apod/image/1403/blackhole_hobart_960.jpg',
    explanation: 'In the center of a swirling whirlpool of hot gas is likely a beast that has never been seen directly: a black hole.  Studies of the bright light emitted by the swirling gas frequently indicate not only that a black hole is present, but also likely attributes.  The gas surrounding GRO J1655-40, for example, has been found to display an unusual flickering at a rate of 450 times a second.  Given a previous mass estimate for the central object of seven times the mass of our Sun, the rate of the fast flickering can be explained by a black hole that is rotating very rapidly.  What physical mechanisms actually cause the flickering -- and a slower quasi-periodic oscillation (QPO) -- in accretion disks surrounding black holes and neutron stars remains a topic of much research.    Find that image: A new APOD search engine'
  },
  {
    title: 'Jupiter’s Great Red Spot',
    date: '2024-01-10',
    url: 'https://images-assets.nasa.gov/image/PIA21782/PIA21782~orig.jpg',
    explanation: 'Jupiter’s Great Red Spot is an enormous storm larger than Earth, swirling in Jupiter’s atmosphere for centuries.'
  },
  {
    title: 'The Moon’s Far Side',
    date: '2024-01-12',
    url: 'https://images-assets.nasa.gov/image/iss067e006122/iss067e006122~orig.jpg',
    explanation: 'The far side of the Moon has a heavily cratered surface, unlike the near side that faces Earth and contains more dark plains.'
  },
  {
    title: 'The Orion Nebula',
    date: '2024-01-16',
    url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000889/GSFC_20171208_Archive_e000889~orig.jpg',
    explanation: 'The Orion Nebula is a stellar nursery where new stars are forming inside vast clouds of gas and dust.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  },
  {
    title: 'API ERROR',
    date: 'Now',
    url: 'https://thumbs.dreamstime.com/b/error-rubber-stamp-word-error-inside-illustration-109026446.jpg',
    explanation: 'If you are seeing this then the Nasa api is not working this is not this website problem.'
  }
]

const formatDate = (dateString) => {
  if (!dateString) return "Unknown Date"

  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const renderFactCards = (facts) => {
  const factGrid = document.querySelector('#fact-grid')

  if (!factGrid) return

  factGrid.innerHTML = facts
    .filter((fact) => fact && (fact.url || fact.hdurl))
    .map((fact) => `
      <article class="fact-item">
        <img src="${fact.hdurl || fact.url}" alt="${fact.title || 'NASA fact'}" class="fact-item-image" />
        <div class="fact-item-content">
          <div class="fact-item-meta">
            <span>${formatDate(fact.date)}</span>
            <span>${fact.media_type === 'video' ? 'Video' : 'Image'}</span>
          </div>
          <h3>${fact.title}</h3>
          <p>${fact.explanation ? fact.explanation.slice(0, 170) + (fact.explanation.length > 170 ? '...' : '') : 'No summary available yet.'}</p>
        </div>
      </article>
    `)
    .join('')
}

const setStatus = (message, isLoading = false) => {
  const statusEl = document.querySelector('#fact-status')
  if (!statusEl) return

  statusEl.textContent = message
  statusEl.classList.toggle('loading', isLoading)
}

const loadNasaFacts = async () => {
  setStatus('Loading NASA feed...', true)

  try {
    const response = await fetch(NASA_API_URL)

    if (!response.ok) {
      throw new Error('NASA API request failed')
  }

  const data = await response.json()
  const facts = Array.isArray(data) ? data : [data]

  if (!facts.length) {
    throw new Error('No NASA facts returned')
    }

    renderFactCards(facts)
    setStatus(`NASA feed • ${facts.length} facts loaded`)
  } catch (error) {
    console.error('NASA API error:', error)
    renderFactCards(fallbackFact)
    setStatus('Using fallback space facts')
  }
}

export const renderDashboard = (appDiv, navigate, user) => {
  appDiv.innerHTML = `
    <div class="app-container">
      <nav class="navbar">
        <div class="logo">
          <img src="${nasaLogo}" alt="NASA Logo" class="nasa-logo" />
          <span class="brand-text">NASA Facts</span>
        </div>
        <div class="user-controls">
          <div class="profile-icon" title="${user?.email || 'Explorer'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <button id="logout-btn" class="login-btn">Log Out</button>
        </div>
      </nav>

      <main class="dashboard-shell">
        <section class="dashboard-hero glass-card">
          <div>
            <p class="subtitle">Daily Discovery</p>
            <h2>Space Fact of the Day</h2>
          </div>
          <div class="dashboard-actions">
            <span id="fact-status" class="fact-status">Loading NASA feed…</span>
            <button id="next-fact-btn" class="primary-btn">Next Fact</button>
          </div>
        </section>

        <section class="fact-section">
          <div class="fact-grid" id="fact-grid"></div>
        </section>
      </main>
    </div>
  `
  
  document.querySelector('#logout-btn').addEventListener('click', async () => {
    await supabase.auth.signOut()
    navigate('/')
  })

  document.querySelector('#next-fact-btn').addEventListener('click', () => {
    loadNasaFacts()
  })
  loadNasaFacts()
}