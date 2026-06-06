export default function ChapterRail() {
  return (
    <>
      <div className="scrollbar" aria-hidden="true" />
      <nav className="rail" aria-label="Chapters">
        <a className="rail-mark mag" data-mag="0.25" data-top href="#s-hero">
          SNZ<sup>↑</sup>
        </a>
        <ul className="rail-list">
          {[
            ['00', 'Index',   '#s-hero'],
            ['01', 'Story',   '#s-story'],
            ['02', 'Work',    '#s-work'],
            ['03', 'Stack',   '#s-expertise'],
            ['04', 'Path',    '#s-timeline'],
            ['05', 'Now',     '#s-philo'],
            ['06', 'Contact', '#s-contact'],
          ].map(([num, label, target]) => (
            <li key={num} className="rail-item" data-target={target}>
              <span className="rail-num">{num}</span>
              <span className="rail-line" />
              <span className="rail-label">{label}</span>
            </li>
          ))}
        </ul>
        <div className="rail-progress">
          <span className="num">00</span>%
        </div>
      </nav>
    </>
  )
}
