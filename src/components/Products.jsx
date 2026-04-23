import { useEffect, useRef } from 'react'
import './Products.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

const mailFeatures = [
  { icon: '📥', title: 'Smart Inbox Sync', desc: 'Fetch and sync emails automatically from any inbox provider with real-time data extraction.' },
  { icon: '📊', title: 'CSV Data Transformation', desc: 'Extract contacts with intelligent parsing — mobile numbers organized by country, ready to use.' },
  { icon: '✉️', title: 'Campaign Builder', desc: 'Send to individuals or bulk lists. Upload CSV files or pick from saved segments.' },
  { icon: '🎨', title: 'Template Studio', desc: 'Rich HTML editor + visual template builder. Save, reuse, and version your best-performing templates.' },
  { icon: '💬', title: 'WhatsApp Marketing', desc: 'Broadcast marketing campaigns via WhatsApp alongside email. Multi-channel from one dashboard.' },
  { icon: '📈', title: 'Campaign Analytics', desc: 'Track open rates, delivery stats, template performance, and full campaign timelines.' },
]

const salesFeatures = [
  { icon: '🔁', title: 'Full CRM Pipeline', desc: 'Visualize every deal stage with drag-and-drop kanban boards and pipeline health metrics.' },
  { icon: '🎯', title: 'Lead Scoring', desc: 'AI-powered scoring to prioritize the hottest leads. Focus your team where it matters most.' },
  { icon: '📞', title: 'Activity Tracking', desc: 'Log calls, emails, meetings and notes automatically. Never lose a touchpoint again.' },
  { icon: '🔔', title: 'Smart Reminders', desc: 'Automated follow-up reminders ensure no deal falls through the cracks.' },
  { icon: '👥', title: 'Team RBAC', desc: 'Role-based access controls for every user. Admins set permissions, reps stay focused.' },
  { icon: '📉', title: 'Revenue Forecasting', desc: 'Predictive dashboards showing pipeline value, close probability, and revenue projections.' },
]

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className="feature-card glass reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="feature-icon">{icon}</div>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-desc">{desc}</p>
    </div>
  )
}

export default function Products() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            entry.target.querySelectorAll('.reveal-left').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="products" ref={sectionRef}>
      {/* Background glow */}
      <div className="products-glow" />

      <div className="container">
        {/* Header */}
        <div className="products-header reveal">
          <div className="section-label">Our Products</div>
          <h2 className="products-h2 font-display">
            Two Platforms. <span className="text-gradient">One Ecosystem.</span>
          </h2>
          <p className="products-sub">
            Whether you're nurturing leads with campaigns or managing deals through your pipeline,<br />
            Fusion AI has purpose-built tools for every stage of your revenue journey.
          </p>
        </div>

        {/* MailFusion */}
        <div className="product-block">
          <div className="product-intro reveal-left">
            <div className="product-tag" style={{ background: 'rgba(168,85,247,0.12)', borderColor: 'rgba(168,85,247,0.3)', color: '#a855f7' }}>
              ✉️ MailFusion
            </div>
            <h3 className="product-name font-display">
              End-to-End<br /><span className="text-gradient">Email & WhatsApp Marketing</span>
            </h3>
            <p className="product-desc">
              From inbox sync to bulk campaigns, template creation to detailed analytics — MailFusion is your all-in-one marketing command center. Run campaigns across email and WhatsApp from a single dashboard.
            </p>
            <div className="product-highlights">
              {['Bulk email campaigns', 'WhatsApp broadcasts', 'CSV import & export', 'RBAC admin controls'].map(h => (
                <div key={h} className="product-highlight">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M19.6062 6.40349C20.1313 6.94175 20.1313 7.81426 19.6062 8.35224L10.588 17.5965C10.0629 18.1345 9.21195 18.1345 8.68684 17.5965L4.39383 13.1957C3.86872 12.6577 3.86872 11.7852 4.39383 11.2472C4.91867 10.709 5.76987 10.709 6.29472 11.2472L9.63728 14.6735L17.705 6.40349C18.2301 5.8655 19.0813 5.8655 19.6062 6.40349Z" fill="#a855f7"/>
                  </svg>
                  {h}
                </div>
              ))}
            </div>
            <a href="#" className="btn-primary product-cta">
              Explore MailFusion <ArrowIcon />
            </a>
          </div>

          <div className="product-features-grid">
            {mailFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 80} />
            ))}
          </div>
        </div>

        <div className="divider products-divider" />

        {/* SalesFusion */}
        <div className="product-block reverse">
          <div className="product-intro reveal-left">
            <div className="product-tag" style={{ background: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.3)', color: '#22d3ee' }}>
              🎯 SalesFusion
            </div>
            <h3 className="product-name font-display">
              Complete CRM &<br /><span style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sales Pipeline</span>
            </h3>
            <p className="product-desc">
              SalesFusion gives your team complete visibility and control over every deal in your pipeline. From first contact to closed-won, manage leads, activities, forecasts, and team access — all in one place.
            </p>
            <div className="product-highlights">
              {['Visual kanban pipeline', 'AI-powered lead scoring', 'Revenue forecasting', 'Team RBAC & permissions'].map(h => (
                <div key={h} className="product-highlight" style={{ '--dot-color': '#22d3ee' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M19.6062 6.40349C20.1313 6.94175 20.1313 7.81426 19.6062 8.35224L10.588 17.5965C10.0629 18.1345 9.21195 18.1345 8.68684 17.5965L4.39383 13.1957C3.86872 12.6577 3.86872 11.7852 4.39383 11.2472C4.91867 10.709 5.76987 10.709 6.29472 11.2472L9.63728 14.6735L17.705 6.40349C18.2301 5.8655 19.0813 5.8655 19.6062 6.40349Z" fill="#22d3ee"/>
                  </svg>
                  {h}
                </div>
              ))}
            </div>
            <a href="#" className="btn-primary product-cta" style={{ background: 'linear-gradient(135deg, #0891b2, #7c3aed)' }}>
              Explore SalesFusion <ArrowIcon />
            </a>
          </div>

          <div className="product-features-grid">
            {salesFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
