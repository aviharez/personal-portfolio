import { PROJECTS } from '@/data/portfolio'

export default function Work() {
  return (
    <section id="s-work" className="work" data-chapter="2">
      <div className="wrap pad-rail work-head">
        <div className="section-head reveal">
          <span className="idx">02</span><span className="ttl">Selected Work</span>
        </div>
        <h2 className="big reveal">Things I&apos;ve <em>built</em>.</h2>
      </div>

      <div className="work-pin">
        <div className="work-sticky">
          <div className="work-track">
            {PROJECTS.map((p) => (
              <article key={p.idx} className="proj">
                <div className="proj-media">
                  <div className="proj-ph" style={{ background: p.image ? undefined : p.gradient }}>
                    {p.image ? (
                      <img
                        src={`/projects/${p.image}`}
                        alt={p.title}
                        className="proj-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="cap">{p.mediaLabel}</div>
                    )}
                  </div>
                </div>
                <div className="proj-body">
                  <div className="proj-idx">{p.idx} — {p.year}</div>
                  <h3 className="proj-title">{p.title}</h3>
                  <div className="proj-meta">
                    <span>{p.category}</span>
                    <span>{p.role}</span>
                  </div>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a
                    className="proj-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <span className="arr">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
