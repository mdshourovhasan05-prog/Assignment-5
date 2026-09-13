export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-shell">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="title-line">Build Your Ideal</span>
              <span className="title-line gradient-text">Development Stack</span>
            </h1>

            <p className="hero-text">
              Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="hero-actions">
              <a href="#technologies" className="primary-btn">
                Explore Technologies
              </a>
              <a href="#about" className="secondary-btn">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <img
              className="stack-image"
              src="/banner-stack.png"
              alt="Colorful layered development stack illustration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
