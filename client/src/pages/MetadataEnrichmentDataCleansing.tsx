import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  Filter,
  ListFilter,
  ShieldCheck,
  Sparkles,
  Tags,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Catalog quality improvement for operational and enterprise data",
  "Deduplication and standardization across large datasets",
  "Metadata enrichment for search, discovery, and AI readiness",
  "Validation and governance for critical business records",
];

const workflow = [
  { step: "01", title: "Profile the data", text: "We review quality gaps, duplicate patterns, schema issues, metadata coverage, and business rules before cleanup begins." },
  { step: "02", title: "Standardize and cleanse", text: "We normalize values, remove inconsistencies, validate fields, and align records to approved naming and formatting rules." },
  { step: "03", title: "Enrich and map", text: "We add metadata, connect authoritative references, and structure records so they are easier to find, trust, and reuse." },
  { step: "04", title: "Deliver and monitor", text: "We package the cleaned, enriched dataset along with exception reports and governance guidance for ongoing quality." },
];

export default function MetadataEnrichmentDataCleansing() {
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
              <strong>Metadata Enrichment & Data Cleansing</strong>
            </nav>

            <h1>
              Make data more <em>trustworthy and discoverable.</em>
            </h1>
            <p>
              We help organizations clean, standardize, enrich, and align enterprise information so it is easier to use across search, operations, AI, and decision-making systems.
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

          <div className="service-hero-art" aria-label="Metadata enrichment illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Database size={42} strokeWidth={1.2} />
              <span className="mono-label">CLEAN / ENRICH</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Map</span></div>
            <div className="art-chip chip-two"><Tags size={16} /><span>Tags</span></div>
            <div className="art-chip chip-three"><ListFilter size={16} /><span>Filter</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support profiling, cleansing, standardization, deduplication, metadata tagging, enrichment, validation, and governance improvements for enterprise information that must be trusted and reused.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Governed quality</strong>
                <span>We unify rules, metadata, and validation so teams can trust the information they rely on.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Search-ready</strong>
                <span>Clean and enriched records are easier to find, segment, and activate across systems.</span>
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
                  <li><Check size={16} />Cleansed and standardized datasets</li>
                  <li><Check size={16} />Metadata enrichment and validated field mappings</li>
                  <li><Check size={16} />Exception reports and quality governance guidance</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Retail, finance, healthcare, and education data teams</li>
                  <li><Check size={16} />Search, knowledge, and AI readiness programs</li>
                  <li><Check size={16} />Organizations reducing duplication and inconsistency at scale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for data <span>that has to be trusted.</span></h2>
            <p>
              Reliable data quality is not a one-time cleanup exercise—it is a structured process of profiling, validation, standardization, enrichment, and ongoing governance.
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
            <h2>Turn inconsistent records into<br /><em>usable knowledge.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether your challenge is poor metadata, duplicate records, inconsistent naming, or weak search quality, structured cleansing and enrichment create a stronger data foundation for operations and AI.
            </p>
            <a href="/contact-us" className="text-link">Improve your data quality <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
