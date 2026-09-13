type NavbarProps = {
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export function Navbar({ menuOpen, onMenuToggle, onNavigate }: NavbarProps) {
  return (
    <header className="topbar">
      <nav className="nav-shell" aria-label="Main navigation">
        <div className="mobile-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={onMenuToggle}
          >
            <span>{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>

        <a href="#home" className="brand" aria-label="Dev Stack home">
          <span className="brand-mark">DS</span>
          <span className="brand-text">
            <span className="brand-gradient">Dev</span> <span className="brand-name">Stack</span>
          </span>
        </a>

        <div className="nav-links">
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              onClick={onNavigate}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#sign-in" className="sign-in">Sign In</a>
          <a href="#sign-up" className="sign-up">Sign Up</a>
        </div>

        <div className="mobile-auth">
          <a href="#sign-in" className="sign-in">Sign In</a>
          <a href="#sign-up" className="sign-up small">Sign Up</a>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mobile-link"
                onClick={onNavigate}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
