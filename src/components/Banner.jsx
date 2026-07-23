import { Link } from 'react-router-dom'

const recentItems = [
  { emoji: '🎒', name: 'Black Backpack', loc: 'Central Park, NY', type: 'lost' },
  { emoji: '🔑', name: 'Key Ring (3 keys)', loc: 'Metro Line B, Chicago', type: 'found' },
  { emoji: '📱', name: 'iPhone 14 Pro', loc: 'Union Station, LA', type: 'lost' },
  { emoji: '👓', name: 'Reading Glasses', loc: 'Public Library, Boston', type: 'found' },
]

export default function Banner() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="banner">
        <div className="banner-inner">
          <div>
            <div className="banner-eyebrow">
              📍 Community-Powered Lost & Found
            </div>
            <h1>
              Lost something?<br />
              <span>We help you find it.</span>
            </h1>
            <p className="banner-sub">
              The easiest way to report lost items, browse found ones, and
              reconnect people with their belongings — all in one place.
            </p>
            <div className="banner-actions">
              <Link to="/services" className="btn btn-blue">Report an Item</Link>
              <Link to="/about" className="btn btn-ghost">How It Works</Link>
            </div>
            <div className="hero-search">
              <span>🔍</span>
              <input type="text" placeholder="Search for a lost item, location…" />
              <button>Search</button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-title">Recent Activity</div>
            {recentItems.map((item) => (
              <div className="item-card-mini" key={item.name}>
                <div className="item-emoji">{item.emoji}</div>
                <div className="item-meta">
                  <div className="item-name">{item.name}</div>
                  <div className="item-loc">📍 {item.loc}</div>
                </div>
                <span className={`pill pill-${item.type === 'lost' ? 'lost' : 'found'}`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how-strip">
        <div className="how-grid">
          <div className="how-step">
            <div className="how-step-num">1</div>
            <h3>Report your item</h3>
            <p>Describe what you lost or found — add a photo, location, and date in under 2 minutes.</p>
          </div>
          <div className="how-step">
            <div className="how-step-num">2</div>
            <h3>We spread the word</h3>
            <p>Your report is instantly visible to your local community and searchable by anyone nearby.</p>
          </div>
          <div className="how-step">
            <div className="how-step-num">3</div>
            <h3>Get reunited</h3>
            <p>Match found, connect directly, and get your item back — no middlemen, no hassle.</p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { num: '48,000+', label: 'Items Reported' },
            { num: '31,000+', label: 'Successful Reunions' },
            { num: '200+', label: 'Cities Covered' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '2.4rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '-1px' }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}