import { useEffect, useRef } from 'react'
import './Stats.css'

const stats = [
  { value: '10M+', label: 'Emails delivered monthly', sub: 'With 98%+ deliverability rate' },
  { value: '0', label: 'Leads lost to slow follow-up', sub: 'Automated reminders catch everything' },
  { value: '3x', label: 'Faster pipeline closure', sub: 'vs. manual CRM processes' },
  { value: '24/7', label: 'Always-on automation', sub: 'Campaigns run while you sleep' },
]

export default function Stats() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.stat-block')
            cards?.forEach((c, i) => {
              setTimeout(() => c.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-bg-line" />

      <div className="container">
        <div className="stats-top reveal">
          <div className="section-label">Key Impact</div>
          <div className="stats-heading-wrap">
            <h2 className="stats-heading font-display">The Numbers</h2>
            <span className="stats-heading-accent font-display">, Speak for Themselves</span>
          </div>
        </div>
      </div>

      <div className="stats-grid-outer">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`stat-block glass ${i % 2 === 0 ? 'stat-light' : 'stat-dark'}`}
            ref={el => cardsRef.current[i] = el}
          >
            <div className="stat-block-number font-display">{s.value}</div>
            <p className="stat-block-label">{s.label}</p>
            <p className="stat-block-sub">{s.sub}</p>
            <div className="stat-block-glow" />
          </div>
        ))}
      </div>
    </section>
  )
}
