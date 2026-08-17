document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
  <style>
    .site-header {
      position: sticky; top: 0; z-index: 999; width: 100%;
      background: rgba(252, 252, 252, 0.98);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid #eaeaea;
    }
    .header-inner {
      width: 100%; max-width: 1100px; height: 74px; margin: 0 auto; padding: 0 20px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .brand-logo {
      font-family: 'Playfair Display', serif; font-size: 21px; font-weight: 700; color: #121212; text-decoration: none;
    }
    .brand-logo span { color: #8a6522; }

    /* Navigation Menu */
    .header-nav {
      display: flex; align-items: center; gap: 18px; font-size: 13.5px; font-weight: 500; color: #666666;
    }
    .header-nav a { color: inherit; text-decoration: none; transition: color 0.2s; }
    .header-nav a:hover { color: #8a6522; }
    .header-nav .highlight-btn {
      background: #121212; color: #ffffff !important; padding: 8px 16px; border-radius: 6px; font-weight: 600;
    }
    .header-nav .highlight-btn:hover { background: #8a6522; }

    /* Hamburger Button (Hidden on Desktop) */
    .menu-toggle {
      display: none; background: none; border: none; cursor: pointer;
      flex-direction: column; justify-content: space-between; width: 26px; height: 20px; padding: 0; z-index: 1001;
    }
    .menu-toggle span {
      display: block; width: 100%; height: 2.5px; background: #121212; border-radius: 2px; transition: all 0.3s ease;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 850px) {
      .menu-toggle { display: flex; }
      .header-nav {
        position: fixed; top: 0; right: -100%; width: 260px; height: 100vh;
        background: #ffffff; flex-direction: column; align-items: flex-start;
        justify-content: center; gap: 24px; padding: 40px; box-shadow: -10px 0 30px rgba(0,0,0,0.08);
        transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1); z-index: 1000;
      }
      .header-nav.active { right: 0; }
      .header-nav a { font-size: 16px; font-weight: 600; }
      
      /* Hamburger Animation to 'X' */
      .menu-toggle.active span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
      .menu-toggle.active span:nth-child(2) { opacity: 0; }
      .menu-toggle.active span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }
    }

    /* Overlay Background when menu is open */
    .menu-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
      background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);
      opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 998;
    }
    .menu-overlay.active { opacity: 1; visibility: visible; }
  </style>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand-logo">Aura Journal<span>.</span></a>
      
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header-nav" id="headerNav">
        <a href="quotes.html">Quotes</a>
        <a href="decor.html">Home Decor</a>
        <a href="fashion.html">Fashion</a>
        <a href="travel.html">Travel</a>
        <a href="food.html">Food</a>
        <a href="nature.html">Nature</a>
        <a href="offer.html" class="highlight-btn">Partner Hub</a>
      </nav>
    </div>
  </header>
  <div class="menu-overlay" id="menuOverlay"></div>
  `;

  // Inject header at the very beginning of body
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Toggle Functionality
  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("headerNav");
  const overlay = document.getElementById("menuOverlay");

  function toggleMenu() {
    toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
  }

  toggleBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
// Favicon
if (!document.querySelector('link[data-site-favicon]')) {
  const favicon = document.createElement('link');

  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.setAttribute('data-site-favicon', 'true');

  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#171717"/>
      <text
        x="32"
        y="43"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-size="38"
        fill="#ffffff"
      >A</text>
    </svg>
  `);

  document.head.appendChild(favicon);
}