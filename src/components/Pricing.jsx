import { useState, useEffect, useRef } from 'react'
import './Pricing.css'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path d="M19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM-1 10V11H19V10V9H-1V10Z" fill="currentColor"/>
  </svg>
)

const CheckIcon = ({ color = '#a855f7' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M19.6062 6.40349C20.1313 6.94175 20.1313 7.81426 19.6062 8.35224L10.588 17.5965C10.0629 18.1345 9.21195 18.1345 8.68684 17.5965L4.39383 13.1957C3.86872 12.6577 3.86872 11.7852 4.39383 11.2472C4.91867 10.709 5.76987 10.709 6.29472 11.2472L9.63728 14.6735L17.705 6.40349C18.2301 5.8655 19.0813 5.8655 19.6062 6.40349Z" fill={color}/>
  </svg>
)

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for small teams getting started with marketing automation.',
    price: { monthly: 49, yearly: 39 },
    tag: null,
    color: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.1)',
    features: [
      '5,000 emails / month',
      '1 connected inbox',
      'Basic email templates',
      'CSV import & export',
      'Campaign analytics',
      '2 team members',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'ghost',
  },
  {
    name: 'Growth',
    desc: 'For growing teams that need both email marketing and CRM pipeline.',
    price: { monthly: 149, yearly: 119 },
    tag: 'Most Popular',
    color: 'rgba(124,58,237,0.12)',
    border: 'rgba(168,85,247,0.4)',
    features: [
      '50,000 emails / month',
      '5 connected inboxes',
      'Full template studio (HTML + visual)',
      'WhatsApp campaign broadcasts',
      'SalesFusion CRM access',
      'Lead scoring & pipeline',
      '10 team members + RBAC',
      'Advanced analytics dashboards',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaStyle: 'primary',
  },
  {
    name: 'Enterprise',
    desc: 'Unlimited scale with dedicated support and custom integrations.',
    price: { monthly: null, yearly: null },
    tag: null,
    color: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.08)',
    features: [
      'Unlimited emails',
      'Unlimited inboxes',
      'All MailFusion features',
      'All SalesFusion features',
      'Unlimited team members',
      'Custom integrations (API)',
      'Dedicated account manager',
      'SLA & compliance support',
      'White-label options',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'ghost',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            entry.target.querySelectorAll('.price-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="pricing" ref={sectionRef}>
      <div className="pricing-glow" />

      <div className="container">
        {/* Header */}
        <div className="pricing-header reveal">
          <div className="section-label">Pricing</div>
          <h2 className="pricing-h2 font-display">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="pricing-sub">
            All plans include both MailFusion and SalesFusion. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle">
            <span className={!yearly ? 'toggle-active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${yearly ? 'on' : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle yearly billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={yearly ? 'toggle-active' : ''}>
              Yearly <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`price-card glass ${plan.tag ? 'is-featured' : ''}`}
              style={{
                background: plan.color,
                borderColor: plan.border,
              }}
            >
              {plan.tag && (
                <div className="price-tag">{plan.tag}</div>
              )}

              <div className="price-name font-display">{plan.name}</div>
              <p className="price-desc">{plan.desc}</p>

              <div className="price-amount">
                {plan.price.monthly ? (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-number font-display">
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="price-period">/mo</span>
                  </>
                ) : (
                  <span className="price-custom font-display">Custom</span>
                )}
              </div>

              <div className="divider" style={{ margin: '24px 0' }} />

              <ul className="price-features">
                {plan.features.map(f => (
                  <li key={f} className="price-feature">
                    <CheckIcon color={plan.tag ? '#a855f7' : 'rgba(255,255,255,0.5)'} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`price-cta ${plan.ctaStyle === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta} <ArrowIcon />
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note reveal">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
