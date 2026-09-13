import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Enterprise data ingestion from files, APIs, CRMs, and ERPs",
  "ETL/ELT pipelines for reporting, warehousing, and analytics",
  "Data reconciliation and transformation across critical workflows",
  "Operational and governance-focused pipeline modernization",
];

const workflow = [
  { step: "01", title: "Map the ecosystem", text: "We review sources, targets, dependencies, quality expectations, and business rules before building the pipeline." },
  { step: "02", title: "Extract and stage", text: "We collect source data into controlled landing or staging layers to keep the process auditable and resilient." },
  { step: "03", title: "Transform and validate", text: "We cleanse, normalize, map, enrich, and test data so it is ready for business use or analytics consumption." },
  { step: "04", title: "Load and monitor", text: "We deliver the data to the target environment and support reconciliation, reporting, and continuous run monitoring." },
];

export default function DataEngineeringETL() {
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
              <strong>Data Engineering & ETL</strong>
            </nav>

            <h1>
              Build the pipelines that keep data <em>moving and usable.</em>
            </h1>
            <p>
              We help organizations design and implement the extraction, transformation, loading, governance, and monitoring workflows needed to move data across systems with control and clarity.
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

          <div className="service-hero-art" aria-label="Data engineering illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <GitBranch size={42} strokeWidth={1.2} />
              <span className="mono-label">ETL / FLOW</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Extract</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Stage</span></div>
            <div className="art-chip chip-three"><RefreshCcw size={16} /><span>Transform</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Load</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support source-to-target design, data movement, staging, transformation, validation, reconciliation, and operational monitoring for data pipelines that must work reliably at scale.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Production-ready</strong>
                <span>We design for reliability, traceability, and business continuity from extraction to loading.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Operationally useful</strong>
                <span>Pipelines are shaped around the systems, teams, and decisions they support.</span>
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
                  <li><Check size={16} />Source-to-target mapping and pipeline design</li>
                  <li><Check size={16} />Configured ETL/ELT processes and transformations</li>
                  <li><Check size={16} />Reconciliation, validation, and runbook documentation</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Analytics, warehousing, and operational reporting teams</li>
                  <li><Check size={16} />Organizations modernizing legacy integrations</li>
                  <li><Check size={16} />Teams needing reliable data movement across systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the data <span>your operations depend on.</span></h2>
            <p>
              A dependable pipeline combines source understanding, transformation logic, quality rules, and operational monitoring so teams can trust what moves and what lands.
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
            <h2>Keep workflows moving with<br /><em>reliable data pipelines.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are connecting sources, moving data into a warehouse, or modernizing reporting infrastructure, strong ETL design turns data movement into a dependable operating capability.
            </p>
            <a href="/contact-us" className="text-link">Design your pipeline <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
