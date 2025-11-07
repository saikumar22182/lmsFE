import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Inject responsive styles for the login page (only once)
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.getElementById('login-responsive-styles')) return
    const css = `
      .login-page-container { padding: 24px; }
      .login-form { width: 100%; max-width: 420px; }
      .login-form .social-button { display: inline-flex; align-items: center; gap: 8px; }

      @media (max-width: 520px) {
        .login-form { padding: 20px; box-shadow: none; border-radius: 8px; }
        .login-form .social-button { width: 100%; justify-content: center; }
        .signup-btn { display: inline-block; width: 100%; padding: 10px; margin-top: 8px; }
        .login-form { min-width: unset; }
      }
    `
    const s = document.createElement('style')
    s.id = 'login-responsive-styles'
    s.textContent = css
    document.head.appendChild(s)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: log credentials
    console.log('Login:', { email, password });
    alert('Login submitted!');
  };

  return (
    <div className="login-page-container" style={styles.container}>
      <form className="login-form" style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
        <div style={styles.dividerRow}>
          <hr style={styles.hr} />
          <span style={styles.or}>or</span>
          <hr style={styles.hr} />
        </div>
        <button type="button" className="social-button" style={styles.socialGoogle} onClick={() => window.location.href = 'mailto:'}>
          <span style={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 48 48" style={styles.icon} aria-hidden="true"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C36.62 2.36 30.7 0 24 0 14.82 0 6.48 5.48 2.44 13.44l8.06 6.27C12.7 13.13 17.89 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.9-2.18 5.36-4.65 7.02l7.2 5.6C43.98 37.36 46.1 31.44 46.1 24.5z"/><path fill="#FBBC05" d="M10.5 28.71c-1.13-3.36-1.13-6.97 0-10.33l-8.06-6.27C.7 16.36 0 20.07 0 24c0 3.93.7 7.64 2.44 11.09l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.7 0 12.62-2.21 16.92-6.03l-7.2-5.6c-2.01 1.35-4.59 2.13-7.72 2.13-6.11 0-11.3-3.63-13.5-8.8l-8.06 6.27C6.48 42.52 14.82 48 24 48z"/></g></svg>
          </span>
          Continue with Google
        </button>
        <button type="button" className="social-button" style={styles.socialLinkedin} onClick={() => window.open('https://www.linkedin.com', '_blank')}>
          <span style={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 32 32" style={styles.icon} aria-hidden="true"><path fill="#0A66C2" d="M27 27h-4.2v-6.2c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8V27H15V14h4v1.8c.6-.9 1.6-2.2 3.9-2.2 2.8 0 4.1 1.8 4.1 5.1V27zM7 12.3c-1.3 0-2.1-.9-2.1-2.1 0-1.2.8-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-.8 2.1-2.1 2.1zm2.1 14.7H4.9V14h4.2v13z"/></svg>
          </span>
          Continue with LinkedIn
        </button>
        <p style={styles.signupText}>Don't have an account?
          <button type="button" className="signup-btn" style={styles.signupButton} onClick={() => navigate('/signup')}> Sign Up</button>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
  },
  singin :{
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginLeft: 130,
    color:'white',
    background:'#2563eb',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 600,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 32,
    borderRadius: 10,
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    width: '100%',
    maxWidth: 420,
  },
  title: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 700,
    color: '#2563eb',
    textAlign: 'center',
  },
  input: {
    padding: '10px 12px',
    borderRadius: 6,
    border: '1px solid #d1d5db',
    fontSize: 15,
    outline: 'none',
  },
  button: {
    padding: '10px 0',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
  },
  dividerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    margin: '16px 0',
  },
  hr: {
    flex: 1,
    border: 'none',
    borderTop: '1px solid #e5e7eb',
    height: 1,
    background: 'none',
  },
  or: {
    color: '#6b7280',
    fontWeight: 500,
    fontSize: 14,
    padding: '0 8px',
  },
  socialGoogle: {
    padding: '10px 0',
    background: '#fff',
    color: 'black',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 100,
    cursor: 'pointer',
    marginBottom: 8,
  },
  socialLinkedin: {
    padding: '10px 0',
    background: '#fff',
    color: 'black',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 100,
    cursor: 'pointer',
  },
  iconWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: 8,
    verticalAlign: 'middle',
  },
  icon: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  signupText: {
    marginTop: 12,
    textAlign: 'center',
    color: '#6b7280'
  },
  signupButton: {
    marginLeft: 8,
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 600,
  }
};
