import { useEffect, useState } from "react";
import { CERTS, CONTACT_ITEMS, EDUCATION, JOBS, MARQUEE, PROFILE, SKILL_GROUPS, STATS } from "../../constants/site";
import { CheckIcon, SectionHead } from "./shared";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a className="brand" href="#top"><span className="mark">{PROFILE.initials}</span>{PROFILE.name}</a>
        <nav className="links" aria-label="Main">
          <a className="hide-sm" href="#work">Work</a>
          <a className="hide-sm" href="#skills">Skills</a>
          <a className="hide-sm" href="#experience">Experience</a>
          <a className="btn btn-primary btn-sm" href="#contact">Let&apos;s talk</a>
        </nav>
      </div>
    </header>
  );
}

export function Stats() {
  return (
    <div className="stats reveal">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <div className="n">{s.n}{s.suffix ? <em>{s.suffix}</em> : null}</div>
          <div className="l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <SectionHead eyebrow="Skills" title="What I work with">
        Clean, reusable components, solid API work and apps that stay fast on real devices.
      </SectionHead>
      <div className="skills">
        {SKILL_GROUPS.map((g) => (
          <div className="skill reveal" key={g.title}>
            <h3>{g.title}</h3>
            <div className="pills">
              {g.items.map((i) => <span className="pill" key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <div className="timeline">
        {JOBS.map((j) => (
          <article className={`job reveal${j.current ? " now" : ""}`} key={j.company}>
            <div className="when">{j.when}<b>{j.company}</b><span>{j.location}</span></div>
            <div>
              <h3>{j.role}</h3>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <div className="edu">
        <div className="card reveal">
          <span className="eyebrow">Education</span>
          <h3 style={{ marginTop: 14 }}>{EDUCATION.degree}</h3>
          <p className="muted" style={{ margin: "6px 0 0" }}>{EDUCATION.school}</p>
        </div>
        <div className="card reveal">
          <span className="eyebrow">Certifications · Coursera / Meta</span>
          <ul className="certs">
            {CERTS.map(([title, sub]) => (
              <li key={title}>
                <span className="ck"><CheckIcon /></span>
                <div><b>{title}</b><span>{sub}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const onClick = async (e) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fall back to selecting the text so the visitor can copy it manually.
      const node = e.currentTarget.previousElementSibling;
      try {
        const r = document.createRange();
        r.selectNodeContents(node);
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
      } catch {}
    }
  };
  return <button className="copy" type="button" onClick={onClick}>{copied ? "Copied" : "Copy"}</button>;
}

export function Contact() {
  return (
    <section id="contact" style={{ marginBottom: 0 }}>
      <div className="contact reveal">
        <div>
          <h2>Have an app in mind? Let&apos;s build it.</h2>
          <p>Tell me what you&apos;re working on. I usually reply within a day.</p>
        </div>
        <div className="c-list">
          {CONTACT_ITEMS.map((c) =>
            c.href ? (
              <a key={c.label} className="c-item link" href={c.href} target="_blank" rel="noopener noreferrer">
                <span><small>{c.label}</small><span>{c.value}</span></span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <div key={c.label} className="c-item">
                <span><small>{c.label}</small><span>{c.value}</span></span>
                <CopyButton value={c.copy} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>{PROFILE.footerTag}</span>
      </div>
    </footer>
  );
}
