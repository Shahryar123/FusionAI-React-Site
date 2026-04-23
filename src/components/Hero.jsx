import { useEffect, useRef } from 'react'
import './Hero.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

const SparkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9.97075 5.57456L10.573 7.24706C11.242 9.10331 12.7038 10.5651 14.56 11.2341L16.2325 11.8363C16.3832 11.8911 16.3832 12.1048 16.2325 12.1588L14.56 12.7611C12.7038 13.4301 11.242 14.8918 10.573 16.7481L9.97075 18.4206C9.916 18.5713 9.70225 18.5713 9.64825 18.4206L9.046 16.7481C8.377 14.8918 6.91525 13.4301 5.059 12.7611L3.3865 12.1588C3.23575 12.1041 3.23575 11.8903 3.3865 11.8363L5.059 11.2341C6.91525 10.5651 8.377 9.10331 9.046 7.24706L9.64825 5.57456C9.70225 5.42306 9.916 5.42306 9.97075 5.57456Z" fill="#a855f7"/>
    <path d="M17.4993 1.55794L17.8045 2.40469C18.1435 3.34444 18.8838 4.08469 19.8235 4.42369L20.6703 4.72894C20.7468 4.75669 20.7468 4.86469 20.6703 4.89244L19.8235 5.19769C18.8838 5.53669 18.1435 6.27694 17.8045 7.21669L17.4993 8.06344C17.4715 8.13994 17.3635 8.13994 17.3358 8.06344L17.0305 7.21669C16.6915 6.27694 15.9513 5.53669 15.0115 5.19769L14.1648 4.89244C14.0883 4.86469 14.0883 4.75669 14.1648 4.72894L15.0115 4.42369C15.9513 4.08469 16.6915 3.34444 17.0305 2.40469L17.3358 1.55794C17.3635 1.48069 17.4723 1.48069 17.4993 1.55794Z" fill="#a855f7"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M19.6062 6.40349C20.1313 6.94175 20.1313 7.81426 19.6062 8.35224L10.588 17.5965C10.0629 18.1345 9.21195 18.1345 8.68684 17.5965L4.39383 13.1957C3.86872 12.6577 3.86872 11.7852 4.39383 11.2472C4.91867 10.709 5.76987 10.709 6.29472 11.2472L9.63728 14.6735L17.705 6.40349C18.2301 5.8655 19.0813 5.8655 19.6062 6.40349Z" fill="#a855f7"/>
  </svg>
)

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Animated particle background
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Glow orbs */}
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-glow glow-3" />

      <div className="container hero-content">
        <div className="hero-left">
          {/* Badge */}
          <div className="hero-badge animate-in" style={{ animationDelay: '0.1s' }}>
            <SparkIcon />
            <span>AI-Powered Revenue Platform</span>
          </div>

          {/* Headline */}
          <h1 className="hero-h1 animate-in font-display" style={{ animationDelay: '0.25s' }}>
            One Platform.<br />
            <span className="text-gradient">Infinite Growth.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-sub animate-in" style={{ animationDelay: '0.4s' }}>
            Fusion AI unifies your entire revenue engine—from outbound email campaigns and WhatsApp marketing to full CRM pipeline management. Two powerful products, one seamless ecosystem.
          </p>

          {/* Pill badges */}
          <div className="hero-pills animate-in" style={{ animationDelay: '0.5s' }}>
            <div className="hero-pill">
              <CheckIcon />
              <span>End-to-end automation</span>
            </div>
            <div className="hero-pill">
              <CheckIcon />
              <span>Real-time analytics</span>
            </div>
            <div className="hero-pill">
              <CheckIcon />
              <span>RBAC & team controls</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-ctas animate-in" style={{ animationDelay: '0.6s' }}>
            <a href="#products" className="btn-primary hero-cta-main">
              Explore Products <ArrowIcon />
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works
            </a>
          </div>

          {/* Partners */}
          <div className="hero-partners animate-in" style={{ animationDelay: '0.75s' }}>
            <span className="partners-label">Integrates with</span>
            <div className="partners-logos">
              {['Gmail', 'Outlook', 'HubSpot', 'WhatsApp', 'Salesforce'].map(p => (
                <div key={p} className="partner-chip">{p}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-right animate-in" style={{ animationDelay: '0.3s' }}>
          <div className="hero-visual glass">
            {/* Dashboard mockup */}
            <div className="dash-header">
              <div className="dash-dots">
                <span style={{ background: '#ff5f57' }}/>
                <span style={{ background: '#ffbd2e' }}/>
                <span style={{ background: '#28ca41' }}/>
              </div>
              <div className="dash-title">Fusion AI Dashboard</div>
            </div>

            <div className="dash-body">
              {/* Stats row */}
              <div className="dash-stats">
                {[
                  { label: 'Emails Sent', value: '124,830', delta: '+18%', color: '#a855f7' },
                  { label: 'Leads Converted', value: '3,241', delta: '+32%', color: '#22d3ee' },
                  { label: 'Revenue Pipeline', value: '$1.2M', delta: '+24%', color: '#34d399' },
                ].map(s => (
                  <div key={s.label} className="dash-stat-card glass">
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                    <div className="stat-delta" style={{ color: s.color }}>↑ {s.delta}</div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="dash-chart glass">
                <div className="chart-label">Campaign Performance</div>
                <svg width="100%" height="90" viewBox="0 0 300 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C30,65 60,40 90,45 C120,50 150,25 180,20 C210,15 240,30 270,18 L300,15 L300,90 L0,90 Z" fill="url(#chartGrad)"/>
                  <path d="M0,70 C30,65 60,40 90,45 C120,50 150,25 180,20 C210,15 240,30 270,18 L300,15" stroke="#a855f7" strokeWidth="2" fill="none"/>
                  <circle cx="180" cy="20" r="4" fill="#e100ff"/>
                </svg>
              </div>

              {/* Recent activity */}
              <div className="dash-activity">
                {[
                  { icon: '✉️', text: 'Campaign "Q4 Launch" sent', time: '2m ago', color: '#a855f7' },
                  { icon: '🎯', text: 'Lead "Acme Corp" qualified', time: '5m ago', color: '#22d3ee' },
                  { icon: '💬', text: 'WhatsApp blast delivered', time: '12m ago', color: '#34d399' },
                ].map((a, i) => (
                  <div key={i} className="activity-row">
                    <div className="activity-dot" style={{ background: a.color }}/>
                    <span className="activity-text">{a.text}</span>
                    <span className="activity-time">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="float-badge badge-1 glass">
              <SparkIcon />
              <span>98% Deliverability</span>
            </div>
            <div className="float-badge badge-2 glass">
              <CheckIcon />
              <span>Pipeline: $1.2M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
