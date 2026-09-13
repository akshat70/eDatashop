import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  HardDrive,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Legacy data migration into modern warehouses and lakehouses",
  "System modernization and repository cutover projects",
  "Structured historical rebuilds for analytics and operations",
  "Secure migration with rollback and reconciliation controls",
];

const workflow = [
  { step: "01", title: "Assess the source", text: "We review source systems, data volumes, structures, dependencies, quality issues, and cutover requirements before migration begins." },
  { step: "02", title: "Design the target", text: "We define the destination schema, layers, mappings, controls, and transitional rules that will support reliable loading." },
  { step: "03", title: "Move and validate", text: "We build migration logic, run proof-of-concept loads, reconcile outputs, and review gaps before final cutover." },
  { step: "04", title: "Cut over and handoff", text: "We support acceptance, operational monitoring, documentation, and the final transition into the warehouse or repository." },
];

export default function DataMigrationWarehousing() {
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
              <strong>Data Migration & Warehousing</strong>
            </nav>

            <h1>
              Move legacy data into a <em>safer, smarter target.</em>
            </h1>
            <p>
              We help organizations migrate data into modern repositories and analytical environments with careful conversion, validation, reconciliation, and controlled cutover planning.
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

          <div className="service-hero-art" aria-label="Data migration and warehousing illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <HardDrive size={42} strokeWidth={1.2} />
              <span className="mono-label">MOVE / LOAD</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Map</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Schema</span></div>
            <div className="art-chip chip-three"><RefreshCcw size={16} /><span>Reconcile</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Warehouse</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support source inventory, target design, conversion, cleansing, mapping, loading, validation, reconciliation, and cutover planning for organizations moving into modern storage, warehouse, and operational environments.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Lower-risk transition</strong>
                <span>We plan and validate the migration so teams can reduce operational disruption and data uncertainty.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Ready for use</strong>
                <span>Target data is shaped for reporting, analytics, operations, and long-term stewardship.</span>
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
                  <li><Check size={16} />Migration assessment, mapping, and cutover plan</li>
                  <li><Check size={16} />Converted and loaded target datasets</li>
                  <li><Check size={16} />Validation, reconciliation, and runbook records</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Government, healthcare, and financial modernization</li>
                  <li><Check size={16} />Analytics and warehouse platform adoption</li>
                  <li><Check size={16} />Legacy systems transitioning to modern data platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the move <span>that has to work the first time.</span></h2>
            <p>
              Migration quality depends on architecture clarity, source understanding, destination design, validation discipline, and a deliberate cutover plan built around operational realities.
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
            <h2>Modernize your data<br /><em>without losing control.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are moving into a warehouse, a lakehouse, or a new operational repository, deliberate migration planning keeps the transition safe, actionable, and governed.
            </p>
            <a href="/contact-us" className="text-link">Plan your migration <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
