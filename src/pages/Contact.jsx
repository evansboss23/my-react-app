export default function Contact() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="page-eyebrow">Contact Us</span>
        <h1>We're here to help</h1>
        <p>
          Have a question about a report, need help with your account, or want
          to partner with us? We'll get back to you within one business day.
        </p>
      </div>

      <div className="divider" />

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Whether it's a question about how FindBack works, a technical
            issue, or a business inquiry — our team is happy to help.
          </p>

          {[
            { icon: '📧', label: 'Email', value: 'hello@findback.app', href: 'mailto:hello@findback.app' },
            { icon: '💬', label: 'Live Chat', value: 'Available 9am – 6pm EST', href: null },
            { icon: '📍', label: 'Headquarters', value: 'New York, NY', href: null },
            { icon: '⏱️', label: 'Response time', value: 'Within 24 hours', href: null },
          ].map(item => (
            <div className="contact-item" key={item.label}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-text">
                <strong>{item.label}</strong>
                {item.href
                  ? <span><a href={item.href}>{item.value}</a></span>
                  : <span>{item.value}</span>
                }
              </div>
            </div>
          ))}
        </div>

        <div className="card contact-form">
          <h3>Send us a message</h3>

          <div className="form-group">
            <label>Your name</label>
            <input type="text" placeholder="Jane Smith" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="e.g. Question about my report" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="Tell us how we can help…" />
          </div>
          <button className="form-submit">Send message</button>
        </div>
      </div>
    </div>
  )
}