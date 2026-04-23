import './Footer.css'

const footerLinks = {
  Products: [
    { label: 'MailFusion', href: '#' },
    { label: 'SalesFusion', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
    { label: 'Data Processing', href: '#' },
  ],
}

const SocialIcon = ({ type }) => {
  const paths = {
    linkedin: 'M14.8189 0H1.18111C0.528 0 0 0.528 0 1.18111V14.8189C0 15.472 0.528 16 1.18111 16H14.8189C15.472 16 16 15.472 16 14.8189V1.18111C16 0.528 15.472 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C2.74 4.93 2.07 4.26 2.07 3.435C2.07 2.61 2.74 1.94 3.56445 1.94C4.389 1.94 5.059 2.61 5.059 3.435C5.059 4.26 4.389 4.93 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z',
    twitter: 'M10.6303 15.3307L6.9307 10.0575L2.29924 15.3307H0.339844L6.06139 8.81812L0.339844 0.664062H5.37047L8.85732 5.63407L13.2262 0.664062H15.1856L9.72954 6.87505L15.6609 15.3307H10.6303ZM12.8123 13.8441H11.4932L3.14541 2.15073H4.46474L7.80808 6.83284L8.38623 7.64531L12.8123 13.8441Z',
    github: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z',
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d={paths[type]} fillRule={type === 'github' ? 'evenodd' : 'nonzero'} clipRule={type === 'github' ? 'evenodd' : 'nonzero'}/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="container">
        <div className="footer-card glass">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7c3aed"/>
                      <stop offset="1" stopColor="#e100ff"/>
                    </linearGradient>
                  </defs>
                  <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" fill="url(#footerLogoGrad)" opacity="0.2"/>
                  <path d="M18 3L32 11V25L18 33L4 25V11L18 3Z" stroke="url(#footerLogoGrad)" strokeWidth="1.5" fill="none"/>
                  <circle cx="18" cy="18" r="4" fill="url(#footerLogoGrad)"/>
                  <line x1="18" y1="7" x2="18" y2="14" stroke="url(#footerLogoGrad)" strokeWidth="1.5"/>
                  <line x1="18" y1="22" x2="18" y2="29" stroke="url(#footerLogoGrad)" strokeWidth="1.5"/>
                </svg>
                <span className="footer-logo-text font-display">Fusion<span className="text-gradient">AI</span></span>
              </div>
              <p className="footer-tagline">
                End-to-end marketing and sales automation for modern revenue teams.
              </p>
              <div className="footer-socials">
                {[
                  { type: 'linkedin', href: '#' },
                  { type: 'twitter', href: '#' },
                  { type: 'github', href: '#' },
                ].map(s => (
                  <a key={s.type} href={s.href} className="social-icon" aria-label={s.type}>
                    <SocialIcon type={s.type} />
                  </a>
                ))}
              </div>
              <div className="footer-contact">
                <a href="mailto:hello@fusionai.io" className="footer-email">hello@fusionai.io</a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="footer-col">
                <div className="footer-col-title">{section}</div>
                {links.map(l => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
              </div>
            ))}
          </div>

          <div className="divider footer-divider" />

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 Fusion AI Corp. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="#" className="footer-link-sm">Privacy</a>
              <a href="#" className="footer-link-sm">Terms</a>
              <a href="#" className="footer-link-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
