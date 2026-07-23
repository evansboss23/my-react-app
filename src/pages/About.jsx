export default function About() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="page-eyebrow">Our Mission</span>
        <h1>Reuniting people with what matters</h1>
        <p>
          We built FindBack because losing something — a wallet, a pet, a
          sentimental gift — is stressful. We wanted to make the process of
          finding it as simple and human as possible.
        </p>
      </div>

      <div className="divider" />

      <div className="about-grid">
        {[
          { num: '48K+', label: 'Items Reported' },
          { num: '31K+', label: 'Happy Reunions' },
          { num: '200+', label: 'Cities Active' },
          { num: '4.9★', label: 'App Rating' },
        ].map(s => (
          <div className="card stat-card" key={s.label}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="about-body">
        <p>
          FindBack started in 2021 after our founder lost his laptop bag on
          the subway — and spent a frustrating week calling lost property
          offices with no luck. There had to be a better way.
        </p>
        <p>
          Today we're a community of over 200,000 people across 200+ cities
          who look out for each other. When someone finds a lost item, they
          post it here. When someone loses something, they search here first.
          It's simple, free, and it works.
        </p>
        <p>
          Every reunion — no matter how small — matters to us. That keychain
          with sentimental value, the dog who wandered off, the passport found
          days before a flight. We're proud to be part of those moments.
        </p>
      </div>
    </div>
  )
}