import ScrollReveal from '../components/ScrollReveal'
import './Gallery.css'

// Images from assets: Mental health workshop, sip and paint workshop, totebag painting
const galleryItems = [
  { id: 1, image: '/images/events/mental-health-workshop/IMG-20250216-WA0023.jpg', alt: 'A space for feelings' },
  { id: 2, image: '/images/events/mental-health-workshop/IMG-20250216-WA0034.jpg', alt: 'A space for feelings' },
  { id: 3, image: '/images/events/sip-and-paint/IMG-20250216-WA0052.jpg', alt: 'Sip and paint' },
  { id: 4, image: '/images/events/sip-and-paint/IMG-20250511-WA0021.jpg', alt: 'Sip and paint' },
  { id: 5, image: '/images/events/tote-bag-painting/IMG-20260213-WA0003.jpg', alt: 'Tote bag painting' },
  { id: 6, image: '/images/events/tote-bag-painting/IMG-20260213-WA0009.jpg', alt: 'Tote bag painting' },
  { id: 7, image: '/images/gallery/IMG-20260213-WA0004.png', alt: 'Workshop canvases and message cards' },
  { id: 8, image: '/images/gallery/IMG-20260213-WA0010.png', alt: 'Picasso color theory activity' },
  { id: 9, image: '/images/gallery/IMG-20250216-WA0049.png', alt: 'Painting panda with balloons' },
  { id: 10, image: '/images/gallery/IMG-20250216-WA0030.png', alt: 'Sip and paint workshop' },
]

export default function Gallery() {
  return (
    <div className="gallery-page">
      <header className="gallery-page__header">
        <ScrollReveal animation="fade-up">
          <h1 className="gallery-page__title">Gallery</h1>
          <p className="gallery-page__intro">
            A glimpse of our workshops and community. Follow us on{' '}
            <a
              href="https://www.instagram.com/artandcheers_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{' '}
            for more.
          </p>
        </ScrollReveal>
      </header>

      <div className="gallery-stack">
        {galleryItems.map((item, i) => (
          <ScrollReveal key={item.id} animation="fade-up" delay={i * 60}>
            <div className="gallery-photo">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
