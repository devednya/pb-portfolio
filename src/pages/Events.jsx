import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import ScrollReveal from '../components/ScrollReveal'
import { getUpcomingEvents, getPastEvents } from '../data/events'
import './Events.css'

export default function Events() {
  const upcoming = getUpcomingEvents()
  const past = getPastEvents()

  return (
    <div className="events-page">
      <header className="events-page__header">
        <ScrollReveal animation="fade-up">
          <h1 className="events-page__title">Workshops & events</h1>
          <p className="events-page__intro">
            Join us for art workshops designed for adults to relax, create, and
            connect. No experience required.
          </p>
        </ScrollReveal>
      </header>

      {upcoming.length > 0 && (
        <section className="events-page__section">
          <ScrollReveal animation="fade-up">
            <h2 className="events-page__section-title">Upcoming</h2>
          </ScrollReveal>
          <div className="events-page__grid">
            {upcoming.map((event, i) => (
              <ScrollReveal key={event.id} animation="fade-up" delay={i * 60}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="events-page__section">
          <ScrollReveal animation="fade-up">
            <h2 className="events-page__section-title">Past events</h2>
          </ScrollReveal>
          <div className="events-page__grid">
            {past.map((event, i) => (
              <ScrollReveal key={event.id} animation="fade-up" delay={i * 60}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {upcoming.length === 0 && past.length === 0 && (
        <ScrollReveal animation="fade-in">
          <p className="events-page__empty">
            No events at the moment. Check back soon or{' '}
            <Link to="/contact">get in touch</Link> to stay updated.
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
