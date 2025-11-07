import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required'
    else if (!/^\+?[0-9]{7,15}$/.test(form.mobile)) e.mobile = 'Enter a valid mobile number'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    console.log('SignUp submitted', form)
    alert('Account created (demo). Redirecting to login page.')
    navigate('/loginPage')
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        
        <h2 style={styles.title}>Create an account</h2>

        {/* ✅ Row → now responsive */}
        <div className="row" style={styles.row}>
          <div className="col" style={styles.col}>
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.firstName && <div style={styles.error}>{errors.firstName}</div>}
          </div>

          <div className="col" style={styles.col}>
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.lastName && <div style={styles.error}>{errors.lastName}</div>}
          </div>
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}

        <input
          name="mobile"
          placeholder="Mobile number"
          value={form.mobile}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.mobile && <div style={styles.error}>{errors.mobile}</div>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}

        <button type="submit" style={styles.button}>Create Account</button>

        <p style={styles.small}>
          Already have an account?
          <button
            type="button"
            onClick={() => navigate('/loginPage')}
            style={styles.linkButton}
          >
            Sign in
          </button>
        </p>
      </form>

      {/* ✅ Responsive CSS Fixes */}
      <style>{`
        @media (max-width: 768px) {
          .row {
            flex-direction: column !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .col {
            width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          form {
            padding: 20px !important;
          }
          input {
            font-size: 14px !important;
          }
          button {
            font-size: 15px !important;
          }
        }
      `}</style>

    </div>
  )
}

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
    padding: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 28,
    borderRadius: 10,
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    width: '100%',
    maxWidth: 520,
  },
  title: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 700,
    color: '#111827',
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
    marginTop: 8,
  },
  small: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#2563eb',
    cursor: 'pointer',
    fontWeight: 600,
    marginLeft: 4
  },
  row: {
    display: 'flex',
    gap: 12,
    width: "100%",
  },
  col: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: '#dc2626',
    fontSize: 13,
    marginTop: 6,
  }
}
