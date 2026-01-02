import { useState } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('latest')

  const sampleClaims = {
    latest: [
      { id: 1, title: "New study on climate patterns released", status: "verifying", time: "2 hours ago" },
      { id: 2, title: "Economic forecast for Q2 2026", status: "verified", time: "5 hours ago" },
      { id: 3, title: "Health benefits of Mediterranean diet", status: "verified", time: "1 day ago" },
    ],
    disputed: [
      { id: 4, title: "Claims about new energy source efficiency", status: "disputed", time: "3 hours ago" },
      { id: 5, title: "Historical accuracy of recent documentary", status: "disputed", time: "1 day ago" },
    ],
    resolved: [
      { id: 6, title: "Vaccine efficacy rates confirmed", status: "true", time: "2 days ago" },
      { id: 7, title: "Election results verification complete", status: "true", time: "3 days ago" },
      { id: 8, title: "Product safety claims debunked", status: "false", time: "4 days ago" },
    ]
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-sun">
              <div className="sun-center"></div>
            </div>
            {sidebarOpen && <span className="logo-text">Aletheia</span>}
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span className="nav-icon">⊕</span>
            {sidebarOpen && <span>New Inquiry</span>}
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">☆</span>
            {sidebarOpen && <span>Saved</span>}
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">↺</span>
            {sidebarOpen && <span>History</span>}
          </a>
        </nav>

        {sidebarOpen && (
          <div className="sidebar-section">
            <h3>Recent Inquiries</h3>
            <ul className="recent-list">
              <li><a href="#">Climate change statistics</a></li>
              <li><a href="#">Vaccine effectiveness data</a></li>
              <li><a href="#">Economic growth claims</a></li>
            </ul>
          </div>
        )}

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙</span>
            {sidebarOpen && <span>Settings</span>}
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Seek Truth</h1>
          <p className="header-quote">"Sapere Aude" — Dare to Know</p>
        </header>

        <div className="content-area">
          {/* Input Section */}
          <div className="input-section">
            <div className="input-container">
              <textarea
                className="claim-input"
                placeholder="Enter a claim to verify... What truth do you seek?"
                rows="3"
              ></textarea>
              <button className="submit-btn">
                <span>Illuminate</span>
                <span className="submit-icon">→</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className={`action-btn ${activeTab === 'latest' ? 'active' : ''}`}
                onClick={() => setActiveTab('latest')}
              >
                <span className="btn-icon">✦</span>
                Latest
              </button>
              <button
                className={`action-btn ${activeTab === 'disputed' ? 'active' : ''}`}
                onClick={() => setActiveTab('disputed')}
              >
                <span className="btn-icon">⚖</span>
                Disputed
              </button>
              <button
                className={`action-btn ${activeTab === 'resolved' ? 'active' : ''}`}
                onClick={() => setActiveTab('resolved')}
              >
                <span className="btn-icon">✓</span>
                Resolved
              </button>
            </div>
          </div>

          {/* Claims Feed */}
          <div className="claims-feed">
            <div className="feed-header">
              <h2>
                {activeTab === 'latest' && 'Latest Inquiries'}
                {activeTab === 'disputed' && 'Disputed Claims'}
                {activeTab === 'resolved' && 'Resolved Verdicts'}
              </h2>
            </div>

            <div className="claims-list">
              {sampleClaims[activeTab].map(claim => (
                <article key={claim.id} className="claim-card">
                  <div className="claim-status">
                    <span className={`status-badge ${claim.status}`}>
                      {claim.status === 'verified' && '✓ Verified'}
                      {claim.status === 'verifying' && '◐ Verifying'}
                      {claim.status === 'disputed' && '⚖ Disputed'}
                      {claim.status === 'true' && '✓ True'}
                      {claim.status === 'false' && '✗ False'}
                    </span>
                  </div>
                  <h3 className="claim-title">{claim.title}</h3>
                  <div className="claim-meta">
                    <span className="claim-time">{claim.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <p>"Aletheia" — ἀλήθεια — Truth Unveiled</p>
        </footer>
      </main>
    </div>
  )
}

export default App
