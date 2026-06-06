import { GLANCE } from '@/data/portfolio'

export default function Glance() {
  return (
    <section id="s-philo" className="now" data-chapter="5">
      <div className="wrap pad-rail">
        <div className="section-head reveal">
          <span className="idx">05</span><span className="ttl">At a Glance</span>
        </div>
        <h2 className="now-lead reveal">
          Currently a Mobile &amp; Web Engineer at{' '}
          <span className="em">PT Bank Central Asia</span> — open to senior mobile &amp; frontend
          roles and select freelance.
        </h2>
        <div className="now-grid">
          {GLANCE.map((f, i) => (
            <div
              key={f.key}
              className={`fact reveal${i % 3 !== 0 ? ` reveal-delay-${(i % 3) as 1 | 2}` : ''}`}
            >
              <span className="fk">{f.key}</span>
              <span className="fv">{f.value}</span>
              <span className="fd">{f.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
