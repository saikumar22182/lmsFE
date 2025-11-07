import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>
          <strong style={styles.colors}>LMS Demo</strong>
          <div style={{ color: '#6b7280', marginTop: 6 }}>© {new Date().getFullYear()} Demo Inc.</div>
        </div>

        <div style={styles.links} aria-hidden="true">
          <a style={styles.link} href="#">About</a>
          <a style={styles.link} href="#">Contact</a>
          <a style={styles.link} href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: { marginTop: 40, borderTop: '1px solid #000305ff', background: '#000000ff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  links: { display: 'flex', gap: 12 },
  colors: {color: 'white'},
  link: { color: '#fcfdffff', textDecoration: 'none', fontSize: 14 },
}

export default Footer
