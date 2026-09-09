import SiteFooter from "@/components/SiteFooter";
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, Check, Database, FileStack, GitBranch, Globe2, LockKeyhole, ScanLine, Sparkles, UsersRound } from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";

const journey = [
  ["1996", "Capture", "Scanning · Ingestion · Digitisation", "We began with a simple mission: capture information in every form. Paper records and digital sources became the foundation for secure, accurate data operations."],
  ["2000", "Structure", "Extraction · Normalisation · Schema", "As volumes grew, we brought order to complexity. Raw information became clean, consistent, and usable across business systems."],
  ["2010", "Enrich", "Annotation · Enhancement · AI training", "With the rise of machine learning, we evolved from processors to data enhancers. Annotation, metadata, and enrichment now help intelligent systems learn better."],
  ["2020", "Deploy", "Integration · Deployment · Impact", "Today, we deliver AI-ready data that integrates into enterprise workflows and drives measurable outcomes."],
];

const values = [
  ["Quality first", "Multi-layer checks and QA processes ensure accuracy at every step.", Check],
  ["Security by design", "Enterprise-grade security with ISO-certified quality and compliance-minded operations.", LockKeyhole],
  ["Scalable delivery", "Flexible models and skilled teams handle high-volume projects reliably.", Globe2],
  ["Custom workflows", "Solutions shaped around your unique data, systems, and desired outcome.", GitBranch],
];

const capabilities = [
  ["Data entry & processing", "Accurate, high-volume operations with multi-level quality checks.", FileStack],
  ["Data conversion & digitisation", "Paper, PDF, and legacy formats transformed into structured digital data.", ScanLine],
  ["AI data annotation", "High-quality training data for computer vision, NLP, and machine learning.", Sparkles],
  ["Workflow automation", "Custom workflows that improve efficiency and reduce turnaround time.", GitBranch],
];

export default function AboutUs() {
  return <div className="about-page">
    <ServicesHeader />
    <main>
      <section className="about-hero section-pad">
        <div className="about-hero-copy">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span><strong>About Us</strong>
          </nav>
          <h1>A trusted data solutions partner <em>delivering accuracy since 1996.</em></h1>
          <p>What began as data entry services has evolved into a full-scale data transformation capability, combining OCR, AI, and machine learning to process complex information at scale.</p>
          <a className="button button-primary" href="/contact-us">Talk to our team <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-hero-art">
          <div className="about-art-grid" />
          <div className="about-art-core">
            <Database size={38} strokeWidth={1.2} />
            <span className="mono-label">DATA → INTELLIGENCE</span>
          </div>
          <div className="about-art-node node-a">
            <FileStack size={17} />RAW
          </div>
          <div className="about-art-node node-b">
            <Sparkles size={17} />AI
          </div>
          <div className="about-art-node node-c">
            <ArrowUpRight size={17} />IMPACT
          </div>
          <div className="art-caption mono-label">CYBERDATA INDIA / 1996—2026</div>
        </div>
      </section>
      <section className="about-intro section-pad section-white">
        <div className="about-intro-aside">
          <div className="about-big-mark">DATA<br />IMPACT<br /><span>→</span></div></div>
          <div className="about-intro-copy">
            <h2>Built on <span>experience.</span> Driven by purpose.</h2>
            <p>eDataShop is the data and AI services brand of CyberData India. We specialise in transforming messy, unstructured information into clean, structured, and decision-ready data. Our work spans data processing, AI training datasets, and intelligent workflows, delivered with enterprise-grade security and ISO-certified quality.</p>
            <a className="text-link" href="#journey">Know our journey <ArrowDownRight size={17} /></a>
          </div>
      </section>
      <section className="flow-section section-pad"><div className="section-heading split-heading">
        <div>
          <h2>Every engagement moves through the same <span>arc.</span></h2>
        </div>
        <p>From a single data-entry job to a full agentic pipeline, the pattern stays simple: raw data in, intelligence applied, measurable impact out.</p></div>
        <div className="flow-cards">
          <div>
            <span className="flow-icon"><Database size={20} /></span>
            <h3>Data</h3>
            <p>The raw material we handle with precision; entry, processing, conversion, and cleansing at scale.</p>
          </div>
          <div>
            <span className="flow-icon"><Sparkles size={20} /></span>
            <h3>AI</h3>
            <p>The intelligence layer: annotation, machine learning, and tailored software built on clean data.</p>
          </div>
          <div>
            <span className="flow-icon"><ArrowUpRight size={20} /></span>
            <h3>Impact</h3>
            <p>The outcome: faster decisions, lower risk, and workflows that scale with the business.</p>
          </div>
        </div>
      </section>
      <section id="journey" className="journey-section section-pad section-grey">
        <div className="section-heading split-heading">
          <div>
            <h2>Nearly three decades of <span>evolution.</span></h2>
          </div>
          <p>Technology changes. Our focus stays constant: transforming complex information into structured, usable intelligence.</p>
        </div>
        <div className="journey-timeline">{journey.map(([year, title, tags, description]) => <article key={year}>
          <div className="journey-year mono-label">{year}</div>
          <div className="journey-line"><span /></div>
          <div className="journey-content">
            <span className="journey-tags mono-label">{tags}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div></article>)}
        </div>
      </section>
      <section className="capability-section section-pad section-white">
        <div className="section-heading split-heading">
          <div>
            <h2>End-to-end <span>data solutions.</span></h2>
          </div>
          <p>One partner for the essential layer between information and action.</p>
        </div>
        <div className="about-capability-grid">{capabilities.map(([title, description, Icon]) => <article key={title as string}><Icon size={21} /><h3>{title as string}</h3><p>{description as string}</p><ArrowUpRight size={17} /></article>)}</div>
      </section>
      <section id="contact" className="contact-section section-pad">
          <div className="contact-block">
            <div>
              <h2>Ready to transform your <em>data?</em></h2>
              <p>Let&apos;s build smarter workflows and data systems that drive real business impact.</p>
            </div>
            <a className="button button-dark" href="/contact-us">
              Get in touch <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        </main>
    <SiteFooter /></div>;
}
