import Hero from "../components/site/Hero";
import Projects from "../components/site/Projects";
import { Contact, Education, Experience, Footer, Header, Marquee, Skills, Stats } from "../components/site/Sections";
import { useScrollReveal } from "../components/site/shared";
import Seo from "../components/site/Seo";
import Showcase from "../components/site/Showcase";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Seo />

      <div className="grid-bg" aria-hidden="true" />
      <Header />

      <main id="top">
        <div className="wrap">
          <Hero />
          <Stats />
        </div>
        <Marquee />
        <Showcase />
        <div className="wrap">
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
