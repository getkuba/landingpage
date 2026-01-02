import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-sun">
              <div className="sun-center"></div>
              <div className="sun-rays"></div>
            </div>
            <span className="logo-text">Veritas</span>
          </div>
          <ul className="nav-links">
            <li><a href="#philosophy">Philosophy</a></li>
            <li><a href="#pillars">Pillars</a></li>
            <li><a href="#method">Method</a></li>
            <li><a href="#join" className="nav-cta">Seek Truth</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="celestial-bg">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
        </div>
        <div className="hero-content">
          <p className="hero-quote">"E pur si muove"</p>
          <p className="hero-translation">— And yet it moves</p>
          <h1 className="hero-title">VERITAS</h1>
          <div className="hero-line">
            <span className="line-star">&#10038;</span>
            <div className="line"></div>
            <span className="line-star">&#10038;</span>
          </div>
          <p className="hero-subtitle">The Pursuit of Truth Through Reason</p>
          <p className="hero-description">
            From Plato's realm of perfect Forms to Galileo's telescope revealing celestial truths,
            humanity has always sought to emerge from the cave of shadows into the light of knowledge.
            Join us in this eternal quest.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Illuminate Your Path</button>
            <button className="btn btn-secondary">Explore the Cosmos</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-orbit">
            <span>&#9661;</span>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="section philosophy-section">
        <div className="container">
          <div className="section-header">
            <div className="greek-column left"></div>
            <div className="header-content">
              <span className="greek-letter">&#934;</span>
              <h2>The Love of Wisdom</h2>
              <p className="section-subtitle">Philosophia — Where Truth Begins</p>
            </div>
            <div className="greek-column right"></div>
          </div>

          <div className="philosophy-content">
            <div className="cave-allegory">
              <div className="cave">
                <div className="shadow shadow-1"></div>
                <div className="shadow shadow-2"></div>
                <div className="shadow shadow-3"></div>
                <div className="cave-opening">
                  <div className="light-rays"></div>
                </div>
              </div>
              <p className="allegory-caption">From Shadows to Light — Plato's Allegory</p>
            </div>
            <div className="philosophy-text">
              <blockquote className="plato-quote">
                "We can easily forgive a child who is afraid of the dark;
                the real tragedy of life is when men are afraid of the light."
                <cite>— Plato</cite>
              </blockquote>
              <p>
                Like the prisoners in Plato's cave, humanity has long mistaken shadows for reality.
                Veritas embodies the philosopher's journey — the ascent from darkness into the
                brilliant light of truth and understanding.
              </p>
              <p>
                We stand upon the shoulders of giants: Socrates who questioned everything,
                Aristotle who categorized the world, Copernicus who moved the Earth,
                and Galileo who dared to look up and see the truth written in the stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="section pillars-section">
        <div className="container">
          <div className="section-header centered">
            <span className="header-ornament">&#9788;</span>
            <h2>The Four Pillars of Truth</h2>
            <p className="section-subtitle">Built upon the foundations of classical wisdom</p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-top">
                <div className="pillar-capital"></div>
              </div>
              <div className="pillar-body">
                <div className="pillar-icon">&#9788;</div>
                <h3>Observation</h3>
                <p className="pillar-latin">Observatio</p>
                <p>
                  As Galileo turned his telescope to the heavens, we turn our instruments
                  toward claims. Truth reveals itself to those who look carefully.
                </p>
              </div>
              <div className="pillar-base"></div>
            </div>

            <div className="pillar-card">
              <div className="pillar-top">
                <div className="pillar-capital"></div>
              </div>
              <div className="pillar-body">
                <div className="pillar-icon">&#9041;</div>
                <h3>Reason</h3>
                <p className="pillar-latin">Ratio</p>
                <p>
                  Following Aristotle's logic and Euclid's geometry, we apply rigorous
                  reasoning to separate truth from falsehood.
                </p>
              </div>
              <div className="pillar-base"></div>
            </div>

            <div className="pillar-card">
              <div className="pillar-top">
                <div className="pillar-capital"></div>
              </div>
              <div className="pillar-body">
                <div className="pillar-icon">&#9878;</div>
                <h3>Evidence</h3>
                <p className="pillar-latin">Evidentia</p>
                <p>
                  Like Copernicus measuring the stars, we demand evidence.
                  Claims must be weighed against the immutable laws of reality.
                </p>
              </div>
              <div className="pillar-base"></div>
            </div>

            <div className="pillar-card">
              <div className="pillar-top">
                <div className="pillar-capital"></div>
              </div>
              <div className="pillar-body">
                <div className="pillar-icon">&#10052;</div>
                <h3>Illumination</h3>
                <p className="pillar-latin">Illuminatio</p>
                <p>
                  In the Platonic tradition, we bring truths from the realm of Forms
                  into the light where all may see and understand.
                </p>
              </div>
              <div className="pillar-base"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="section method-section">
        <div className="container">
          <div className="section-header centered">
            <span className="header-ornament">&#8853;</span>
            <h2>The Scientific Method of Truth</h2>
            <p className="section-subtitle">In the tradition of natural philosophers</p>
          </div>

          <div className="method-diagram">
            <div className="heliocentric-model">
              <div className="sun-center-model">
                <span>VERITAS</span>
              </div>
              <div className="orbit-ring orbit-ring-1">
                <div className="method-planet" style={{"--angle": "0deg"}}>
                  <div className="planet-content">
                    <span className="step-num">I</span>
                    <span className="step-name">Question</span>
                  </div>
                </div>
              </div>
              <div className="orbit-ring orbit-ring-2">
                <div className="method-planet" style={{"--angle": "90deg"}}>
                  <div className="planet-content">
                    <span className="step-num">II</span>
                    <span className="step-name">Investigate</span>
                  </div>
                </div>
              </div>
              <div className="orbit-ring orbit-ring-3">
                <div className="method-planet" style={{"--angle": "180deg"}}>
                  <div className="planet-content">
                    <span className="step-num">III</span>
                    <span className="step-name">Analyze</span>
                  </div>
                </div>
              </div>
              <div className="orbit-ring orbit-ring-4">
                <div className="method-planet" style={{"--angle": "270deg"}}>
                  <div className="planet-content">
                    <span className="step-num">IV</span>
                    <span className="step-name">Illuminate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="method-steps">
            <div className="method-step">
              <div className="step-numeral">I</div>
              <div className="step-details">
                <h3>Question Everything</h3>
                <p>In the Socratic tradition, we begin with doubt. Submit any claim to the crucible of inquiry.</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-numeral">II</div>
              <div className="step-details">
                <h3>Investigate Thoroughly</h3>
                <p>Like astronomers mapping the heavens, we gather data from multiple sources and perspectives.</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-numeral">III</div>
              <div className="step-details">
                <h3>Analyze with Reason</h3>
                <p>Applying Aristotelian logic, we dissect claims to reveal their truth or falsity.</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-numeral">IV</div>
              <div className="step-details">
                <h3>Illuminate the World</h3>
                <p>Verified truths are published for all, bringing light to dispel the shadows of ignorance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Section */}
      <section className="section wisdom-section">
        <div className="container">
          <div className="section-header centered light">
            <span className="header-ornament">&#9734;</span>
            <h2>Wisdom of the Ages</h2>
            <p className="section-subtitle">Standing on the shoulders of giants</p>
          </div>

          <div className="wisdom-grid">
            <div className="wisdom-card">
              <div className="thinker-portrait">
                <div className="portrait-frame">
                  <span className="portrait-initial">S</span>
                </div>
              </div>
              <blockquote>
                "The only true wisdom is in knowing you know nothing."
              </blockquote>
              <cite>Socrates</cite>
              <span className="era">470 – 399 BCE</span>
            </div>

            <div className="wisdom-card">
              <div className="thinker-portrait">
                <div className="portrait-frame">
                  <span className="portrait-initial">A</span>
                </div>
              </div>
              <blockquote>
                "It is the mark of an educated mind to be able to entertain a thought without accepting it."
              </blockquote>
              <cite>Aristotle</cite>
              <span className="era">384 – 322 BCE</span>
            </div>

            <div className="wisdom-card">
              <div className="thinker-portrait">
                <div className="portrait-frame">
                  <span className="portrait-initial">G</span>
                </div>
              </div>
              <blockquote>
                "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual."
              </blockquote>
              <cite>Galileo Galilei</cite>
              <span className="era">1564 – 1642 CE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="section cta-section">
        <div className="cta-celestial">
          <div className="star star-1">&#10022;</div>
          <div className="star star-2">&#10022;</div>
          <div className="star star-3">&#10017;</div>
          <div className="star star-4">&#10022;</div>
          <div className="star star-5">&#10017;</div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-symbol">
              <div className="vitruvian-circle"></div>
              <div className="vitruvian-square"></div>
            </div>
            <h2>Join the Academy of Truth</h2>
            <p className="cta-quote">
              "Plato's Academy welcomed all who sought wisdom.
               In that spirit, Veritas opens its doors to every seeker of truth."
            </p>
            <form className="signup-form">
              <input
                type="email"
                placeholder="Your epistula electronica"
                className="email-input"
              />
              <button type="submit" className="btn btn-primary">
                Enter the Academy
              </button>
            </form>
            <p className="cta-note">
              &#9733; Free for all lovers of wisdom &#9733;
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-sun small">
                  <div className="sun-center"></div>
                </div>
                <span className="logo-text">Veritas</span>
              </div>
              <p className="footer-motto">"Lux et Veritas"</p>
              <p className="footer-translation">Light and Truth</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>The Academy</h4>
                <ul>
                  <li><a href="#philosophy">Philosophy</a></li>
                  <li><a href="#pillars">The Pillars</a></li>
                  <li><a href="#method">Our Method</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>The Scholars</h4>
                <ul>
                  <li><a href="#join">Join Us</a></li>
                  <li><a href="#">The Council</a></li>
                  <li><a href="#">Contributors</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Codices</h4>
                <ul>
                  <li><a href="#">Terms of Discourse</a></li>
                  <li><a href="#">Privacy Principles</a></li>
                  <li><a href="#">Ethical Standards</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-divider">
              <span>&#10040;</span>
              <span>&#9788;</span>
              <span>&#10040;</span>
            </div>
            <p className="copyright">
              &#169; MMXXVI Veritas Academy. In pursuit of eternal truths.
            </p>
            <p className="footer-inscription">
              <em>"Sapere Aude" — Dare to Know</em>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
