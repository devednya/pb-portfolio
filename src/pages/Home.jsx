import { Link } from 'react-router-dom'
import HeroSpotlight from '../components/HeroSpotlight'
import CTABlock from '../components/CTABlock'
import EventCard from '../components/EventCard'
import ScrollReveal from '../components/ScrollReveal'
import { getUpcomingEvents } from '../data/events'
import './Home.css'

export default function Home() {
  const events = getUpcomingEvents()
  const [featured, ...rest] = events

  return (
    <div className="home">
      <HeroSpotlight />
      <ScrollReveal animation="fade-up">
        <CTABlock />
      </ScrollReveal>
      <section className="home__events">
        <div className="home__events-inner">
          <ScrollReveal animation="fade-up">
            <h2 className="home__section-title">Upcoming workshops</h2>
          </ScrollReveal>
          {events.length > 0 ? (
            <div className={`home__grid ${rest.length === 0 ? 'home__grid--single' : ''}`}>
              {featured && (
                <ScrollReveal animation="slide-right" delay={0}>
                  <div className="home__grid-featured">
                    <EventCard event={featured} featured />
                  </div>
                </ScrollReveal>
              )}
              <div className="home__grid-cards">
                {rest.map((event, i) => (
                  <ScrollReveal key={event.id} animation="fade-up" delay={i * 80}>
                    <EventCard event={event} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ) : (
            <ScrollReveal animation="fade-in">
              <p className="home__empty">
                No upcoming workshops right now. Check back soon or{' '}
                <Link to="/contact">get in touch</Link> to stay updated.
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  )
}
