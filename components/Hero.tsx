import { HERO } from '@/data/portfolio'

export default function Hero() {
  return (
    <section id="s-hero" className="hero" data-chapter="0">
      <canvas className="hero-canvas" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-inner wrap pad-rail">

        <div className="hero-top">
          <div className="who" data-fade>
            <b>Mobile &amp; Web Engineer</b><br />Android · React · iOS
          </div>
          <div className="hero-meta" data-fade>
            <span className="t" data-clock>—</span><br />
            Tangerang · Indonesia<br />
            Open to work
          </div>
        </div>

        <div className="hero-center">
          <h1 className="hero-display">
            <span className="line-mask"><span>Syifa</span></span>
            <span className="line-mask"><span><span className="em">Nurzain</span></span></span>
          </h1>
          <div className="hero-sub">
            <span className="role-rot" data-fade>// <span className="cur">Android · Kotlin</span></span>
            <p data-fade>{HERO.description}</p>
          </div>
          <div className="hero-cta" data-fade>
            <a className="btn btn-primary mag" data-mag="0.18" href={HERO.cvPath} download>
              Download CV <span className="ico">↓</span>
            </a>
            <a className="btn btn-ghost mag" data-mag="0.18" href="#s-work">
              View work <span className="ico">→</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <a className="scroll-cue mag" data-mag="0.2" href="#s-story">
            <span className="bar" /> Scroll to begin
          </a>
          <div className="hero-coords" data-fade>
            {HERO.coords}<br />{HERO.availability}
          </div>
        </div>

      </div>
    </section>
  )
}
