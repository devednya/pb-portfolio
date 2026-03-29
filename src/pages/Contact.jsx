import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

const INSTAGRAM_URL = 'https://www.instagram.com/artandcheers_/'

const instagramHighlights = [
  {
    image: '/images/events/sip-and-paint/IMG-20250511-WA0021.jpg',
    title: 'Sip & paint',
    alt: 'Guests painting at a sip and paint evening',
  },
  {
    image: '/images/events/tote-bag-painting/IMG-20260213-WA0009.jpg',
    title: 'Tote bag workshops',
    alt: 'Creative tote bag painting at a workshop',
  },
  {
    image: '/images/gallery/IMG-20250216-WA0030.png',
    title: 'Community nights',
    alt: 'Group enjoying a sip and paint workshop',
  },
]

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
          <section className="contact-page__section" aria-labelledby="contact-connect-heading">
            <h2 id="contact-connect-heading">Connect with us</h2>

            <div className="contact-page__ig-block" aria-label="Instagram highlights">
              <p className="contact-page__ig-lead">
                Behind-the-scenes, event drops, and workshop vibes live on Instagram. Tap a
                photo to open our profile.
              </p>
              <div className="contact-page__ig-grid">
                {instagramHighlights.map((item, i) => (
                  <ScrollReveal key={item.title} animation="fade-up" delay={80 + i * 70}>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-page__ig-card"
                      aria-label={`${item.title} — view on Instagram (opens in a new tab)`}
                    >
                      <span className="contact-page__ig-card-media">
                        <img src={item.image} alt="" loading="lazy" />
                        <span className="contact-page__ig-card-shade" aria-hidden />
                        <span className="contact-page__ig-card-hover" aria-hidden>
                          <span className="contact-page__ig-card-cta">
                            <svg
                              className="contact-page__ig-card-ig-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            Open Instagram
                          </span>
                        </span>
                      </span>
                      <span className="contact-page__ig-card-caption">{item.title}</span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
              <div className="contact-page__ig-cta-wrap">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__ig-profile-cta"
                >
                  <svg
                    className="contact-page__icon contact-page__icon--ig-cta"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Follow @artandcheers_
                  <span className="contact-page__ig-profile-cta-arrow" aria-hidden>
                    →
                  </span>
                </a>
              </div>
            </div>

            <p className="contact-page__note">
              For bookings and event inquiries, DM us on Instagram. We typically
              respond within 24 to 48 hours.
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
