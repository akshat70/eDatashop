import SiteFooter from "@/components/SiteFooter";
import ctaImage from "./images/academic-heritage.jpg";
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, BookOpen, Check, ChevronRight, Landmark, ScanLine, Search, Sparkles } from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";

const services = [
  ["01", Landmark, "Digitisation of anthropological archives", "Preserve rare collections and make them accessible with careful digitisation, metadata, and research-ready structure.", ["Archive scanning", "Descriptive metadata", "Collection QA"]],
  ["02", Sparkles, "AI for cultural heritage", "Use AI thoughtfully to enrich cultural collections, discover hidden relationships, and open new paths into research.", ["Collection enrichment", "Semantic search", "Human-led interpretation"]],
];

export default function AcademicHeritageServices() {
  return <div className="service-page"><div className="announcement-bar"><span className="mono-label announcement-label">KNOWLEDGE / CULTURE / ACCESS</span><span>Preserve the past. Create new ways in.</span><a href="/contact-us" className="announcement-link">Start a conversation <ArrowUpRight size={14} /></a></div><ServicesHeader />
    <main>
      <section className="service-hero section-pad heritage-hero">
        <div className="service-hero-copy">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link><span>/</span><strong>Academic, Research & Cultural Heritage Services</strong>
          </nav>
          <h1>Make knowledge <em>more discoverable.</em></h1>
          <p>Bring archives, collections, and cultural knowledge into the future with careful digitisation and thoughtful AI-enabled discovery.</p>
          <div className="service-hero-actions">
            <a className="button button-primary" href="/contact-us">Discuss your collection <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#services">Explore services <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="service-hero-art heritage-art">
          <div className="heritage-paper paper-one"><BookOpen size={24} />
            <span>ARCHIVE 01</span>
          </div>
          <div className="heritage-paper paper-two"><Search size={24} />
            <span>DISCOVER 02</span>
          </div>
          <div className="heritage-orbit" />
          <div className="heritage-stamp">AI<br /><small>FOR<br />HERITAGE</small></div>
        </div>
      </section>
      <section id="services" className="service-list-section section-pad section-white"><div className="service-section-heading"><div>
        <h2>Give important knowledge <span>a future.</span></h2></div><p>Academic and cultural collections deserve both care and reach. We combine precise operations with research-aware thinking to make them easier to preserve, find, and use.</p></div><div className="category-service-grid heritage-grid">{services.map(([number, IconComponent, title, description, capabilities]) => { const Icon = IconComponent as typeof BookOpen; return <article className="category-service-card" key={number as string}><div className="category-card-top"><span className="mono-label">{number as string}</span><Icon size={21} strokeWidth={1.5} /></div><span className="service-card-kicker">Research and heritage layer</span><h3>{title as string}</h3><p>{description as string}</p><ul>{(capabilities as string[]).map((capability) => <li key={capability}><Check size={14} />{capability}</li>)}</ul><a href="/contact-us" className="category-card-link">Explore this service <ChevronRight size={16} /></a></article>; })}</div></section>
      <section id="method" className="service-method-section section-pad"><div className="method-intro">
        <h2>Careful with the source. <span>Curious about what&apos;s next.</span></h2><p>We treat collections as more than files. The work is about preservation, context, access, and creating new ways for people to encounter knowledge.</p></div><div className="workflow-list"><div className="workflow-step"><span className="workflow-number mono-label">01</span><div><h3>Preserve the source</h3><p>High-fidelity capture, controlled processing, and secure collection handling protect the original.</p></div><ArrowUpRight size={17} /></div><div className="workflow-step"><span className="workflow-number mono-label">02</span><div><h3>Describe the context</h3><p>Metadata, taxonomy, and research-aware review make a collection understandable and useful.</p></div><ArrowUpRight size={17} /></div><div className="workflow-step"><span className="workflow-number mono-label">03</span><div><h3>Open new paths</h3><p>Search, enrichment, and AI-assisted discovery help more people find the stories inside.</p></div><ArrowUpRight size={17} /></div></div></section>
      <section className="service-proof-3-section section-pad section-grey">
        <div className="contact-block">
          <h2>Access<br /><em>with care.</em></h2>
        </div>
        <div className="proof-copy"><p>The most valuable collection is one that can be responsibly found, understood, and carried forward by the next generation of researchers.</p><a href="/contact-us" className="text-link">Start a collection project <ArrowUpRight size={17} /></a></div>
        <div className="proof-visual">
          <img src={ctaImage} alt="Abstract orange model core with data streams and neural pathways" />
        </div>
      </section>
    </main><SiteFooter /></div>;
}
