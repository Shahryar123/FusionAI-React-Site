import { useEffect, useRef } from 'react'
import './HowItWorks.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

const steps = [
  {
    num: '01',
    title: 'Connect Your Tools',
    desc: 'Integrate your email inbox, CRM, or upload contact lists. Fusion AI connects to Gmail, Outlook, HubSpot, Salesforce and more in minutes.',
  },
  {
    num: '02',
    title: 'Define Your Audience',
    desc: 'Segment contacts intelligently. Import CSVs with automatic data transformation — phone numbers sorted by country, emails validated on import.',
  },
  {
    num: '03',
    title: 'Build Your Campaign',
    desc: 'Design stunning email templates with our drag-and-drop editor or raw HTML. Schedule campaigns, configure WhatsApp blasts, and set cadences.',
  },
  {
    num: '04',
    title: 'Launch & Automate',
    desc: 'Hit send with confidence. Bulk campaigns run automatically. The CRM tracks every deal touchpoint with no manual data entry required.',
  },
  {
    num: '05',
    title: 'Analyze & Optimize',
    desc: 'Real-time dashboards show open rates, conversions, pipeline velocity, and revenue forecasts. A/B test and scale what works.',
  },
]

export default function HowItWorks() {
  const wrapperRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current
    if (!wrapper || !container) return

    const handleScroll = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top
      const wrapperHeight = wrapper.offsetHeight
      const windowH = window.innerHeight

      const scrollable = wrapperHeight - windowH
      const progress = Math.max(0, Math.min(1, -wrapperTop / scrollable))

      const scrollWidth = container.scrollWidth - container.offsetWidth
      container.scrollLeft = progress * scrollWidth
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="how-it-works" className="hiw-outer">
      <div className="hiw-sticky-wrapper" ref={wrapperRef}>
        <div className="hiw-sticky">
          <div className="hiw-scroll-container" ref={containerRef}>
            <div className="hiw-content">
              {/* Left intro panel */}
              <div className="hiw-intro">
                <div className="section-label" style={{ color: '#ddb8ff', borderColor: 'rgba(221,184,255,0.3)', background: 'rgba(124,58,237,0.1)' }}>
                  How It Works
                </div>
                <h2 className="hiw-h2 font-display">
                  Your Path from<br />
                  <span className="text-gradient">Setup to Revenue</span>
                </h2>
                <p className="hiw-sub">
                  From connecting your first tool to closing your first AI-assisted deal — Fusion AI gets you there fast.
                </p>
              </div>

              {/* Step cards */}
              {steps.map((s, i) => (
                <div key={s.num} className="hiw-card glass">
                  <div className="hiw-step-num">{s.num}</div>
                  <div className="hiw-card-body">
                    <h3 className="hiw-card-title font-display">{s.title}</h3>
                    <p className="hiw-card-desc">{s.desc}</p>
                  </div>
                </div>
              ))}

              {/* Final CTA card */}
              <div className="hiw-final-card">
                <div className="hiw-final-glow" />
                <div className="section-label" style={{ color: '#ddb8ff', borderColor: 'rgba(221,184,255,0.3)', background: 'rgba(124,58,237,0.1)' }}>
                  ?
                </div>
                <h2 className="hiw-final-h2 font-display">
                  Ready to Automate<br />
                  <span className="text-gradient">Your Entire Revenue Engine?</span>
                </h2>
                <a href="#" className="btn-primary">
                  Start Free Today <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
