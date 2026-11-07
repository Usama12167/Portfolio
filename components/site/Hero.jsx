import { useEffect, useState } from "react";
import { PROFILE, PHONE_TOASTS } from "../../constants/site";
import { ArrowIcon, CheckIcon, usePrefersReducedMotion } from "./shared";

function TypedWord({ words, reduce }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reduce) return undefined;
    let timer;
    let wi = 0;
    let current = words[0];

    const type = (word, i) => {
      if (i <= word.length) {
        current = word.slice(0, i);
        setText(current);
        timer = setTimeout(() => type(word, i + 1), 70);
      } else {
        timer = setTimeout(erase, 1800);
      }
    };
    const erase = () => {
      if (current.length) {
        current = current.slice(0, -1);
        setText(current);
        timer = setTimeout(erase, 35);
      } else {
        wi = (wi + 1) % words.length;
        type(words[wi], 0);
      }
    };

    timer = setTimeout(erase, 2600);
    return () => clearTimeout(timer);
  }, [words, reduce]);

  return <span className="swap">{text}</span>;
}

function Phone({ reduce }) {
  const [ti, setTi] = useState(0);
  const [out, setOut] = useState(false);
  const [amount, setAmount] = useState(12480.5);

  useEffect(() => {
    if (reduce) return undefined;
    let inner;
    const id = setInterval(() => {
      setOut(true);
      inner = setTimeout(() => {
        setTi((i) => (i + 1) % PHONE_TOASTS.length);
        setOut(false);
        setAmount((a) => a + Math.round((20 + Math.random() * 180) * 100) / 100);
      }, 400);
    }, 3200);
    return () => {
      clearInterval(id);
      clearTimeout(inner);
    };
  }, [reduce]);

  const [title, sub] = PHONE_TOASTS[ti];

  return (
    <div className="phone-stage load d5" aria-label="Animated example of a wallet app screen" role="img">
      <div className="halo" />
      <div className="phone">
        <div className="notch" />
        <div className="app-top"><span>Wallet</span><span>●●●</span></div>
        <div>
          <div className="app-top"><span>Total balance</span></div>
          <div className="bal">
            ${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <svg className="spark" viewBox="0 0 240 70" preserveAspectRatio="none" aria-hidden="true">
          <path className="area" d="M0,55 C30,50 40,30 70,36 S120,58 150,30 S200,12 240,8 L240,70 L0,70 Z" />
          <path className="line" d="M0,55 C30,50 40,30 70,36 S120,58 150,30 S200,12 240,8" />
        </svg>
        <div className="chips">
          <div className="chip"><b>Send</b>Stripe</div>
          <div className="chip"><b>Bank</b>Plaid</div>
          <div className="chip"><b>SOL</b>Phantom</div>
        </div>
        <div className="tx">
          <div className="tx-row"><span>Payout</span><span>+$240.00</span></div>
          <div className="tx-row"><span>Invoice #1042</span><span>+$85.00</span></div>
        </div>
      </div>
      <div className={`toast${out ? " out" : ""}`}>
        <span className="ic"><CheckIcon size={16} /></span>
        <span>{title}<small>{sub}</small></span>
      </div>
      <div className="badge-float">iOS + Android</div>
      <span className="caption">Example UI</span>
    </div>
  );
}

export default function Hero() {
  const reduce = usePrefersReducedMotion();
  return (
    <div className="hero">
      <div>
        <span className="status load d1"><span className="dot" />{PROFILE.status}</span>
        <h1 className="load d2">
          React Native apps<br />for <TypedWord words={PROFILE.industries} reduce={reduce} />
          <span className="caret" aria-hidden="true" />
        </h1>
        <p className="lede load d3">{PROFILE.lede}</p>
        <div className="cta-row load d4">
          <a className="btn btn-primary" href="#work">See my work <ArrowIcon /></a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
      <Phone reduce={reduce} />
    </div>
  );
}
