import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileCode2,
  FileJson,
  FileSpreadsheet,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Legacy content modernization and format migration",
  "Data conversion across PDF, XML, Excel, HTML, and CAD sources",
  "Structured extraction from scanned or semi-structured content",
  "Cross-system transformation for digital operations and public delivery",
];

const workflow = [
  { step: "01", title: "Assess source content", text: "We review source formats, structure, quality gaps, and target requirements before mapping or conversion begins." },
  { step: "02", title: "Normalize and transform", text: "We convert and restructure files, tables, documents, and metadata to align with the destination format and rules." },
  { step: "03", title: "Validate integrity", text: "We check layout, fields, completeness, and governance requirements to reduce downstream issues and rework." },
  { step: "04", title: "Deliver and integrate", text: "We package the transformed output, support loading into target systems, and provide handoff guidance." },
];

export default function DataConversionContentTransformation() {
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
              <strong>Data Conversion & Content Transformation</strong>
            </nav>

            <h1>
              Turn content into <em>usable digital formats.</em>
            </h1>
            <p>
              We help organizations convert legacy content, documents, datasets, and media into the formats, structures, and systems their teams actually need to work with.
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

          <div className="service-hero-art" aria-label="Data conversion illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <RefreshCcw size={42} strokeWidth={1.2} />
              <span className="mono-label">FORMAT / FLOW</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Maps</span></div>
            <div className="art-chip chip-two"><FileSpreadsheet size={16} /><span>Data</span></div>
            <div className="art-chip chip-three"><FileJson size={16} /><span>JSON</span></div>
            <div className="art-chip chip-four"><FileCode2 size={16} /><span>XML</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support conversion across legacy, semi-structured, and structured assets—including text, tables, files, PDFs, XML, HTML, CAD, and other formats that need to be preserved and repurposed.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Accuracy-first</strong>
                <span>We validate the conversion outcome to preserve meaning, formatting, and business logic.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>System-ready</strong>
                <span>Outputs are shaped for downstream business workflows, repositories, and digital platforms.</span>
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
                  <li><Check size={16} />Converted files across required formats and schemas</li>
                  <li><Check size={16} />Structured and normalized output ready for downstream operations</li>
                  <li><Check size={16} />Validation and exception reporting for complex transformations</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Government, healthcare, and publishing workflows</li>
                  <li><Check size={16} />Legacy modernization and archive transition programs</li>
                  <li><Check size={16} />Teams migrating content between business systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the content <span>that has to survive the move.</span></h2>
            <p>
              Conversion only works when the source structure, formatting logic, metadata, and business context are preserved—not just the raw text or file type.
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
            <h2>Move information without<br /><em>losing meaning.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are rebuilding a content archive, migrating a publishing workflow, or normalizing data for an internal platform, conversion is only valuable if the result remains usable and trustworthy.
            </p>
            <a href="/contact-us" className="text-link">Plan your content transformation <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
