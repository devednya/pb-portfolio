import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <header className="about-page__header">
        <ScrollReveal animation="fade-up">
          <h1 className="about-page__title">About Art & Cheers</h1>
          <p className="about-page__tagline">
            Where art meets celebration, a space for adults to create, connect, and
            rejuvenate.
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
              Art & Cheers is deeply special to me because it began with a quiet, meaningful moment in my own life.
            </p>
            <p>
              I discovered the joy of mindful creation at a pottery studio in Dharamkot while spending unhurried time with my mother <span className="about-page__emoji">🌿</span> As we shaped clay with our hands, something within me shifted. The process felt meditative, almost therapeutic. You surrender. You do not know what the result will be. You stop trying to control the outcome.
            </p>
            <p>
              And yet somehow, something beautiful always emerges in the end.
            </p>
            <p>
              More than the final piece, it was the feeling that stayed with me. The presence. The bonding. The memory we created together. That simple experience became the seed for Art & Cheers <span className="about-page__emoji">🎨</span>
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <section className="about-page__section">
            <h2>More Than Just a Paint Session <span className="about-page__emoji">✨</span></h2>
            <p>
              We are not simply hosting workshops.
            </p>
            <p>
              We are creating moments <span className="about-page__emoji">💛</span>
            </p>
            <ul className="about-page__moments">
              <li><span className="about-page__emoji">🌿</span> Moments where youngsters can unplug from the noise and laugh freely</li>
              <li><span className="about-page__emoji">💑</span> Moments where couples reconnect and share intentional time together</li>
              <li><span className="about-page__emoji">🎉</span> Moments where friends create memories that go beyond photos</li>
              <li><span className="about-page__emoji">👨‍👩‍👧‍👦</span> Moments where families sit side by side, discovering each other in new ways</li>
            </ul>
            <p>
              <span className="about-page__emoji">✨</span> Because art is never just about the final painting.
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
              for updates, and check our{' '}
              <Link to="/events">events page</Link> for upcoming workshops. We&apos;d love
              to see you there.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  )
}
