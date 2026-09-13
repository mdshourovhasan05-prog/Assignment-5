export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand" aria-label="Dev Stack home">
              <span className="footer-mark">DS</span>
              <span><span className="footer-brand-dark">Dev </span><span className="footer-brand-pink">Stack</span></span>
            </a>

            <p className="footer-description">
              Curated tools, technologies, and resources for developers building<br className="footer-desktop-break" /> modern software.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          {([
            ['Product', ['Home', 'Technologies', 'Projects']],
            ['Company', ['About', 'Contact', 'Careers']],
            ['Legal', ['Privacy Policy', 'Terms of Service']],
          ] as Array<[string, string[]]>).map(([title, links]) => (
            <div key={title} className="footer-link-column">
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
