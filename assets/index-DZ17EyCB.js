(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={getSession:async()=>({data:{session:null}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe:()=>{}}}}),signInWithPassword:async()=>({error:{message:`Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.`}}),signUp:async()=>({error:{message:`Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.`}}),signOut:async()=>({error:null})};console.warn(`Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.`);var t={auth:e},n=`/assets/nasa-CC6PuV5J.svg`,r=(e,t)=>{e.innerHTML=`
    <div class="app-container">
      <nav class="navbar">
        <div class="logo">
          <img src="${n}" alt="NASA Logo" class="nasa-logo" />
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
  `,document.querySelector(`#nav-login-btn`).addEventListener(`click`,()=>t(`/auth`)),document.querySelector(`#hero-login-btn`).addEventListener(`click`,()=>t(`/auth`))},i=(e,r)=>{e.innerHTML=`
    <div class="app-container">
      <nav class="navbar">
        <div class="logo" style="cursor: pointer;" id="home-link">
          <img src="${n}" alt="NASA Logo" class="nasa-logo" />
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
  `,document.querySelector(`#home-link`).addEventListener(`click`,()=>r(`/`));let i=document.querySelector(`#email`),a=document.querySelector(`#password`),o=document.querySelector(`#auth-error`);document.querySelector(`#auth-form`).addEventListener(`submit`,async e=>{e.preventDefault(),o.textContent=``;let{error:n}=await t.auth.signInWithPassword({email:i.value,password:a.value});n?o.textContent=n.message:r(`/dash`)}),document.querySelector(`#signup-btn`).addEventListener(`click`,async()=>{if(o.textContent=``,!i.value||!a.value){o.textContent=`Please enter an email and password to sign up.`;return}let{error:e}=await t.auth.signUp({email:i.value,password:a.value});e?o.textContent=e.message:(o.textContent=`Check your email for the confirmation link!`,o.style.color=`#4ea8de`)})},a=`https://api.nasa.gov/planetary/apod?api_key=undefined&count=4`,o=[{title:`The View Near a Black Hole`,date:`2014-03-23`,url:`https://apod.nasa.gov/apod/image/1403/blackhole_hobart_960.jpg`,explanation:`In the center of a swirling whirlpool of hot gas is likely a beast that has never been seen directly: a black hole.  Studies of the bright light emitted by the swirling gas frequently indicate not only that a black hole is present, but also likely attributes.  The gas surrounding GRO J1655-40, for example, has been found to display an unusual flickering at a rate of 450 times a second.  Given a previous mass estimate for the central object of seven times the mass of our Sun, the rate of the fast flickering can be explained by a black hole that is rotating very rapidly.  What physical mechanisms actually cause the flickering -- and a slower quasi-periodic oscillation (QPO) -- in accretion disks surrounding black holes and neutron stars remains a topic of much research.    Find that image: A new APOD search engine`},{title:`Jupiter’s Great Red Spot`,date:`2024-01-10`,url:`https://images-assets.nasa.gov/image/PIA21782/PIA21782~orig.jpg`,explanation:`Jupiter’s Great Red Spot is an enormous storm larger than Earth, swirling in Jupiter’s atmosphere for centuries.`},{title:`The Moon’s Far Side`,date:`2024-01-12`,url:`https://images-assets.nasa.gov/image/iss067e006122/iss067e006122~orig.jpg`,explanation:`The far side of the Moon has a heavily cratered surface, unlike the near side that faces Earth and contains more dark plains.`},{title:`The Orion Nebula`,date:`2024-01-16`,url:`https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000889/GSFC_20171208_Archive_e000889~orig.jpg`,explanation:`The Orion Nebula is a stellar nursery where new stars are forming inside vast clouds of gas and dust.`}],s=e=>{if(!e)return`Unknown Date`;let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})},c=e=>{let t=document.querySelector(`#fact-grid`);t&&(t.innerHTML=e.filter(e=>e&&(e.url||e.hdurl)).map(e=>`
      <article class="fact-item">
        <img src="${e.hdurl||e.url}" alt="${e.title||`NASA fact`}" class="fact-item-image" />
        <div class="fact-item-content">
          <div class="fact-item-meta">
            <span>${s(e.date)}</span>
            <span>${e.media_type===`video`?`Video`:`Image`}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.explanation?e.explanation.slice(0,170)+(e.explanation.length>170?`...`:``):`No summary available yet.`}</p>
        </div>
      </article>
    `).join(``))},l=(e,t=!1)=>{let n=document.querySelector(`#fact-status`);n&&(n.textContent=e,n.classList.toggle(`loading`,t))},u=async()=>{l(`Loading NASA feed...`,!0);try{let e=await fetch(a);if(!e.ok)throw Error(`NASA API request failed`);let t=await e.json(),n=Array.isArray(t)?t:[t];if(!n.length)throw Error(`No NASA facts returned`);c(n),l(`NASA feed • ${n.length} facts loaded`)}catch(e){console.error(`NASA API error:`,e),c(o),l(`Using fallback space facts`)}},d=(e,r,i)=>{e.innerHTML=`
    <div class="app-container">
      <nav class="navbar">
        <div class="logo">
          <img src="${n}" alt="NASA Logo" class="nasa-logo" />
          <span class="brand-text">NASA Facts</span>
        </div>
        <div class="user-controls">
          <div class="profile-icon" title="${i?.email||`Explorer`}">
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
  `,document.querySelector(`#logout-btn`).addEventListener(`click`,async()=>{await t.auth.signOut(),r(`/`)}),document.querySelector(`#next-fact-btn`).addEventListener(`click`,()=>{u()}),u()},f=document.querySelector(`#app`),p=e=>{window.history.pushState({},``,e),m()};window.addEventListener(`popstate`,m);async function m(){let e=null;try{let{data:{session:n}}=await t.auth.getSession();e=n}catch(e){console.error(`Auth error:`,e)}let n=window.location.pathname;n===`/dash`?e?d(f,p,e.user):p(`/`):n===`/auth`?e?p(`/dash`):i(f,p):r(f,p)}m(),t.auth.onAuthStateChange((e,t)=>{m()});