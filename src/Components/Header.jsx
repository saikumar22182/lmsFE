import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onSearch, onLogin }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMobileOpen) return
      const target = e.target
      if (mobileRef.current && !mobileRef.current.contains(target) && !target.closest('.hamburger')) {
        setIsMobileOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [isMobileOpen])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && isMobileOpen) setIsMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isMobileOpen])

  const submitSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
    // fallback behavior for development
    console.log("Search:", query);
  };

  // Inject responsive CSS for header once
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.getElementById('header-responsive-styles')) return
    const css = `
      .header { position: relative; }
      .hamburger { display: none; border: none; background: transparent; cursor: pointer; }
      .mobile-menu { display: none; }

      @media (max-width: 900px) {
        .search-form { display: none !important; }
        .nav-links { display: none !important; }
        .right-area { display: none !important; }
        .hamburger { display: inline-flex !important; }
        .mobile-menu {
          display: block;
          position: absolute;
          left: 12px;
          right: 12px;
          top: calc(100% + 8px);
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-radius: 8px;
          z-index: 9999;
          padding: 12px;
        }
        .mobile-menu .navButton { display: block; width: 100%; text-align: left; padding: 10px 12px; border-radius: 6px; margin-bottom: 6px; }
        .mobile-search-input { width: 100%; padding: 10px 12px; border-radius: 6px; border: 1px solid #d1d5db; margin-bottom: 8px; }
        .mobile-login { width: 100%; padding: 10px 12px; border-radius: 6px; background: #10B981; color: #fff; border: none; font-weight: 600; }
      }
    `
    const s = document.createElement('style')
    s.id = 'header-responsive-styles'
    s.textContent = css
    document.head.appendChild(s)
  }, [])

  return (
  <header className="header" style={{ ...styles.header, position: 'relative' }}>
      <div style={styles.left}>
        <button 
          onClick={() => navigate("/")} 
          style={{ ...styles.title, border: 'none', background: 'none', cursor: 'pointer' }}
        >
          Learning Management System
        </button>
      </div>

      <form onSubmit={submitSearch} className="search-form" style={styles.searchForm} role="search" aria-label="Site search">
        <input
          aria-label="Search"
          placeholder= { "Search courses, users..."   } 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>

      <div className="nav-links" style={styles.navLinks}>
        <button
          onClick={() => navigate("/forBusiness")}
          style={styles.navButton}
          onMouseEnter={(e) => (e.target.style.color = "blue")}
          onMouseLeave={(e) => (e.target.style.color = "black")}
        >
          For Business
        </button>
        <button
          onClick={() => navigate("/resources")}
          style={styles.navButton}
          onMouseEnter={(e) => (e.target.style.color = "blue")}
          onMouseLeave={(e) => (e.target.style.color = "black")}
        >
          Resources
        </button>
      </div>

      <div className="right-area" style={styles.right}>
        <div ref={dropdownRef} style={styles.dropdown}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={open}
            style={styles.moreButton}
          >
            More ▾
          </button>
          {open && (
            <ul style={styles.menu} role="menu" aria-label="More options">
              <li role="none">
                <button role="menuitem" style={styles.menuItem} onClick={() => { console.log("Navigate: Profile"); setOpen(false); }}>
                  Profile
                </button>
              </li>
              <li role="none">
                <button role="menuitem" style={styles.menuItem} onClick={() => { console.log("Navigate: Settings"); setOpen(false); }}>
                  Settings
                </button>
              </li>
              <li role="none">
                <button role="menuitem" style={styles.menuItem} onClick={() => { console.log("Navigate: Help"); setOpen(false); }}>
                  Help
                </button>
              </li>
            </ul>
          )}
        </div>

        <button style={styles.loginButton} onClick={() => navigate('/loginPage')}>
          Login
        </button>
      </div>

      {/* Hamburger for small screens */}
      <button aria-label="Open menu" ref={hamburgerRef} className="hamburger" style={styles.hamburger} onClick={() => setIsMobileOpen(v => !v)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18M3 12h18M3 18h18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Mobile menu (revealed on small screens) */}
      {isMobileOpen && (
        <div ref={mobileRef} className="mobile-menu" role="dialog" aria-label="Mobile menu">
          <form onSubmit={(e) => { submitSearch(e); setIsMobileOpen(false); }} style={{ marginBottom: 8 }}>
            <input className="mobile-search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses, users..." aria-label="Search" />
          </form>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="navButton" onClick={() => { navigate('/forBusiness'); setIsMobileOpen(false); }} style={{ ...styles.navButton, marginBottom: 6 }}>For Business</button>
            <button className="navButton" onClick={() => { navigate('/resources'); setIsMobileOpen(false); }} style={{ ...styles.navButton, marginBottom: 6 }}>Resources</button>
            <button onClick={() => { navigate('/loginPage'); setIsMobileOpen(false); }} className="mobile-login" style={{ ...styles.loginButton, marginTop: 6 }}>Login</button>
          </div>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "10px 16px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",

    justifyContent: "space-between",
    // zIndex: 10,
  },
  left: { display: "flex", alignItems: "center", gap: 12 },
  logoWrap: { display: "flex", alignItems: "center" },
  logo: { display: "block" },
  title: { fontSize: 22, fontWeight: 700, color: "skyblue" },

  searchForm: {
    flex: 1,
    maxWidth: 520,
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: 16,
  },
  searchButton: {
    padding: "10px 14px",
    background: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
  },

  navLinks: {
    display: "flex",
    gap: 16,
    alignItems: "center",
  },
  navButton: {
    padding: "8px 12px",
    background: "transparent",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 500,
    color: "#4b5563",
    transition: "color 0.2s",
    ":hover": {
      color: "#2563EB",
    }
  },
  right: { display: "flex", gap: 12, alignItems: "center" },
  moreButton: {
    padding: "8px 10px",
    background: "transparent",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    cursor: "pointer",
  },
  dropdown: { position: "relative" },
  menu: {
    position: "absolute",
    right: 0,
    marginTop: 8,
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    padding: 8,
    minWidth: 140,
    listStyle: "none",
    zIndex: 9999,
  },
  menuItem: {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "8px 10px",
    background : "#ffffffff",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
  },

  loginButton: {
    padding: "10px 14px",
    background: "#10B981",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
  },
  logo: { display: "block", transform: 'scale(1.0)' },
};

export default Header;