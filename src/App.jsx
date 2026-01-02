import { useState } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('pending')

  const cases = {
    pending: [
      { id: 1, title: "Climate report accuracy under review", status: "hearing", time: "2 hours ago", caseNo: "PM-2026-0142" },
      { id: 2, title: "Tech company earnings claim examination", status: "deliberation", time: "5 hours ago", caseNo: "PM-2026-0141" },
      { id: 3, title: "Health study methodology dispute", status: "hearing", time: "1 day ago", caseNo: "PM-2026-0139" },
    ],
    contested: [
      { id: 4, title: "Energy efficiency claims challenged", status: "appeal", time: "3 hours ago", caseNo: "PM-2026-0138" },
      { id: 5, title: "Historical documentary fact-check appeal", status: "review", time: "1 day ago", caseNo: "PM-2026-0135" },
    ],
    ruled: [
      { id: 6, title: "Vaccine efficacy data validated", status: "upheld", time: "2 days ago", caseNo: "PM-2026-0130" },
      { id: 7, title: "Election interference claims dismissed", status: "dismissed", time: "3 days ago", caseNo: "PM-2026-0128" },
      { id: 8, title: "Product safety violations confirmed", status: "guilty", time: "4 days ago", caseNo: "PM-2026-0125" },
    ]
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <span className="scale-left">⚖</span>
            </div>
            {sidebarOpen && <span className="logo-text">ProofMarket</span>}
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
            <span className="nav-icon">📋</span>
            {sidebarOpen && <span>File New Case</span>}
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📁</span>
            {sidebarOpen && <span>My Cases</span>}
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📜</span>
            {sidebarOpen && <span>Court Records</span>}
          </a>
        </nav>

        {sidebarOpen && (
          <div className="sidebar-section">
            <h3>Recent Filings</h3>
            <ul className="recent-list">
              <li><a href="#">PM-2026-0142: Climate data</a></li>
              <li><a href="#">PM-2026-0141: Tech earnings</a></li>
              <li><a href="#">PM-2026-0139: Health study</a></li>
            </ul>
          </div>
        )}

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙</span>
            {sidebarOpen && <span>Court Settings</span>}
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <div className="court-emblem">⚖</div>
          <h1>The Court of Public Record</h1>
          <p className="header-quote">Where Evidence Meets Verdict</p>
        </header>

        <div className="content-area">
          {/* Input Section */}
          <div className="input-section">
            <div className="input-container">
              <div className="input-label">FILE A CLAIM FOR ADJUDICATION</div>
              <textarea
                className="claim-input"
                placeholder="Enter the statement or claim to be examined by the court..."
                rows="3"
              ></textarea>
              <button className="submit-btn">
                <span>Submit to Court</span>
                <span className="submit-icon">⚖</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className={`action-btn ${activeTab === 'pending' ? 'active' : ''}`}
                onClick={() => setActiveTab('pending')}
              >
                <span className="btn-icon">⏳</span>
                Pending
              </button>
              <button
                className={`action-btn ${activeTab === 'contested' ? 'active' : ''}`}
                onClick={() => setActiveTab('contested')}
              >
                <span className="btn-icon">⚔</span>
                Contested
              </button>
              <button
                className={`action-btn ${activeTab === 'ruled' ? 'active' : ''}`}
                onClick={() => setActiveTab('ruled')}
              >
                <span className="btn-icon">🔨</span>
                Ruled
              </button>
            </div>
          </div>

          {/* Cases Feed */}
          <div className="cases-feed">
            <div className="feed-header">
              <h2>
                {activeTab === 'pending' && 'Cases Awaiting Judgment'}
                {activeTab === 'contested' && 'Cases Under Appeal'}
                {activeTab === 'ruled' && 'Final Verdicts'}
              </h2>
            </div>

            <div className="cases-list">
              {cases[activeTab].map(caseItem => (
                <article key={caseItem.id} className="case-card">
                  <div className="case-header">
                    <span className="case-number">{caseItem.caseNo}</span>
                    <span className={`status-badge ${caseItem.status}`}>
                      {caseItem.status === 'hearing' && '◉ In Hearing'}
                      {caseItem.status === 'deliberation' && '◐ Deliberation'}
                      {caseItem.status === 'appeal' && '↺ Under Appeal'}
                      {caseItem.status === 'review' && '◎ In Review'}
                      {caseItem.status === 'upheld' && '✓ Upheld'}
                      {caseItem.status === 'dismissed' && '✗ Dismissed'}
                      {caseItem.status === 'guilty' && '⚠ Misinformation'}
                    </span>
                  </div>
                  <h3 className="case-title">{caseItem.title}</h3>
                  <div className="case-meta">
                    <span className="case-time">Filed {caseItem.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <p>ProofMarket — "In Veritate Iudicium" — In Truth, Judgment</p>
        </footer>
      </main>
    </div>
  )
}

export default App
