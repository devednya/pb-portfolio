import { Link } from 'react-router-dom'
import { getEventImageUrl } from '../utils/images'
import { formatDate } from '../utils/formatDate'
import './EventCard.css'

export default function EventCard({ event, featured = false }) {
  const imageUrl = getEventImageUrl(event.imageFolder)

  return (
    <Link
      to={`/events/${event.id}`}
      className={`event-card ${featured ? 'event-card--featured' : ''}`}
    >
      <div className="event-card__image-wrap">
        <img
          src={imageUrl}
          alt={event.title}
          className="event-card__image"
          loading="lazy"
        />
        {event.tags?.length > 0 && (
          <div className="event-card__tags">
            {event.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="event-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="event-card__content">
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__meta">
          {formatDate(event.date)} · {event.venue}
        </p>
        <p className="event-card__excerpt">{event.description}</p>
        <span className="event-card__link">View event →</span>
      </div>
    </Link>
  )
}
