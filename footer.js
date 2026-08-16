document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
  <style>
    .site-footer {
      width: 100%; border-top: 1px solid #eaeaea; background: #ffffff;
      padding: 50px 20px; text-align: center; color: #666666; font-size: 13px;
    }
    .footer-links {
      display: flex; justify-content: center; flex-wrap: wrap; gap: 24px; margin-bottom: 20px; font-weight: 500;
    }
    .footer-links a { color: #666666; text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: #8a6522; }
    .disclaimer { max-width: 680px; margin: 16px auto 0; font-size: 11.5px; color: #777777; line-height: 1.6; }

    @media(max-width: 768px) {
      .site-footer { padding: 35px 16px; }
      .footer-links { gap: 16px; font-size: 12px; margin-bottom: 16px; }
    }
  </style>

  <footer class="site-footer">
    <div class="footer-links">
      <a href="index.html">Home</a>
      <a href="categories.html">Categories</a>
      <a href="offer.html">Partner Hub</a>
      <a href="disclaimer.html">Disclaimer</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="terms.html">Terms of Service</a>
    </div>
    <p>&copy; 2026 Aura Journal. All rights reserved.</p>
    <p class="disclaimer">
      Disclaimer: Aura Journal is an independent digital media publisher and referral portal. Featured third-party sponsor offers support ongoing editorial research and open access distribution.
    </p>
  </footer>
  `;

  // Inject footer at the very end of body
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
