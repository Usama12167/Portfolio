import { useEffect, useRef, useState } from "react";
import { SHOWCASE, SHOWCASE_STEPS } from "../../constants/site";
import { ArrowIcon, CheckIcon, usePrefersReducedMotion } from "./shared";

// Scroll timeline (0 → 1 across the pinned section):
//   0.00–0.08  ring lights up
//   0.06–0.30  phone frame rises, glass, island and buttons snap on
//   0.28–0.55  UI pieces fly in and land on the screen
//   0.52–0.66  spec cards slide in
//   0.66–1.00  app switcher: one app per quarter
const APPS_START = 0.66;
const APP_SPAN = (1 - APPS_START) / SHOWCASE.length;

function phaseFor(p) {
  if (p < 0.27) return 0;
  if (p < 0.5) return 1;
  if (p < APPS_START) return 2;
  return 3;
}

function appFor(p) {
  if (p < APPS_START) return 0;
  return Math.min(SHOWCASE.length - 1, Math.floor((p - APPS_START) / APP_SPAN));
}

// s/e = start/end of this part's animation; dx/dy/r = where it flies in from.
const k = (s, e, extra = {}) => ({ "data-k": "", style: { "--s": s, "--e": e, ...extra } });
const piece = (s, dx, dy, r) => k(s, s + 0.09, { "--dx": `${dx}px`, "--dy": `${dy}px`, "--r": `${r}deg` });

const svgProps = { width: 13, height: 13, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
const DownIcon = () => <svg {...svgProps}><path d="M12 4v12M6 11l6 6 6-6M5 20h14" /></svg>;
const DocIcon = () => <svg {...svgProps}><path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5" /></svg>;

const NOTE_FROM = { "--dx": "0px", "--dy": "-110px", "--r": "0deg" };

function TabBar() {
  return (
    <div className="sc-tabs"><i className="on" /><i /><i /><i /></div>
  );
}

function StatusBar() {
  return <div className="sc-sb"><span>9:41</span><span className="sc-sig"><i /><i /><i /></span></div>;
}

// App 0 is not a screen: it's the pieces that assemble on scroll.
function WalletPieces() {
  return (
    <>
      <div className="sc-piece" {...piece(0.28, 0, -220, 0)}><StatusBar /></div>
      <div className="sc-piece sc-h" {...piece(0.3, -300, -60, -10)}><b>Wallet</b><span className="sc-av">BP</span></div>
      <div className="sc-piece sc-card" {...piece(0.33, 320, -120, 12)}>
        <small>Available earnings</small>
        <b>$12,480.50</b>
        <em>+$1,240.00 this week</em>
      </div>
      <div className="sc-piece" {...piece(0.36, -340, 40, -14)}>
        <svg className="sc-chart" viewBox="0 0 240 70" preserveAspectRatio="none" aria-hidden="true">
          <path className="area" d="M0,55 C30,50 40,30 70,36 S120,58 150,30 S200,12 240,8 L240,70 L0,70 Z" />
          <path className="line" d="M0,55 C30,50 40,30 70,36 S120,58 150,30 S200,12 240,8" />
        </svg>
      </div>
      <div className="sc-piece sc-chips" {...piece(0.38, 300, 20, 10)}>
        <div><b>Send</b>Stripe</div><div><b>Deposit</b>Plaid</div><div><b>SOL</b>Phantom</div>
      </div>
      <div className="sc-piece sc-actions" {...piece(0.4, -300, 60, -10)}>
        <span className="pri"><DownIcon />Withdraw earnings</span>
        <span><DocIcon />Pay invoice</span>
      </div>
      <div className="sc-piece sc-row sc-inv" {...piece(0.42, 320, 140, 8)}>
        <span>Invoice #1042<small>Sparkle Cleaning · due today</small></span>
        <span className="sc-pay" {...k(0.55, 0.58)}><i>Pay $85</i><i>Paid ✓</i></span>
      </div>
      <div className="sc-piece sc-row" {...piece(0.44, -320, 160, -8)}>
        <span>Withdraw $240.00<small>To Bank ••42 · Stripe</small></span>
        <span className="sc-pay" {...k(0.61, 0.64)}><i>Withdraw</i><i>Sent ✓</i></span>
      </div>
      {/* Notifications stack like iOS: the newer alert lands on top and pushes the older one back. */}
      <div className="sc-note-stack" {...k(0.59, 0.64)}>
        <div className="sc-piece sc-note" {...k(0.53, 0.58, NOTE_FROM)}>
          <span className="ic"><CheckIcon size={14} /></span>
          <span>Invoice #1042 paid<small>$85.00 · Stripe · just now</small></span>
        </div>
      </div>
      <div className="sc-piece sc-note sc-note-top" {...k(0.59, 0.64, NOTE_FROM)}>
        <span className="ic"><DownIcon /></span>
        <span>Withdrawal sent<small>$240.00 to Bank ••42 · Stripe</small></span>
      </div>
      <div className="sc-piece sc-push" {...piece(0.46, 0, 240, 0)}><TabBar /></div>
    </>
  );
}

function BeferScreen() {
  const jobs = [["09:00", "Deep clean", "Hassan R.", "done"], ["11:30", "AC service", "Ayesha K.", "live"], ["14:00", "Plumbing", "Bilal M.", "next"]];
  return (
    <>
      <StatusBar />
      <div className="sc-h"><b>Today</b><span className="sc-av">BF</span></div>
      <div className="sc-kpis"><div><small>Jobs</small><b>12</b></div><div><small>Revenue</small><b>$3.4k</b></div></div>
      <div className="sc-map" aria-hidden="true"><span className="pin" style={{ left: "22%", top: "40%" }} /><span className="pin" style={{ left: "58%", top: "28%" }} /><span className="pin" style={{ left: "74%", top: "64%" }} /></div>
      {jobs.map(([t, svc, who, s]) => (
        <div className="sc-job" key={t}><span className="t">{t}</span><span className="w">{svc}<small>{who}</small></span><em className={s}>{s}</em></div>
      ))}
      <div className="sc-push"><TabBar /></div>
    </>
  );
}

// Product photos: Unsplash (free licence) — Khaled Ghareeb, SKG Photography,
// Alexander Jawfox, Alexander Mass. Files live in public/showcase/udress/.
const DRESSES = [
  ["Evening gown", "$120", "evening-gown"],
  ["Lace gown", "$85", "lace-gown"],
  ["Gold ball gown", "$140", "gold-ball-gown"],
  ["Bridal lace", "$210", "bridal-lace"],
];

function UdressScreen() {
  return (
    <>
      <StatusBar />
      <div className="sc-search">Search dresses…</div>
      <div className="sc-cats"><span className="on">Wedding</span><span>Party</span><span>Eid</span></div>
      <div className="sc-grid">
        {DRESSES.map(([n, pr, file]) => (
          <div className="sc-prod" key={n}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="img" src={`/showcase/udress/${file}.jpg`} alt="" />
            <span>{n}</span><b>{pr}</b>
          </div>
        ))}
      </div>
      <div className="sc-push"><TabBar /></div>
    </>
  );
}

function EtihadScreen() {
  return (
    <>
      <StatusBar />
      <div className="sc-h"><b>Etihad Town</b><span className="sc-av">ET</span></div>
      <div className="sc-hero"><small>Announcement</small><b>Water supply restored in Block C</b></div>
      <div className="sc-tiles">
        {["Maintenance", "Bills", "Files", "Gate pass"].map((t) => <div key={t}><i />{t}</div>)}
      </div>
      <div className="sc-row"><span>Request #318 · Plumbing</span><span>Assigned</span></div>
      <div className="sc-row"><span>Bill · November</span><span>Paid</span></div>
      <div className="sc-push"><TabBar /></div>
    </>
  );
}

const SCREENS = { befer: BeferScreen, udress: UdressScreen, etihad: EtihadScreen };

export default function Showcase() {
  const root = useRef(null);
  const reduce = usePrefersReducedMotion();
  const [phase, setPhase] = useState(0);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;

    const fit = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const f = vw < 900
        ? Math.min(1, (vh * 0.46) / 650, (vw * 0.9) / 400)
        : Math.min(1, (vh * 0.74) / 650);
      el.style.setProperty("--fit", f.toFixed(3));
    };
    fit();

    if (reduce) {
      el.style.setProperty("--p", "1");
      setPhase(3);
      return () => {};
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      el.style.setProperty("--p", p.toFixed(4));
      setPhase(phaseFor(p));
      setIdx(appFor(p));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { fit(); onScroll(); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  // Clicking a swatch scrolls to that app's slot (or switches directly with reduced motion).
  const pick = (i) => {
    if (reduce) { setIdx(i); return; }
    const el = root.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (APPS_START + (i + 0.5) * APP_SPAN) * total, behavior: "smooth" });
  };

  const app = SHOWCASE[idx];
  const Screen = SCREENS[app.key];

  return (
    <section
      ref={root}
      id="showcase"
      className={`sc${reduce ? " static" : ""}`}
      style={{ "--glow": app.glow }}
      aria-label="App showcase"
    >
      <div className="sc-sticky">
        <div className="sc-copy">
          <span className="eyebrow">How I build</span>
          <h2>Built screen{" "}<br />by screen.</h2>
          {phase < 3 ? (
            <ol className="sc-steps">
              {SHOWCASE_STEPS.map((s, i) => (
                <li key={s} data-n={`0${i + 1}`} className={i === phase ? "on" : i < phase ? "done" : ""}>{s}</li>
              ))}
            </ol>
          ) : (
            <div className="sc-app-info" key={app.key}>
              <b>{app.name}</b>
              <span className="muted">{app.subtitle}</span>
              <a href="#work">See the case study <ArrowIcon /></a>
            </div>
          )}
        </div>

        <div className="sc-stage" role="img" aria-label={`Phone showing the ${app.name} app`}>
          <div className="sc-stage-in">
            <div className="sc-floor" {...k(0, 0.12)} />
            <div className="sc-ring back" {...k(0, 0.08)} />
            <div className="sc-phone" {...k(0.04, 0.58)}>
              <div className="sc-btn l" {...k(0.22, 0.3)} />
              <div className="sc-btn r" {...k(0.24, 0.32)} />
              <div className="sc-body" {...k(0.06, 0.2)} />
              <div className="sc-screen">
                <div className={`sc-pieces${idx > 0 ? " away" : ""}`}><WalletPieces /></div>
                {SHOWCASE.slice(1).map((a) => {
                  const S = SCREENS[a.key];
                  return (
                    <div key={a.key} className={`sc-app${Screen === S ? " on" : ""}`} aria-hidden={Screen !== S}>
                      <S />
                    </div>
                  );
                })}
              </div>
              <div className="sc-glass" {...k(0.16, 0.24)} />
              <div className="sc-island" {...k(0.2, 0.27)} />
            </div>
            <div className="sc-ring front" {...k(0, 0.08)} />
          </div>
        </div>

        <ul className="sc-specs" key={app.key}>
          {app.specs.map(([v, l], i) => (
            <li key={v} {...k(0.52 + i * 0.025, 0.6 + i * 0.025)}><b>{v}</b><span>{l}</span></li>
          ))}
        </ul>

        <div className={`sc-swatches${phase >= 2 ? " live" : ""}`} {...k(0.6, 0.66)}>
          {SHOWCASE.map((a, i) => (
            <button
              key={a.key}
              type="button"
              className={i === idx ? "on" : ""}
              style={{ "--c": a.glow }}
              onClick={() => pick(i)}
              aria-label={`Show ${a.name}`}
              aria-pressed={i === idx}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.logo} alt="" />
            </button>
          ))}
        </div>

        <div className="sc-progress" aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
