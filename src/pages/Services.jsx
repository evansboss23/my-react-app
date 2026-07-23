const features = [
  {
    icon: '📋',
    title: 'Report a Lost Item',
    description:
      'Fill out a quick form with your item details, last known location, and a photo. Your report goes live instantly and is searchable by anyone in your area.',
    tag: 'lost',
  },
  {
    icon: '✅',
    title: 'Post a Found Item',
    description:
      'Found something? Post it here so the owner can find you. We\'ll notify anyone who reported a matching item nearby — no guesswork needed.',
    tag: 'found',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description:
      'Set up alerts for specific items or locations. We\'ll email or text you the moment a matching item is posted — so you never have to keep checking manually.',
    tag: null,
  },
  {
    icon: '🗺️',
    title: 'Location-Based Search',
    description:
      'Browse items by neighborhood, city, or landmark. Filter by category — electronics, pets, documents, accessories — to zero in on exactly what you\'re looking for.',
    tag: null,
  },
  {
    icon: '💬',
    title: 'Direct Messaging',
    description:
      'Once there\'s a match, connect directly with the finder or owner through our in-app chat. No personal info shared until you\'re ready.',
    tag: null,
  },
  {
    icon: '🏛️',
    title: 'Venue & Business Portal',
    description:
      'Airports, hotels, transit agencies — manage your lost property digitally. Give your customers a simple way to claim their belongings online.',
    tag: null,
  },
]

export default function Services() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="page-eyebrow">What We Offer</span>
        <h1>Everything you need to find — or return — an item</h1>
        <p>Free for individuals. Simple for businesses. Powerful for everyone.</p>
      </div>

      <div className="divider" />

      <div className="services-grid">
        {features.map((f) => (
          <div className="card service-card" key={f.title}>
            <div className="service-icon-wrap">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            {f.tag && (
              <span style={{ marginTop: 14, display: 'inline-block' }}
                className={`pill pill-${f.tag}`}>
                {f.tag === 'lost' ? '🔴 Lost item flow' : '🟢 Found item flow'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}