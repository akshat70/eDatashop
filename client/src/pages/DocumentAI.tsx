import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileText,
  Gauge,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Forms, invoices, contracts, and records with structured extraction needs",
  "OCR and classification for large document collections and archives",
  "Table, key-value, and metadata capture in enterprise operating workflows",
  "Human review and exception handling for low-confidence or complex documents",
];

const workflow = [
  { step: "01", title: "Assess the intake", text: "We review your document types, formats, quality issues, and downstream outcomes before the processing workflow begins." },
  { step: "02", title: "Capture and classify", text: "We ingest the files, separate document types, and normalize layouts to create a consistent processing structure." },
  { step: "03", title: "Extract and validate", text: "We run OCR/ICR, layout analysis, key-field capture, and human-review checks to confirm the result quality." },
  { step: "04", title: "Deliver and integrate", text: "We format the output for your systems, package metadata, and support handoff into downstream workflows or repositories." },
];

export default function DocumentAI() {
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
              <strong>Document AI & Intelligent Document Processing</strong>
            </nav>

            <h1>
              Turn documents into <em>structured business value.</em>
            </h1>
            <p>
              We help organizations convert complex, high-volume document sets into clean, searchable, structured information that supports automation, analytics, and operational decision-making.
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

          <div className="service-hero-art" aria-label="Document AI illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <ScanLine size={42} strokeWidth={1.2} />
              <span className="mono-label">DOC / AI</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>OCR</span></div>
            <div className="art-chip chip-two"><FileText size={16} /><span>Forms</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Data</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we support</h2>
              <p className="service-detail-lead">
                We support document classification, OCR/ICR processing, structured extraction, field validation, metadata enrichment, and downstream delivery for business-critical document workflows.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Operationally reliable</strong>
                <span>We combine smart extraction with review workflows for the documents that need control and traceability.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Designed for scale</strong>
                <span>Structured outputs support search, analytics, automation, compliance, and downstream systems.</span>
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
                  <li><Check size={16} />Searchable, normalized document outputs</li>
                  <li><Check size={16} />Structured data for records, forms, tables, and metadata</li>
                  <li><Check size={16} />Exception and QA reports for low-confidence or complex cases</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Finance, healthcare, insurance, and legal operations</li>
                  <li><Check size={16} />Back-office and records-driven workflows</li>
                  <li><Check size={16} />Organizations digitizing operational knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the details <span>that drive decision-making.</span></h2>
            <p>
              Document AI is most effective when high-volume workflows are structured around extraction accuracy, traceability, and business rules that match the way the organization actually works.
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
            <h2>Turn paperwork into<br /><em>clean operational data.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are digitizing forms, extracting business metadata, or building a full document processing program, strong IDP design turns unstructured content into usable operational value.
            </p>
            <a href="/contact-us" className="text-link">Build your document AI workflow <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
