import { useState, useEffect, useRef } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What products are included in Fusion AI?',
    a: 'Fusion AI includes two purpose-built products: MailFusion — a complete email and WhatsApp marketing platform — and SalesFusion — a full CRM and sales pipeline tool. All plans include access to both products.',
  },
  {
    q: 'How does MailFusion handle bulk email sending?',
    a: 'MailFusion lets you upload CSV files, import from connected inboxes, or select saved segments. You can send to individuals or thousands simultaneously. Our template studio supports both rich HTML editing and a visual drag-and-drop builder. Full analytics track opens, clicks, and conversions per campaign.',
  },
  {
    q: 'Can I import contacts from a CSV and transform the data?',
    a: 'Yes — MailFusion automatically parses your CSV on import, organizes mobile numbers by country code, validates email addresses, and maps custom fields to your contact model. You can download transformed data back as a clean CSV anytime.',
  },
  {
    q: 'How does the WhatsApp marketing feature work?',
    a: 'MailFusion integrates directly with WhatsApp Business API. You can build broadcast campaigns, set template messages, and send to contact lists — all from the same dashboard as your email campaigns. Analytics track delivery, read rates, and responses.',
  },
  {
    q: 'What CRM features does SalesFusion include?',
    a: 'SalesFusion includes a full visual pipeline with drag-and-drop kanban boards, AI-powered lead scoring, activity logging (calls, emails, notes), automated follow-up reminders, revenue forecasting dashboards, and team-level RBAC with granular permissions per user role.',
  },
  {
    q: 'How does Role-Based Access Control (RBAC) work?',
    a: 'Admins can define custom roles and assign specific permissions to each — from read-only view access to full campaign creation and contact management. This applies across both MailFusion and SalesFusion, so your team sees exactly what they need.',
  },
  {
    q: 'What integrations does Fusion AI support?',
    a: 'Fusion AI integrates with Gmail, Outlook, HubSpot, Salesforce, WhatsApp Business API, and more. Our open API also allows custom integrations for enterprise customers. New integrations are added regularly based on user demand.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes! Every plan includes a 14-day free trial with full access to all features — no credit card required. You can explore both MailFusion and SalesFusion completely before committing to a paid plan.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-head" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-question">{q}</span>
        <div className="faq-icon">
          <span className="faq-line h" />
          <span className="faq-line v" />
        </div>
      </button>
      <div
        className="faq-body"
        ref={bodyRef}
        style={{ maxHeight: isOpen ? bodyRef.current?.scrollHeight + 'px' : '0' }}
      >
        <p className="faq-answer">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            entry.target.querySelectorAll('.faq-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 60)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="faq-header reveal">
          <div className="section-label">FAQ</div>
          <h2 className="faq-h2 font-display">
            Answers to <span className="text-gradient">Common Questions</span>
          </h2>
        </div>

        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
