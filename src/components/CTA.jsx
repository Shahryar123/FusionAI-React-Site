import { useEffect, useRef } from 'react'
import './CTA.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className="cta-card glass reveal">
          {/* Decorative orbs */}
          <div className="cta-orb orb-1" />
          <div className="cta-orb orb-2" />
          <div className="cta-orb orb-3" />

          {/* Grid lines decoration */}
          <div className="cta-grid-lines" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="cta-grid-v" style={{ left: `${(i + 1) * 16.66}%` }} />
            ))}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="cta-grid-h" style={{ top: `${(i + 1) * 25}%` }} />
            ))}
          </div>

          <div className="cta-content">
            <div className="section-label cta-label">Get Started</div>
            <h2 className="cta-h2 font-display">
              Stop Losing Revenue.<br />
              <span className="text-gradient">Start Closing More — Today.</span>
            </h2>
            <p className="cta-sub">
              Launch your first campaign this week.<br />
              Connect your CRM pipeline in hours. See results in days, not months.
            </p>

            <div className="cta-btns">
              <a href="#" className="btn-primary cta-btn-main">
                Start Free Trial <ArrowIcon />
              </a>
              <a href="#" className="btn-ghost">
                Schedule a Demo
              </a>
            </div>

            <div className="cta-trust">
              {[
                '✓ 14-day free trial',
                '✓ No credit card required',
                '✓ Setup in under 2 hours',
              ].map(t => (
                <span key={t} className="cta-trust-item">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
