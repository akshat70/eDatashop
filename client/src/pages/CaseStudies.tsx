import SiteFooter from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import ServicesHeader from "@/components/ServicesHeader";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudies() {
  return <div className="cases-page"><div className="announcement-bar"><span className="mono-label announcement-label">EDATASHOP / PROOF IN PRACTICE</span><span>From digital content transformation to AI data services.</span><Link href="/contact-us" className="announcement-link">Start a conversation <ArrowUpRight size={14} /></Link></div><ServicesHeader />
    <main><section className="cases-hero section-pad"><div><span className="mono-label accent-label">SELECTED ENGAGEMENTS / 01—08</span><h1>Work that turns<br /><em>complex inputs</em><br />into useful outcomes.</h1></div><div className="cases-hero-aside"><p>Eight examples spanning digital publishing, XML, research data, healthcare forms, computer vision, agriculture, egocentric collection, and 3D annotation.</p><div className="cases-hero-index"><span>CONTENT</span><span>DATA</span><span>AI</span><span>IMPACT</span></div></div></section>
      <section className="cases-archive section-pad section-white"><div className="section-heading split-heading"><div><span className="mono-label accent-label">The work</span><h2>Source. Process.<br /><span>Outcome.</span></h2></div><p>Each case study shows the challenge, our operating approach, and what the transformed data made possible.</p></div><div className="cases-grid cases-grid-text">{caseStudies.map((study, index) => <article className={`case-card case-card-text ${index === 0 ? "case-featured" : ""}`} key={study.slug}><div className="case-card-body"><div className="case-card-topline"><span className="case-text-number mono-label">{String(index + 1).padStart(2, "0")}</span><span className="mono-label">{study.category}</span></div><h3><Link href={`/case-studies/${study.slug}`}>{study.title}</Link></h3><p>{study.subtitle}</p><Link href={`/case-studies/${study.slug}`} className="text-link">Read case study <ArrowUpRight size={15} /></Link></div></article>)}</div></section>
      <section className="cases-contact section-pad"><span className="mono-label contact-label">YOUR WORK COULD BE NEXT</span><h2>Bring us the<br /><em>messy part.</em></h2><p>Tell us what is difficult to digitize, structure, label, or scale.</p><Link className="button button-dark" href="/contact-us">Talk to a data expert <ArrowUpRight size={18} /></Link></section></main>
      <SiteFooter /></div>;
}
