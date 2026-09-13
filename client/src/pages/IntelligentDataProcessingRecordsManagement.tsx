import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileArchive,
  FileText,
  Layers3,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "High-volume records capture and structured document intake",
  "Document classification, validation, indexing, and retention support",
  "Secure digital archiving and long-term record access workflows",
  "Operational back-office modernization around records and governance",
];

const workflow = [
  { step: "01", title: "Inventory the records", text: "We review the record types, volume, metadata needs, retention requirements, and handling rules before processing begins." },
  { step: "02", title: "Capture and classify", text: "We capture incoming information through data entry, scanning, OCR/ICR, or conversion and classify it into the relevant record structure." },
  { step: "03", title: "Validate and enrich", text: "We cleanse, standardize, index, and enrich the records so they are accurate, traceable, and easier to retrieve." },
  { step: "04", title: "Preserve and govern", text: "We support access, delivery, lifecycle control, and archival management so records remain usable and compliant over time." },
];

export default function IntelligentDataProcessingRecordsManagement() {
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
              <strong>Intelligent Data Processing & Records Management</strong>
            </nav>

            <h1>
              Bring structure, access, and life-cycle control to <em>critical records.</em>
            </h1>
            <p>
              We help organizations process, govern, and preserve the records and administrative information that underpin operations, compliance, and service delivery.
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

          <div className="service-hero-art" aria-label="Record processing illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <FileArchive size={42} strokeWidth={1.2} />
              <span className="mono-label">RECORDS / PROCESS</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Index</span></div>
            <div className="art-chip chip-two"><FileText size={16} /><span>Docs</span></div>
            <div className="art-chip chip-three"><Layers3 size={16} /><span>Flow</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support records intake, scanning, OCR, conversion, index creation, metadata enrichment, secure archiving, and lifecycle-driven governance for organizations dealing with high-volume operational information.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Governance-aware</strong>
                <span>Access, traceability, and retention rules are built into the workflow from the start.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Operationally accessible</strong>
                <span>Records become easier to find, use, route, and preserve over time.</span>
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
                  <li><Check size={16} />Searchable digitized records and document files</li>
                  <li><Check size={16} />Structured, cleansed, and metadata-enriched datasets</li>
                  <li><Check size={16} />Retention and governance-ready record index and archive package</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Government and public-sector records teams</li>
                  <li><Check size={16} />Insurance, legal, and claims administration</li>
                  <li><Check size={16} />High-volume back-office and administrative workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the records <span>that carry business continuity.</span></h2>
            <p>
              Reliable record management depends on accurate capture, consistent indexing, metadata discipline, and a governance model that supports access and preservation over time.
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
            <h2>Make critical records<br /><em>easy to access and trust.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether your challenge is paper-heavy archives, fragmented administrative records, or weak indexing, a structured records workflow creates visibility, control, and long-term usefulness.
            </p>
            <a href="/contact-us" className="text-link">Build your records workflow <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
