import { useState } from "react";
import { PROJECTS } from "../../constants/site";
import { SectionHead } from "./shared";

function Logo({ src, initials, name }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="logo">
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`${name} app logo`} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        initials
      )}
    </span>
  );
}

function spotlight(e) {
  const c = e.currentTarget;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", `${e.clientX - r.left}px`);
  c.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function MockShots() {
  return (
    <div className="shots" aria-hidden="true">
      <div className="shot"><div className="bar s" /><div className="bar a" /><div className="blk" /><div className="bar" /><div className="bar" /></div>
      <div className="shot"><div className="bar s" /><div className="blk" /><div className="bar a" /><div className="bar" /></div>
    </div>
  );
}

function ProjectBody({ p }) {
  return (
    <>
      <div className="head">
        <Logo src={p.logo} initials={p.initials} name={p.name} />
        <div className="tags">
          {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
      <h3>{p.name}<small>{p.subtitle}</small></h3>
      <p className="desc">{p.desc}</p>
      {p.points?.length ? (
        <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
      ) : null}
      <div className="stack">{p.stack}</div>
      {p.links.length ? (
        <div className="stores">
          {p.links.map(([label, href]) => (
            <a key={href} className="store" href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <SectionHead eyebrow="Selected work" title="Apps I built and shipped">
        Fintech, SaaS, e‑commerce, real estate and media. Each one went from first screen to store release.
      </SectionHead>
      <div className="projects">
        {PROJECTS.map((p) =>
          p.size === "wide" ? (
            <article key={p.name} className="proj wide reveal" onPointerMove={spotlight}>
              <div className="proj-col"><ProjectBody p={p} /></div>
              <MockShots />
            </article>
          ) : (
            <article key={p.name} className="proj sm reveal" onPointerMove={spotlight}>
              <ProjectBody p={p} />
            </article>
          )
        )}
      </div>
    </section>
  );
}
