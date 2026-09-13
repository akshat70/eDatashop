import SiteFooter from "@/components/SiteFooter";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import ServicesHeader from "@/components/ServicesHeader";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <div className="contact-page">
    <ServicesHeader />
    <main><section className="contact-hero section-pad">
      <div className="contact-hero-copy">
        <nav className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span><strong>Contact Us</strong>
        </nav>
        <h1>Let&apos;s make your data <em>do more.</em></h1><p>Tell us what is slowing your team down. We&apos;ll help you find the cleanest way forward, from a focused data workflow to a fully managed AI operation.</p>
        <div className="contact-proof">
          <span><Check size={15} /> 20+ years of experience</span>
          <span><Check size={15} /> ISO-certified operations</span>
          <span><Check size={15} /> Human + AI delivery</span>
        </div>
      </div>
      <div className="contact-hero-art"><div className="contact-art-grid" /><div className="contact-signal signal-one" /><div className="contact-signal signal-two" /><div className="contact-art-card"><span className="mono-label">INQUIRY / 001</span><strong>From first<br />conversation<br /><em>to useful data.</em></strong><ArrowUpRight size={21} /></div><div className="contact-art-orbit" /></div></section>
      <section className="contact-content section-pad section-white"><div className="contact-details">
        <h2>Get in <span>touch.</span></h2><p>Give us a call, drop us an email, or fill out the form. We&apos;ll get back to you with a clear next step.</p><div className="contact-location"><span className="mono-label">INDIA / NEW DELHI</span><h3>CyberData India</h3><p>Sanchi Building, 2nd Floor<br />77 Nehru Place<br />New Delhi – 110019, India</p><a href="tel:+911126213052"><Phone size={15} /> +91 11 2621 3052</a><a href="mailto:info@edatashop.com"><Mail size={15} /> info@edatashop.com</a></div><div className="contact-location"><span className="mono-label">NORTH AMERICA / HOUSTON</span><h3>Rakesh Bansal · VP Sales</h3><p>21122 Gatepoint Dr.<br />Houston, TX 77073, USA</p><a href="mailto:rakesh@edatashop.com"><Mail size={15} /> rakesh@edatashop.com</a></div><div className="contact-certifications"><span><ShieldCheck size={16} /> ISO 9001:2015</span><span><ShieldCheck size={16} /> ISO 27001:2013</span></div></div><div className="contact-form-panel"><div className="form-panel-heading"><span className="mono-label">TELL US ABOUT THE WORK</span><span className="form-required">* Required</span></div>{submitted ? <div className="form-success"><span className="success-mark"><Check size={25} /></span><h3>Message received.</h3><p>Thanks for reaching out. Our team will review your note and get back to you with a clear next step.</p><button className="button button-primary" onClick={() => setSubmitted(false)}>Send another message <ArrowUpRight size={17} /></button></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Name *<input required name="name" placeholder="Your name" /></label><label>Work email *<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input name="company" placeholder="Your organisation" /></label><label>What do you need? *<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>AI data and annotation</option><option>Enterprise data and digitisation</option><option>Generative AI and LLM services</option><option>Academic and cultural heritage</option><option>Engagement model / managed operations</option><option>Something else</option></select></label></div><label>Tell us a little about the work *<textarea required name="message" rows={6} placeholder="What are you trying to make more accurate, accessible, or useful?" /></label><button className="button button-primary" type="submit">Send enquiry <ArrowUpRight size={17} /></button><p className="form-note">We respect your privacy. Your details are used only to respond to this enquiry.</p></form>}</div></section>
      <section className="contact-next section-pad">
        <div>
          <h2>A calmer way to<br /><span>move forward.</span></h2>
        </div>
        <div className="contact-next-grid">
          <div>
            <span className="next-number">01</span>
            <Clock3 size={20} />
            <h3>We listen first</h3>
            <p>We understand your inputs, constraints, volumes, and desired outcome.</p>
          </div>
          <div>
            <span className="next-number">02</span><MapPin size={20} />
            <h3>We shape the path</h3>
            <p>We recommend a practical workflow and the right delivery model for the work.</p>
          </div>
          <div>
            <span className="next-number">03</span>
            <Check size={20} />
            <h3>We start clearly</h3>
            <p>You leave the first conversation with a clear next step—not a generic sales pitch.</p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter /></div>;
}
