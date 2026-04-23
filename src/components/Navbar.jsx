import { useState, useEffect } from 'react'
import './Navbar.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="Fusion AI Home">
            <div className="logo-mark">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed"/>
                    <stop offset="1" stopColor="#e100ff"/>
                  </linearGradient>
                </defs>
                <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill="url(#logoGrad)" opacity="0.2"/>
                <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none"/>
                <circle cx="18" cy="18" r="4" fill="url(#logoGrad)"/>
                <line x1="18" y1="7" x2="18" y2="14" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <line x1="18" y1="22" x2="18" y2="29" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <line x1="8" y1="12" x2="14" y2="15.5" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <line x1="22" y1="20.5" x2="28" y2="24" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <line x1="28" y1="12" x2="22" y2="15.5" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <line x1="14" y1="20.5" x2="8" y2="24" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className="logo-text font-display">Fusion<span className="text-gradient">AI</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-links">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="navbar-actions">
            <a href="#" className="btn-ghost nav-btn">Login</a>
            <a href="#" className="btn-primary nav-btn">
              Get Started <ArrowIcon />
            </a>
          </div>

          {/* Burger */}
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-actions">
          <a href="#" className="btn-ghost">Login</a>
          <a href="#" className="btn-primary">Get Started <ArrowIcon /></a>
        </div>
      </div>
    </header>
  )
}
