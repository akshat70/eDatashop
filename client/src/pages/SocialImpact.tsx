import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import socialImpactHero from "./images/social-impact-hero.jpg";

const focusAreas = [
  {
    title: "Talent, technology & opportunity",
    description: "We create pathways where people can build digital careers without leaving their communities behind.",
  },
  {
    title: "Inclusive employment",
    description: "We open doors for young professionals and diverse learners from Tier-2, Tier-3 and emerging communities.",
  },
  {
    title: "Skilling for the AI era",
    description: "We help people grow from foundational operations to advanced work in data services, AI, and computer vision.",
  },
  {
    title: "Community impact",
    description: "We strengthen families, livelihoods and local capabilities by delivering global projects from India.",
  },
];

const processSteps = [
  ["01", "Build capability", "We equip people with structured training, continuous upskilling and exposure to modern digital work."],
  ["02", "Grow careers", "We help individuals move from traditional operations into AI data services, digitization and HIL AI roles."],
  ["03", "Create opportunity", "We make inclusive workplaces where talent can develop into operators, specialists and team leaders."],
  ["04", "Drive impact", "We connect local talent to global projects so communities benefit from sustainable digital growth."],
];

export default function SocialImpact() {
  return (
    <div className="site-shell social-impact-page">
      <ServicesHeader />

      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <strong>Social Impact</strong>
            </nav>

            <h1>
              Social Impact : <em>Empowering People Through Technology.</em>
            </h1>
            <p className="hero-intro">
              At CyberData India, we believe technology creates its greatest value when it creates opportunities for people.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/contact-us">
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#focus-areas">
                See how we work <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-meta" aria-label="Impact metrics">
              <div>
                <strong>20+ years</strong>
                <span>Building opportunity through digital work</span>
              </div>
              <div>
                <strong>Inclusive</strong>
                <span>Supporting talent from emerging communities</span>
              </div>
              <div>
                <strong>Global impact</strong>
                <span>From India to the world, with local growth</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-visual social-impact-visual">
              <img src={socialImpactHero} alt="People and technology working together for social impact" />

              <div className="social-impact-card social-impact-main">
                <span className="mono-label">COMMUNITY SIGNALS</span>
                <div className="impact-row">
                  <HeartHandshake />
                  <div>
                    <strong>Service outcomes</strong>
                    <small>People-centered delivery</small>
                  </div>
                </div>
                <div className="impact-row">
                  <Database />
                  <div>
                    <strong>Operational data</strong>
                    <small>Clean, trusted, useful</small>
                  </div>
                </div>
                <div className="impact-row">
                  <BarChart3 />
                  <div>
                    <strong>Evidence & insight</strong>
                    <small>Measured and actionable</small>
                  </div>
                </div>
              </div>

              <div className="social-impact-card social-impact-side">
                <span className="mono-label">IMPACT AREA</span>
                <h3>Technology with purpose. Opportunity with impact.</h3>
                <div className="mini-pill"><Check size={14} /> People-first growth</div>
              </div>
            </div>
          </div>
        </section>

        <section id="focus-areas" className="capabilities-section section-pad section-white">
          <div className="section-heading split-heading">
            <div>
              <h2>What we are <span>building together.</span></h2>
            </div>
            <p>
              For over two decades, CyberData India has been creating pathways where talent, technology and opportunity come together.
            </p>
          </div>

          <div className="services-grid services-grid-text">
            {focusAreas.map((area, index) => (
              <article className="service-card service-card-text" key={area.title}>
                <div className="service-card-topline">
                  <span className="mono-label">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-tag">{area.title.split(" & ")[0] || "Impact"}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad">
          <div className="section-heading split-heading">
            <div>
              <h2>Our approach <span>is grounded in real opportunity.</span></h2>
            </div>
            <p>
              We create sustainable employment and digital skills pathways that help people grow into the future of work.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map(([step, label, text]) => (
              <div className="process-card" key={step}>
                <span className="mono-label process-number">{step}</span>
                <h3>{label}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad section-white">
          <div className="section-heading split-heading">
            <div>
              <h2>Why it matters <span>for people and communities.</span></h2>
            </div>
            <p>
              By delivering global projects from India while developing local talent, we create impact beyond business and strengthen communities.
            </p>
          </div>

          <div className="impact-grid">
            <div className="impact-panel">
              <div className="impact-icon"><Users size={22} /></div>
              <h3>Inclusive workplaces</h3>
              <p>We create opportunities for young professionals and diverse learners from different educational and socio-economic backgrounds.</p>
            </div>
            <div className="impact-panel">
              <div className="impact-icon"><ShieldCheck size={22} /></div>
              <h3>Skills for the future</h3>
              <p>From data operations to AI, computer vision and Human-in-the-Loop AI, we prepare people for next-generation work.</p>
            </div>
            <div className="impact-panel">
              <div className="impact-icon"><Sparkles size={22} /></div>
              <h3>Stronger communities</h3>
              <p>We support livelihoods, family growth and sustainable local development by building digital capability where it matters most.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-block">
            <div>
              <h2>Technology with purpose.<br />Opportunity with impact.</h2>
              <p>We are building a future where people advance with technology, not behind it.</p>
            </div>
            <a className="button button-dark" href="/contact-us">
              Partner with us <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
