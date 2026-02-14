import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-page__header">
        <ScrollReveal animation="fade-up">
          <h1 className="contact-page__title">Get in touch</h1>
          <p className="contact-page__intro">
            Have a question about our workshops or want to book a private event?
            Reach out, we'd love to hear from you.
          </p>
        </ScrollReveal>
      </header>

      <div className="contact-page__content">
        <ScrollReveal animation="fade-up" delay={100}>
          <section className="contact-page__section">
            <h2>Connect with us</h2>
          <ul className="contact-page__links">
            <li>
              <a
                href="https://www.instagram.com/artandcheers_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__link"
              >
                <svg className="contact-page__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @artandcheers_
              </a>
            </li>
            <li>
              <a href="mailto:palak.pb18@gmail.com" className="contact-page__link">
                <svg className="contact-page__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                palak.pb18@gmail.com
              </a>
            </li>
          </ul>
          <p className="contact-page__note">
            For bookings and event inquiries, DM us on Instagram or send an
            email. We typically respond within 24 to 48 hours.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <section className="contact-page__section">
            <h2>Upcoming events</h2>
          <p>
            Check our <Link to="/events">events page</Link> for workshop dates and
            details. You can also follow us on Instagram for the latest updates.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  )
}
