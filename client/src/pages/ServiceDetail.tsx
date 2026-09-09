import SiteFooter from "@/components/SiteFooter";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Link, useRoute } from "wouter";
import ServicesHeader from "@/components/ServicesHeader";
import { getServicePage, servicePages } from "@/lib/servicePages";

export default function ServiceDetail() {
  const [, params] = useRoute("/service/:slug");
  const service = getServicePage(params?.slug ?? "");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  if (!service) return <div className="service-detail-page"><ServicesHeader /><main className="not-found-state"><span className="mono-label accent-label">SERVICE NOT FOUND</span><h1>That service is not in the current catalogue.</h1><Link href="/" className="button button-primary">Back home <ArrowUpRight size={17} /></Link></main></div>;
  const related = servicePages.filter((item) => item.categoryPath === service.categoryPath && item.slug !== service.slug).slice(0, 3);
  return <div className="service-detail-page"><ServicesHeader />
    <main>
      <section className="service-detail-hero section-pad">
        <div className="service-detail-copy">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span><Link href={service.categoryPath}>{service.category}</Link>
            <span>/</span><strong>{service.title}</strong>
          </nav>
            <h1>{service.title}</h1><p>{service.intro}</p></div><div className="service-hero-form"><div className="service-form-heading"><span className="mono-label">TELL US ABOUT THE WORK</span><span>Usually replies within one business day.</span></div>{submitted ? <div className="service-form-success"><span className="service-success-mark"><Check size={21} /></span><h3>Message received.</h3><p>Thanks for reaching out. We&apos;ll review your note and come back with a practical next step.</p><button className="button button-primary" onClick={() => setSubmitted(false)}>Send another message <ArrowUpRight size={16} /></button></div> : <form onSubmit={handleSubmit}><input type="hidden" name="service" value={service.title} /><div className="service-form-row"><label>Name *<input required name="name" placeholder="Your name" /></label><label>Work email *<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>Company<input name="company" placeholder="Your organisation" /></label><label>What are you working on? *<textarea required name="message" rows={3} placeholder={`Tell us about your ${service.title.toLowerCase()} requirements`} /></label><button className="button button-primary" type="submit">Send enquiry <ArrowUpRight size={16} /></button></form>}</div></section>
      <section className="service-detail-body section-pad section-white"><div className="service-detail-main"><div className="service-section-intro"><span className="mono-label accent-label">ABOUT THIS SERVICE</span><p className="service-detail-lead">{service.body}</p></div><div className="service-outcomes"><div><ShieldCheck size={19} /><strong>Quality-minded</strong><span>Clear guidelines, review loops, and measurable outputs.</span></div><div><Check size={19} /><strong>Built to fit</strong><span>Workflows shaped around your systems and operating reality.</span></div></div><h3>What we can support</h3><div className="service-bullet-grid">{service.bullets.map((bullet) => <div key={bullet}><Check size={15} />{bullet}</div>)}</div><div className="service-specific-grid"><div><span className="mono-label accent-label">DELIVERABLES</span><ul>{service.deliverables.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div><div><span className="mono-label accent-label">BUILT FOR</span><ul>{service.industries.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div></div><p className="service-source-note">{service.sourceNote}</p></div></section>
      <section className="service-process section-pad"><div className="service-process-heading"><span className="mono-label accent-label">HOW WE WORK</span><h2>From raw inputs<br /><span>to reliable output.</span></h2></div><div className="service-process-grid">{service.workflow.map((step, index) => <div key={step}><span className="process-number">{String(index + 1).padStart(2, "0")}</span><strong>{["Scope", "Prepare", "Produce", "Assure", "Deliver", "Improve"][index] ?? "Execute"}</strong><p>{step}</p></div>)}</div></section>
      {related.length > 0 && <section className="service-related section-pad section-grey"><div className="section-heading split-heading"><div><span className="mono-label accent-label">Continue exploring</span><h2>More from this <span>capability.</span></h2></div><p>If this is one part of the work you are solving, these adjacent services may help complete the picture.</p></div><div className="service-related-grid">{related.map((item) => <Link href={`/service/${item.slug}`} className="service-related-card" key={item.slug}><span className="mono-label">{item.label}</span><h3>{item.title}</h3><ArrowUpRight size={17} /></Link>)}</div></section>}
      <section id="contact" className="service-detail-contact section-pad"><span className="mono-label contact-label">READY WHEN YOU ARE</span><h2>Bring us the<br /><em>messy part.</em></h2><p>Tell us what you need to make more accurate, accessible, or useful.</p><a className="button button-dark" href={`mailto:info@edatashop.com?subject=Service%20enquiry%20-%20${encodeURIComponent(service.title)}`}>Talk to a data expert <ArrowUpRight size={18} /></a></section></main>
      <SiteFooter /></div>;
}
