import SiteFooter from "@/components/SiteFooter";
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, CalendarDays, FileScan, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";
import blogHero from "./images/blog-hero.jpg";
import blog1 from "./images/blog1.webp";
import blog2 from "./images/blog2.webp";
import blog3 from "./images/blog3.webp";
import blog4 from "./images/blog4.webp";
import blog5 from "./images/blog5.webp";
import blog6 from "./images/blog6.webp";
import blog7 from "./images/blog7.webp";
import blog8 from "./images/blog8.webp";
import blog9 from "./images/blog9.webp";
import blog10 from "./images/blog10.webp";
import blog11 from "./images/blog11.webp";

const posts = [
  { category: "Data operations", title: "Achieving High Accuracy at Low Costs: The Power of Data Entry Outsourcing", excerpt: "How specialist delivery combines cost-effectiveness with quality outcomes for data-driven teams.", date: "August 21, 2025", image: blog1, href: "/blog/accuracy-outsourcing" },
  { category: "Security", title: "Ensuring Data Security in Data Entry Outsourcing: Best Practices and Precautions", excerpt: "A practical guide to protecting confidentiality, integrity, and availability when work moves beyond your walls.", date: "August 21, 2025", image: blog2, href: "/blog/security-outsourcing" },
  { category: "Quality", title: "Enhancing Data Accuracy: Single Entry vs. Double Entry Methods", excerpt: "Understand the difference between single and double entry workflows and when each makes sense.", date: "August 21, 2025", image: blog3, href: "/blog/single-double-entry" },
  { category: "Security", title: "Safeguarding Your Data: Best Practices for Secure Transmission in Data Entry Outsourcing", excerpt: "Essential precautions for moving financial, medical, and proprietary information safely.", date: "August 21, 2025", image: blog4, href: "/blog/secure-transmission" },
  { category: "Data operations", title: "Mastering Handwritten Data Entry: Best Practices for Accuracy and Efficiency", excerpt: "Strategies for converting historical records, forms, and handwritten documents into dependable digital data.", date: "August 21, 2025", image: blog5, href: "/blog/handwritten-data" },
  { category: "Workflow", title: "Streamlining Operations: A Comprehensive Guide to Outsourcing Forms Processing", excerpt: "The workflow, controls, and delivery practices behind efficient forms processing at scale.", date: "August 21, 2025", image: blog6, href: "/blog/forms-processing" },
  { category: "Quality", title: "Outsourcing Form Data Entry: Strategies for Cost Control and Quality Assurance", excerpt: "How to manage cost factors without compromising the accuracy and consistency of form data.", date: "August 21, 2025", image: blog7, href: "/blog/form-data-entry" },
  { category: "Strategy", title: "To Outsource Data Entry or Not: Making the Right Choice for Your Business", excerpt: "A balanced framework for deciding when external expertise can improve efficiency and business focus.", date: "August 21, 2025", image: blog8, href: "/blog/outsource-decision" },
  { category: "People", title: "Ethical Outsourcing: Ensuring Fair Labor Practices in Data Entry Services", excerpt: "Why responsible delivery starts with fair, humane working conditions for the people behind the data.", date: "August 21, 2025", image: blog9, href: "/blog/ethical-outsourcing" },
  { category: "India", title: "Empowering Communities Through Data Entry Services in India", excerpt: "The role of India’s data services sector in creating opportunity while delivering reliable business support.", date: "August 21, 2025", image: blog10, href: "/blog/india-data-entry" },
  { category: "OCR & digitisation", title: "Clean Images: Precision OCR for Data Conversion", excerpt: "How scan quality influences OCR accuracy, accessibility, and the quality of the final digital record.", date: "October 13, 2025", image: blog11, href: "/blog/clean-images-ocr" },
];

const topics = ["All insights", "Data operations", "Security", "Quality", "OCR & digitisation", "People"];

export default function Blog() {
  return <div className="blog-page"><div className="announcement-bar"><span className="mono-label announcement-label">EDATASHOP / FIELD NOTES</span><span>Ideas for making information useful.</span><a href="/contact-us" className="announcement-link">Talk to our team <ArrowUpRight size={14} /></a></div><ServicesHeader />
    <main>
      <section className="blog-hero section-pad">
        <div className="blog-hero-copy">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link><span>/</span><strong>Blogs</strong>
          </nav>
          <h1>Useful thinking for <em>messy information.</em></h1>
          <p>Practical perspectives on data entry, security, digitisation, quality, and the human systems that make information work harder.</p>
          <a className="button button-primary" href="#insights">Explore the archive <ArrowDownRight size={17} /></a>
        </div>
        <div className="blog-hero-art">
          <img src={blogHero} alt="Documents and data lines moving into a structured grid" />
          <div className="blog-hero-overlay">
            <span className="mono-label">LATEST / OCR & DATA CONVERSION</span>
            <strong>From image to insight.</strong><ArrowUpRight size={20} />
          </div>
        </div>
      </section>
      <section id="insights" className="blog-archive section-pad section-white">
        <div className="section-heading split-heading">
          <div>
            <h2>Ideas for the work <span>between inputs and outcomes.</span></h2>
          </div>
          <p>Eleven practical reads from the eDataShop archive, covering the questions teams face when information needs to be accurate, secure, and ready to use.</p>
        </div>
        <div className="blog-toolbar">
          <div className="topic-list">{topics.map((topic, index) => <a href={index === 0 ? "#insights" : `#${topic.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} className={index === 0 ? "active" : ""} key={topic}>{topic}</a>)}</div>
          <span className="archive-count mono-label">11 ARTICLES / 2025</span>
        </div>
        <div className="blog-grid">{posts.map((post, index) => <article id={posts.findIndex((candidate) => candidate.category === post.category) === index ? post.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and") : undefined} className={`blog-card ${index === 0 ? "featured" : ""}`} key={post.title}>
          <Link href={post.href} className="blog-card-image">
            <img src={post.image} alt="" /><span className="blog-card-arrow"><ArrowUpRight size={18} /></span>
          </Link>
          <div className="blog-card-content">
            <div className="blog-card-meta">
              <span>{post.category}</span>
              <span><CalendarDays size={12} /> {post.date}</span>
            </div>
            <h3>
              <Link href={post.href}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <Link className="text-link" href={post.href}>Read article <ArrowUpRight size={15} /></Link>
          </div>
        </article>)}
        </div>
      </section>
      <section className="blog-trust section-pad"><div className="blog-trust-heading"><h2>Good data work is <span>human work.</span></h2></div><div className="blog-trust-list"><div><LockKeyhole size={20} /><h3>Security is part of the workflow</h3><p>Reliable information starts with disciplined handling, controlled access, and clear accountability.</p></div><div><ShieldCheck size={20} /><h3>Quality is designed in</h3><p>Accuracy is not a final inspection. It is a system of checks, feedback, and continuous improvement.</p></div><div><FileScan size={20} /><h3>Context makes data useful</h3><p>Digitisation and AI matter most when they help people find, understand, and act on what matters.</p></div></div></section>
      <section className="contact-section section-pad">
        <div className="contact-block">
          <div>
            <h2>Bring us your messy part.</h2>
            <p>Have a workflow question, a backlog, or a collection waiting to be digitised?</p>
          </div>

          <a className="button button-dark" href="/contact-us">
            Talk to a data expert <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
