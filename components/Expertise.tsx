import { SKILLS } from '@/data/portfolio'

const MARQUEE_ITEMS = [
  'Kotlin', 'Jetpack Compose', 'React', 'TypeScript', 'Angular',
  'SwiftUI', 'Next.js', 'Clean Architecture',
]

export default function Expertise() {
  return (
    <section id="s-expertise" className="expertise" data-chapter="3">
      <div className="wrap pad-rail">
        <div className="section-head reveal">
          <span className="idx">03</span><span className="ttl">Technical Stack</span>
        </div>
      </div>

      <div className="marquee reveal" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>
              {item} <span className="dot">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap pad-rail">
        <div className="matrix">
          {SKILLS.map((row) => (
            <div key={row.n} className="mrow">
              <div className="mcat reveal">
                <span className="n">{row.n}</span>
                {row.cat}
              </div>
              <div className="mitems reveal reveal-delay-1">
                {row.items.map((item) => (
                  <span key={item.label} className={`chip${item.primary ? ' primary' : ''}`}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
