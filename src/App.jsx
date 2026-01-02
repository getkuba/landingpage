import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">&#9768;</span>
            <span className="logo-text">Veritas</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#join" className="nav-cta">Join the Guild</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="decorative-border top"></div>
          <h1 className="hero-title">Veritas</h1>
          <p className="hero-subtitle">The Truth Platform</p>
          <div className="hero-divider">
            <span className="divider-ornament">&#10043;</span>
          </div>
          <p className="hero-description">
            In an age of whispers and shadows, we bring forth the light of truth.
            Like the printing press that freed knowledge from the chains of the few,
            Veritas liberates truth for all who seek it.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Begin Thy Quest</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="decorative-border bottom"></div>
        </div>
        <div className="scroll-indicator">
          <span>&#8595;</span>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-ornament">&#9733;</span>
            <h2>The Chronicle of Truth</h2>
            <span className="section-ornament">&#9733;</span>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="illuminated-letter">I</div>
              <p>
                n the year of our digital age, when falsehoods spread like plague across the realm,
                there arose a need for a bastion of truth. Veritas was forged in the fires of necessity,
                crafted by scholars and sages who believed that truth, like light, should shine for all.
              </p>
              <p>
                Just as Johannes Gutenberg's press democratized knowledge in the fifteenth century,
                breaking the monopoly of scribes and clergy, so too does Veritas democratize truth
                in our modern age. We are the printing press of verification, the scriptorium of facts.
              </p>
            </div>
            <div className="about-image">
              <div className="press-illustration">
                <div className="press-frame">
                  <div className="press-platen"></div>
                  <div className="press-bed">
                    <div className="type-block"></div>
                    <div className="type-block"></div>
                    <div className="type-block"></div>
                  </div>
                  <div className="press-handle"></div>
                </div>
                <p className="illustration-caption">The Press of Truth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-ornament">&#10048;</span>
            <h2>The Sacred Tools</h2>
            <span className="section-ornament">&#10048;</span>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#9878;</span>
              </div>
              <h3>The Scales of Justice</h3>
              <p>
                Every claim is weighed upon our scales, measured against the evidence,
                and judged by the standards of reason and proof.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#128220;</span>
              </div>
              <h3>The Scriptorum</h3>
              <p>
                Our archives hold verified truths, illuminated manuscripts of fact,
                preserved for all who seek knowledge.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#9883;</span>
              </div>
              <h3>The Shield of Protection</h3>
              <p>
                Guard thyself against the arrows of misinformation with our protective
                verification system.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#9733;</span>
              </div>
              <h3>The Illumination</h3>
              <p>
                Like monks who illuminated sacred texts, we illuminate the truth,
                making it clear and beautiful for all to behold.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#128736;</span>
              </div>
              <h3>The Guild Network</h3>
              <p>
                Join a fellowship of truth-seekers, united in the noble quest
                to preserve and spread verified knowledge.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span>&#9765;</span>
              </div>
              <h3>The Royal Seal</h3>
              <p>
                Verified truths bear our seal of authenticity, a mark of honor
                that cannot be forged or falsified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-ornament">&#10070;</span>
            <h2>The Path to Truth</h2>
            <span className="section-ornament">&#10070;</span>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">I</div>
              <div className="step-content">
                <h3>Submit Thy Claim</h3>
                <p>
                  Bring forth the claim thou wishest to verify. Whether rumor from
                  the tavern or decree from the castle, all shall be examined.
                </p>
              </div>
            </div>
            <div className="process-connector">
              <div className="connector-line"></div>
              <span className="connector-ornament">&#10040;</span>
            </div>
            <div className="process-step">
              <div className="step-number">II</div>
              <div className="step-content">
                <h3>The Investigation</h3>
                <p>
                  Our scribes and scholars investigate with the precision of master
                  craftsmen, examining every letter and source.
                </p>
              </div>
            </div>
            <div className="process-connector">
              <div className="connector-line"></div>
              <span className="connector-ornament">&#10040;</span>
            </div>
            <div className="process-step">
              <div className="step-number">III</div>
              <div className="step-content">
                <h3>The Printing</h3>
                <p>
                  Like Gutenberg setting type, we carefully compose our verdict,
                  each fact placed with care and intention.
                </p>
              </div>
            </div>
            <div className="process-connector">
              <div className="connector-line"></div>
              <span className="connector-ornament">&#10040;</span>
            </div>
            <div className="process-step">
              <div className="step-number">IV</div>
              <div className="step-content">
                <h3>The Publication</h3>
                <p>
                  The truth is pressed and published, bearing our seal, ready to
                  spread across the realm for all to read.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-ornament">&#9830;</span>
            <h2>Words from the Realm</h2>
            <span className="section-ornament">&#9830;</span>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">&#8220;</div>
              <p>
                Veritas hath saved our village from the spreading of false prophecies.
                Now we know what is true and what is mere fancy.
              </p>
              <div className="testimonial-author">
                <span className="author-name">— Sir Edmund of Westshire</span>
                <span className="author-title">Knight & Scholar</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&#8220;</div>
              <p>
                As a merchant, truth is my currency. Veritas ensures that the news
                I base my trades upon is sound and verified.
              </p>
              <div className="testimonial-author">
                <span className="author-name">— Lady Margaret the Wise</span>
                <span className="author-title">Guild Master of Commerce</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&#8220;</div>
              <p>
                The printing press changed the world. Veritas uses that same power
                to ensure what is printed is worthy of the ink.
              </p>
              <div className="testimonial-author">
                <span className="author-name">— Brother Thomas</span>
                <span className="author-title">Keeper of the Archives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="section cta-section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-ornament top">&#10022;</div>
            <h2>Join the Guild of Truth</h2>
            <p>
              Take up the mantle of a truth-seeker. Join our noble order and help
              spread light in an age of shadows. Together, we shall ensure that
              truth prevails over falsehood.
            </p>
            <form className="signup-form">
              <input
                type="email"
                placeholder="Enter thy electronic mail address"
                className="email-input"
              />
              <button type="submit" className="btn btn-primary">
                Pledge Allegiance
              </button>
            </form>
            <p className="cta-note">
              &#10059; No coin required. Free for all seekers of truth. &#10059;
            </p>
            <div className="cta-ornament bottom">&#10022;</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="logo-icon">&#9768;</span>
              <span className="logo-text">Veritas</span>
              <p className="footer-tagline">Truth Above All</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>The Order</h4>
                <ul>
                  <li><a href="#about">Our Chronicle</a></li>
                  <li><a href="#features">Sacred Tools</a></li>
                  <li><a href="#how-it-works">The Path</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>The Guild</h4>
                <ul>
                  <li><a href="#join">Join Us</a></li>
                  <li><a href="#">The Council</a></li>
                  <li><a href="#">Partnerships</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Scrolls</h4>
                <ul>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Decree</a></li>
                  <li><a href="#">Code of Honor</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-divider">
              <span className="divider-pattern">&#10040; &#10040; &#10040;</span>
            </div>
            <p className="copyright">
              &#169; Anno Domini MMXXVI Veritas. All truths reserved.
            </p>
            <p className="footer-motto">
              <em>"In Veritate Lux" — In Truth, Light</em>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
