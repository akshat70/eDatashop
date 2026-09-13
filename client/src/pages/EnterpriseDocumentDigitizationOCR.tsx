import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  Archive,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileImage,
  FileText,
  Gauge,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "High-volume paper and image archive conversion",
  "Invoice, form, and record digitization programs",
  "Handwritten and printed text extraction with cleanup",
  "Indexing and searchable digital delivery for operations teams",
];

const workflow = [
  { step: "01", title: "Assess the archive", text: "We review document types, condition, handling needs, metadata requirements, and quality expectations before digitization begins." },
  { step: "02", title: "Capture carefully", text: "We scan, normalize, and classify source records using workflows suited to paper, microfilm, and image-based files." },
  { step: "03", title: "Extract and refine", text: "We run OCR/ICR, line-item capture, cleanup, and validation to improve accuracy and searchability." },
  { step: "04", title: "Deliver and govern", text: "We package searchable records, indexed metadata, and secure digital outputs for operational and archival use." },
];

export default function EnterpriseDocumentDigitizationOCR() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/enterprise-data-document-digitization">Enterprise Data, Document & Digitization Services</Link>
              <span>/</span>
              <strong>Enterprise Document Digitization & OCR</strong>
            </nav>

            <h1>
              From paper archives to <em>searchable business systems.</em>
            </h1>
            <p>
              We help organizations transform legacy records, paper workflows, and image-heavy document sets into clean, accessible digital assets that are easier to search, validate, and reuse.
            </p>

            <div className="service-hero-actions">
              <a className="button button-primary" href="/contact-us">
                Talk to an expert <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#approach">
                Explore the approach <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          <div className="service-hero-art" aria-label="Enterprise document digitization illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <ScanLine size={42} strokeWidth={1.2} />
              <span className="mono-label">OCR / DIGITIZE</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Scan</span></div>
            <div className="art-chip chip-two"><FileImage size={16} /><span>Images</span></div>
            <div className="art-chip chip-three"><FileText size={16} /><span>Text</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support high-volume scanning, OCR/ICR processing, cleanup, validation, indexing, archive preparation, and searchable delivery for records that still live in paper or image-heavy formats.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Secure and traceable</strong>
                <span>Quality control and exception review are built into each digitization stage.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Built for operations</strong>
                <span>Searchable and structured outputs support retrieval, downstream automation, and reporting.</span>
              </div>
            </div>

            <h3>Typical use cases</h3>
            <div className="service-bullet-grid">
              {useCases.map((item) => (
                <div key={item}>
                  <Check size={15} />
                  {item}
                </div>
              ))}
            </div>

            <div className="service-specific-grid">
              <div>
                <span className="mono-label accent-label">DELIVERABLES</span>
                <ul>
                  <li><Check size={16} />High-resolution scanned files and archival images</li>
                  <li><Check size={16} />Searchable digital text with OCR/ICR enhancement</li>
                  <li><Check size={16} />Indexed metadata and secured archive-ready packages</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Banks, insurers, and public institutions</li>
                  <li><Check size={16} />Healthcare, legal, and operational records teams</li>
                  <li><Check size={16} />Organizations modernizing paper and image workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the records <span>your teams rely on.</span></h2>
            <p>
              Digitization works best when the source media, quality checks, OCR/ICR logic, metadata, and delivery experience are designed around the real operational use case instead of a generic scan-and-store workflow.
            </p>
          </div>

          <div className="workflow-list">
            {workflow.map((item) => (
              <div className="workflow-step" key={item.step}>
                <span className="workflow-number mono-label">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="service-proof-section section-pad section-grey">
          <div className="contact-block">
            <h2>Turn paper-driven<br /><em>workflows into digital clarity.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are managing records, reducing retrieval delays, or preparing archives for digital operations, a strong digitization approach turns static files into accurate, searchable assets.
            </p>
            <a href="/contact-us" className="text-link">Build your digitization program <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
