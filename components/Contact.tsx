import { CONTACT } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="s-contact" className="contact" data-chapter="6">
      <div className="wrap pad-rail">
        <div className="contact-lead reveal">06 — Let&apos;s collaborate</div>
        <h2 className="contact-big reveal">
          Let&apos;s build<br /><span className="em">something</span>.
        </h2>

        <a
          className="contact-mail mag"
          data-mag="0.15"
          href={`mailto:${CONTACT.email}`}
        >
          <span className="u">{CONTACT.email}</span>
          <span className="arr">↗</span>
        </a>

        <div className="contact-links reveal">
          <a
            className="clink mag"
            data-mag="0.12"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="k">LinkedIn</span>
            <span className="v">/syifa-nurzain <span className="arr">↗</span></span>
          </a>
          <a
            className="clink mag"
            data-mag="0.12"
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="k">GitHub</span>
            <span className="v">/aviharez <span className="arr">↗</span></span>
          </a>
          <a className="clink mag" data-mag="0.12" href={`tel:${CONTACT.phone}`}>
            <span className="k">Phone</span>
            <span className="v">{CONTACT.phoneDisplay}</span>
          </a>
          <a className="clink mag" data-mag="0.12" href={CONTACT.cvPath} download>
            <span className="k">Résumé</span>
            <span className="v">Download CV <span className="arr">↓</span></span>
          </a>
        </div>

        <footer>
          <span>© 2026 Syifa Nurzain — Mobile &amp; Web Engineer</span>
          <span>Set in Instrument Serif · Space Grotesk · JetBrains Mono</span>
          <span className="top" data-top>Back to top ↑</span>
        </footer>
      </div>
    </section>
  )
}
