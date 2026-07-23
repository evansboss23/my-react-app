import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-logo">
          <div className="form-logo-icon">📍</div>
          <span className="form-logo-text">Find<span>Back</span></span>
        </div>

        <h1 className="form-title">Create your account</h1>
        <p className="form-subtitle">Free forever. No credit card needed.</p>

        <div className="form-group">
          <label>Full name</label>
          <input type="text" name="name" placeholder="Jane Smith" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Min. 8 characters" />
        </div>

        <div className="form-group">
          <label>City or area</label>
          <input type="text" name="city" placeholder="e.g. Chicago, IL" />
        </div>

        <button type="submit" className="form-submit">Create free account</button>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 14, lineHeight: 1.5 }}>
          By signing up, you agree to our{' '}
          <a href="#" style={{ color: 'var(--blue)', textDecoration: 'none' }}>Terms of Service</a>
          {' '}and{' '}
          <a href="#" style={{ color: 'var(--blue)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>

        <div className="form-footer">
          Already have an account?{' '}
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  )
}