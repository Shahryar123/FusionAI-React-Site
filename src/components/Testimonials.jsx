import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    quote: "MailFusion transformed our email strategy. We went from 15% open rates to over 38% within a month. The template studio is brilliant.",
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "GrowthStack",
    stat1: { val: '38%', label: 'Open rate achieved' },
    stat2: { val: '3.2x', label: 'ROI on campaigns' },
    stat3: { val: '<2hr', label: 'Setup time' },
  },
  {
    quote: "SalesFusion's pipeline view gave our entire team visibility we never had before. We closed 40% more deals in Q3 just by knowing where to focus.",
    name: "David Okonkwo",
    role: "VP of Sales",
    company: "NovaTech",
    stat1: { val: '+40%', label: 'More deals closed' },
    stat2: { val: '0', label: 'Leads lost in pipeline' },
    stat3: { val: '24/7', label: 'Automated follow-ups' },
  },
  {
    quote: "The WhatsApp + email combo is a game changer. One dashboard, two channels, and our campaign response rate doubled overnight.",
    name: "Priya Sharma",
    role: "Digital Campaign Manager",
    company: "Brandwave",
    stat1: { val: '2x', label: 'Response rate increase' },
    stat2: { val: '85k+', label: 'Contacts managed' },
    stat3: { val: '98%', label: 'Delivery rate' },
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a855f7">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const t = testimonials[active]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-glow" />

      <div className="container">
        <div className="testimonials-header reveal">
          <div className="section-label">Case Studies</div>
          <h2 className="testimonials-h2 font-display">
            Results That <span className="text-gradient">Speak Loudly</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {/* Left: stats */}
          <div className="t-stats reveal">
            <div className="t-stat-card glass">
              <div className="t-stat-val font-display">{t.stat1.val}</div>
              <p className="t-stat-label">{t.stat1.label}</p>
            </div>
            <div className="t-stat-card glass is-wide">
              <div className="t-stat-val font-display">{t.stat2.val}</div>
              <p className="t-stat-label">{t.stat2.label}</p>
            </div>
            <div className="t-stat-card glass">
              <div className="t-stat-val font-display">{t.stat3.val}</div>
              <p className="t-stat-label">{t.stat3.label}</p>
            </div>
          </div>

          {/* Center: main card */}
          <div className="t-main-card glass reveal" key={active}>
            <div className="t-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <blockquote className="t-quote">"{t.quote}"</blockquote>
            <div className="t-author">
              <div className="t-avatar">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}, <span>{t.company}</span></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="t-nav">
              <button
                className="t-nav-btn"
                onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor" transform="scale(-1,1) translate(-20,0)"/>
                </svg>
              </button>
              <div className="t-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`t-dot ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
              <button
                className="t-nav-btn"
                onClick={() => setActive((active + 1) % testimonials.length)}
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
