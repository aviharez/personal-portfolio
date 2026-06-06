import { TIMELINE } from '@/data/portfolio'

export default function Timeline() {
  return (
    <section id="s-timeline" className="timeline" data-chapter="4">
      <div className="wrap pad-rail">
        <div className="section-head reveal">
          <span className="idx">04</span><span className="ttl">The Path</span>
        </div>
        <div className="tl">
          <div className="tl-line"><div className="fill" /></div>
          {TIMELINE.map((entry, i) => (
            <div key={i} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-when">{entry.when}</div>
              <h3 className="tl-role">{entry.role}</h3>
              <div className="tl-co">
                {entry.company}
                <span className="loc">{entry.location}</span>
              </div>
              {entry.points.length > 0 && (
                <ul className="tl-points">
                  {entry.points.map((pt, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
