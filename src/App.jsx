import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('hot')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const claims = [
    {
      id: 1,
      author: "u/techvisionary",
      source: "reddit",
      subreddit: "r/technology",
      title: "My analysis of AI trends that went viral - now permanently mine",
      preview: "After spending 3 months researching AI developments, I posted my findings on Reddit. 50k upvotes later, I've claimed it on OriginTrail...",
      votes: 2847,
      comments: 342,
      time: "4 hours ago",
      status: "minted",
      tokenId: "OT-0x7f3a"
    },
    {
      id: 2,
      author: "@cryptoartist",
      source: "twitter",
      subreddit: null,
      title: "Thread on blockchain scalability solutions - 1.2M impressions",
      preview: "🧵 1/25: Let me explain why Layer 2 solutions are the future of blockchain scalability. This thread took me weeks to research...",
      votes: 1923,
      comments: 187,
      time: "8 hours ago",
      status: "minted",
      tokenId: "OT-0x8b2c"
    },
    {
      id: 3,
      author: "u/datascientist42",
      source: "reddit",
      subreddit: "r/datascience",
      title: "Original machine learning tutorial series I created",
      preview: "I spent 6 months creating this comprehensive ML tutorial. It's been reposted everywhere without credit. Time to claim ownership...",
      votes: 956,
      comments: 89,
      time: "1 day ago",
      status: "pending",
      tokenId: null
    },
    {
      id: 4,
      author: "@designerthoughts",
      source: "twitter",
      subreddit: null,
      title: "UI/UX design system I shared that got copied by major companies",
      preview: "Created a complete design system and shared it freely. Saw it being used by Fortune 500 companies without attribution...",
      votes: 3201,
      comments: 521,
      time: "2 days ago",
      status: "minted",
      tokenId: "OT-0x4e9d"
    },
    {
      id: 5,
      author: "u/photographer_pro",
      source: "reddit",
      subreddit: "r/photography",
      title: "My original photo being used by stock sites without permission",
      preview: "Found my sunset photo on 12 different stock photo sites. None of them asked permission. Here's how I'm reclaiming it...",
      votes: 4102,
      comments: 673,
      time: "3 days ago",
      status: "minted",
      tokenId: "OT-0x2a1f"
    }
  ]

  const filterClaims = () => {
    switch(activeTab) {
      case 'hot': return [...claims].sort((a, b) => b.votes - a.votes)
      case 'new': return [...claims].sort((a, b) => a.id - b.id).reverse()
      case 'minted': return claims.filter(c => c.status === 'minted')
      default: return claims
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">ClaimIt</span>
          </div>
        </div>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search claims, authors, tokens..."
          />
        </div>
        <div className="header-right">
          <button className="header-btn claim-btn">+ Claim Content</button>
          <button className="header-btn">Connect Wallet</button>
        </div>
      </header>

      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className={`sidebar-left ${sidebarOpen ? 'open' : 'collapsed'}`}>
          <nav className="sidebar-nav">
            <div className="nav-section">
              <h3>Feeds</h3>
              <a href="#" className="nav-item active">
                <span className="nav-icon">🏠</span>
                <span>Home</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon">🔥</span>
                <span>Popular</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon">✨</span>
                <span>New Claims</span>
              </a>
            </div>

            <div className="nav-section">
              <h3>Sources</h3>
              <a href="#" className="nav-item">
                <span className="nav-icon reddit">⬡</span>
                <span>Reddit</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon twitter">𝕏</span>
                <span>X / Twitter</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon medium">▣</span>
                <span>Medium</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon youtube">▶</span>
                <span>YouTube</span>
              </a>
            </div>

            <div className="nav-section">
              <h3>My Claims</h3>
              <a href="#" className="nav-item">
                <span className="nav-icon">📜</span>
                <span>Minted</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon">⏳</span>
                <span>Pending</span>
              </a>
              <a href="#" className="nav-item">
                <span className="nav-icon">💎</span>
                <span>Collection</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Feed Tabs */}
          <div className="feed-tabs">
            <button
              className={`tab ${activeTab === 'hot' ? 'active' : ''}`}
              onClick={() => setActiveTab('hot')}
            >
              🔥 Hot
            </button>
            <button
              className={`tab ${activeTab === 'new' ? 'active' : ''}`}
              onClick={() => setActiveTab('new')}
            >
              ✨ New
            </button>
            <button
              className={`tab ${activeTab === 'minted' ? 'active' : ''}`}
              onClick={() => setActiveTab('minted')}
            >
              💎 Minted
            </button>
          </div>

          {/* Claims Feed */}
          <div className="claims-feed">
            {filterClaims().map(claim => (
              <article key={claim.id} className="claim-card">
                {/* Vote Column */}
                <div className="vote-column">
                  <button className="vote-btn up">▲</button>
                  <span className="vote-count">{claim.votes.toLocaleString()}</span>
                  <button className="vote-btn down">▼</button>
                </div>

                {/* Content */}
                <div className="claim-content">
                  <div className="claim-meta">
                    <span className={`source-badge ${claim.source}`}>
                      {claim.source === 'reddit' ? '⬡ Reddit' : '𝕏 Twitter'}
                    </span>
                    {claim.subreddit && <span className="subreddit">{claim.subreddit}</span>}
                    <span className="author">{claim.author}</span>
                    <span className="time">{claim.time}</span>
                  </div>

                  <h2 className="claim-title">{claim.title}</h2>
                  <p className="claim-preview">{claim.preview}</p>

                  <div className="claim-footer">
                    <div className="footer-left">
                      <button className="action-btn">
                        💬 {claim.comments} Comments
                      </button>
                      <button className="action-btn">
                        🔗 Share
                      </button>
                      <button className="action-btn">
                        ⚡ Verify
                      </button>
                    </div>
                    <div className="footer-right">
                      {claim.status === 'minted' ? (
                        <span className="token-badge minted">
                          ◈ {claim.tokenId}
                        </span>
                      ) : (
                        <span className="token-badge pending">
                          ⏳ Pending Mint
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="sidebar-right">
          <div className="widget">
            <h3>🔗 OriginTrail Network</h3>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-value">2.4M</span>
                <span className="stat-label">Claims Minted</span>
              </div>
              <div className="stat">
                <span className="stat-value">847K</span>
                <span className="stat-label">Creators</span>
              </div>
              <div className="stat">
                <span className="stat-value">$12.8M</span>
                <span className="stat-label">Value Protected</span>
              </div>
            </div>
          </div>

          <div className="widget">
            <h3>📈 Trending Claims</h3>
            <ul className="trending-list">
              <li>
                <span className="rank">1</span>
                <span className="trend-title">Viral AI artwork ownership dispute</span>
              </li>
              <li>
                <span className="rank">2</span>
                <span className="trend-title">Original meme creator claims rights</span>
              </li>
              <li>
                <span className="rank">3</span>
                <span className="trend-title">Tech tutorial series verified</span>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h3>💡 How It Works</h3>
            <ol className="how-it-works">
              <li>Connect your social accounts</li>
              <li>Select content you created</li>
              <li>Verify ownership on-chain</li>
              <li>Receive your NFT certificate</li>
            </ol>
          </div>

          <div className="widget cta-widget">
            <h3>🚀 Claim Your Content</h3>
            <p>Protect your original work. Own it forever on OriginTrail.</p>
            <button className="cta-btn">Get Started</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
