import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <header className="about-page__header">
        <ScrollReveal animation="fade-up">
          <h1 className="about-page__title">The heart behind Art &amp; Cheers</h1>
          <p className="about-page__tagline">
            Where <strong>art</strong> meets <strong>celebration</strong>—a space for adults
            to <em>create</em>, <em>connect</em>, and <em>rejuvenate</em>.
          </p>
        </ScrollReveal>
      </header>

      <div className="about-page__content">
        <ScrollReveal animation="fade-up" delay={100}>
          <section className="about-page__section">
            <h2>From My Heart to Yours <span className="about-page__emoji">🤍</span></h2>
            <div className="about-page__photo-wrap">
              <img src="/images/about/IMG-20250511-WA0043.png" alt="Mindful creation at an art workshop" className="about-page__photo" />
            </div>
            <p>
              Art &amp; Cheers is deeply special to me because it began with a{' '}
              <strong>quiet, meaningful moment</strong> in my own life.
            </p>
            <p>
              I discovered the joy of <strong>mindful creation</strong> at a pottery studio in{' '}
              <em>Dharamkot</em> while spending unhurried time with my mother{' '}
              <span className="about-page__emoji">🌿</span> As we shaped clay with our hands,{' '}
              <em>something within me shifted.</em> The process felt <strong>meditative</strong>, almost{' '}
              <strong>therapeutic</strong>. You <strong>surrender</strong>. You do not know what the result
              will be. You stop trying to control the outcome.
            </p>
            <p>
              And yet somehow, something <strong>beautiful</strong> always emerges in the end.
            </p>
            <p>
              More than the final piece, it was <strong>the feeling</strong> that stayed with me.{' '}
              <em>The presence. The bonding.</em> The memory we created together. That simple experience
              became the <strong>seed for Art &amp; Cheers</strong>{' '}
              <span className="about-page__emoji">🎨</span>
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <section className="about-page__section">
            <h2>More Than Just a Paint Session <span className="about-page__emoji">✨</span></h2>
            <p>
              We are not simply hosting <em>workshops</em>.
            </p>
            <p>
              We are <strong>creating moments</strong> <span className="about-page__emoji">💛</span>
            </p>
            <ul className="about-page__moments">
              <li>
                <span className="about-page__emoji">🌿</span>{' '}
                <strong>Unplugging:</strong> moments where youngsters can step away from the noise and laugh
                freely
              </li>
              <li>
                <span className="about-page__emoji">💑</span>{' '}
                <strong>Reconnecting:</strong> moments where couples share intentional time together
              </li>
              <li>
                <span className="about-page__emoji">🎉</span>{' '}
                <strong>Remembering:</strong> moments where friends create memories that go beyond photos
              </li>
              <li>
                <span className="about-page__emoji">👨‍👩‍👧‍👦</span>{' '}
                <strong>Discovering:</strong> moments where families sit side by side, seeing each other in new
                ways
              </li>
            </ul>
            <p>
              <span className="about-page__emoji">✨</span> Because art is never just about the{' '}
              <em>final painting</em>.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <section className="about-page__section">
            <h2>Join us</h2>
            <p>
              Follow us on{' '}
              <a
                href="https://www.instagram.com/artandcheers_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{' '}
              for updates, and browse our{' '}
              <Link to="/events">events page</Link> for upcoming workshops.{' '}
              <em>We&apos;d love to see you there.</em>
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  )
}
