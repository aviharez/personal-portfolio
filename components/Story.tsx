import { STORY } from '@/data/portfolio'

export default function Story() {
  return (
    <section id="s-story" className="story" data-chapter="1">
      <div className="wrap pad-rail">
        <div className="section-head reveal">
          <span className="idx">01</span><span className="ttl">Prologue</span>
        </div>
        <div className="story-grid">
          <h2 className="story-lead reveal">
            I turn complex business logic into{' '}
            <span className="em">reliable, fast</span> products people reach for{' '}
            <span className="em">every day</span>{' '}
            <span className="dim">— across mobile and web.</span>
          </h2>
          <div className="story-cols">
            {STORY.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
        <div className="story-stats reveal reveal-delay-2">
          {STORY.stats.map((s) => (
            <div key={s.l} className="stat">
              <div className="n">
                {s.n}
                {s.u && <span className="u">{s.u}</span>}
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
