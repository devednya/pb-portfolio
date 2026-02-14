import { useParams, Link } from 'react-router-dom'
import { getEventById } from '../data/events'
import { getEventImageUrl } from '../utils/images'
import { formatDate } from '../utils/formatDate'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './EventDetail.css'

export default function EventDetail() {
  const { eventId } = useParams()
  const event = getEventById(eventId)

  if (!event) {
    return (
      <div className="event-detail event-detail--not-found">
        <h1>Event not found</h1>
        <Link to="/events">Back to events</Link>
      </div>
    )
  }

  const imageUrl = getEventImageUrl(event.imageFolder)

  return (
    <article className="event-detail">
      <div className="event-detail__hero">
        <img
          src={imageUrl}
          alt={event.title}
          className="event-detail__image"
        />
        <div className="event-detail__hero-overlay">
          <h1 className="event-detail__title">{event.title}</h1>
          <p className="event-detail__meta">
            {formatDate(event.date)} · {event.time} · {event.venue}
          </p>
        </div>
      </div>

      <div className="event-detail__content">
        <ScrollReveal animation="fade-up">
          <div className="event-detail__main">
            {event.tags?.length > 0 && (
              <div className="event-detail__tags">
                {event.tags.map((tag) => (
                  <span key={tag} className="event-detail__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="event-detail__description">{event.description}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" delay={100}>
          <aside className="event-detail__sidebar">
          <div className="event-detail__card">
            <h3>Details</h3>
            <dl>
              <dt>Date</dt>
              <dd>{formatDate(event.date)}</dd>
              <dt>Time</dt>
              <dd>{event.time}</dd>
              <dt>Venue</dt>
              <dd>{event.venue}</dd>
            </dl>
            {event.bookingUrl ? (
              <Button href={event.bookingUrl} variant="primary">
                Book this event
              </Button>
            ) : (
              <Button to="/contact" variant="primary">
                Get in touch to book
              </Button>
            )}
          </div>
          </aside>
        </ScrollReveal>
      </div>

      <ScrollReveal animation="fade-in">
        <div className="event-detail__back">
          <Link to="/events">← Back to events</Link>
        </div>
      </ScrollReveal>
    </article>
  )
}
