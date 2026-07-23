import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-logo">
          <div className="form-logo-icon">📍</div>
          <span className="form-logo-text">Find<span>Back</span></span>
        </div>

        <h1 className="form-title">Welcome back</h1>
        <p className="form-subtitle">Sign in to manage your reports and alerts</p>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="••••••••" />
        </div>

        <Link to="#" className="forgot-link">Forgot your password?</Link>

        <button type="submit" className="form-submit">Sign in</button>

        <div className="form-divider">
          <span /><p>or</p><span />
        </div>

        <button type="button" className="form-submit" style={{ background: '#fff', color: 'var(--navy)', border: '1.5px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)', marginTop: 0 }}>
          🔵 &nbsp;Continue with Google
        </button>

        <div className="form-footer">
          Don't have an account?{' '}
          <Link to="/signup">Create one free</Link>
        </div>
      </div>
    </div>
  )
}