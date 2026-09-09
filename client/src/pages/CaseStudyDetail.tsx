import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useRoute } from "wouter";
import ServicesHeader from "@/components/ServicesHeader";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:slug");
  const study = getCaseStudy(params?.slug ?? "");
  if (!study) return <div className="case-detail-page"><ServicesHeader /><main className="not-found-state"><span className="mono-label accent-label">CASE STUDY NOT FOUND</span><h1>That project is not in the current collection.</h1><Link href="/case-studies" className="button button-primary">View all case studies <ArrowUpRight size={17} /></Link></main></div>;
  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);
  return <div className="case-detail-page"><ServicesHeader />
    <main><section className="case-detail-hero section-pad"><nav className="case-breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case studies</Link><span>/</span><strong>{study.title}</strong></nav><div className="case-detail-heading"><div><h1>{study.title}</h1></div><div className="case-client"><span className="mono-label">ENGAGEMENT</span><strong>{study.client}</strong><p>{study.subtitle}</p></div></div><a className="case-detail-image" href={study.image} target="_blank" rel="noreferrer"><img src={study.image} alt={`${study.title} source and output case-study visual`} /><span>View full image <ArrowUpRight size={15} /></span></a></section>
      <section className="case-story section-pad section-white"><div className="case-story-main"><Link href="/case-studies" className="case-all-link"><ArrowLeft size={15} /> All case studies</Link><section><span className="mono-label accent-label">PROJECT OVERVIEW</span>{study.overview.map((paragraph) => <p className="case-lead" key={paragraph}>{paragraph}</p>)}</section><div className="case-two-column"><section><span className="mono-label accent-label">THE CHALLENGE</span><ul>{study.challenge.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></section><section><span className="mono-label accent-label">OUR SOLUTION</span><ul>{study.solution.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></section></div><section className="case-impact"><span className="mono-label">BUSINESS IMPACT</span>{study.impact.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></div></section>
      <section className="case-related section-pad"><div className="section-heading split-heading"><div><span className="mono-label accent-label">More proof in practice</span><h2>Continue through<br /><span>the work.</span></h2></div><p>Explore adjacent engagements across digital content, research data, computer vision, and AI operations.</p></div><div className="case-related-grid">{related.map((item) => <Link href={`/case-studies/${item.slug}`} key={item.slug}><img src={item.image} alt="" /><div><span className="mono-label">{item.category}</span><h3>{item.title}</h3><ArrowUpRight size={16} /></div></Link>)}</div></section>
      <section className="cases-contact section-pad"><span className="mono-label contact-label">HAVE A SIMILAR CHALLENGE?</span><h2>Let&apos;s turn it into<br /><em>a useful outcome.</em></h2><p>Share the source, scale, constraints, and output you need.</p><Link className="button button-dark" href="/contact-us">Start a conversation <ArrowUpRight size={18} /></Link></section></main>
      <SiteFooter /></div>;
}
