import { Link } from 'react-router-dom'
import './CTABlock.css'

export default function CTABlock() {
  return (
    <section className="cta-block">
      <div className="cta-block__inner">
        <div className="cta-block__image-wrap">
          <div
            className="cta-block__image"
            style={{
              backgroundImage: `url(/images/events/sip-and-paint/IMG-20250216-WA0052.jpg)`,
            }}
          />
        </div>
        <div className="cta-block__content">
          <h2 className="cta-block__title">Join a workshop</h2>
          <p className="cta-block__subheading">
            Sip gently, breathe deeply, and allow creativity to flow without pressure or expectation.
            Here, stories unfold naturally on canvas as conversations drift with ease.
            It&apos;s a space where every generation comes together to relax, connect, and simply be.
          </p>
          <Link to="/events" className="cta-block__btn">
            View events
          </Link>
        </div>
      </div>
    </section>
  )
}
