import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileArchive,
  FileText,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Digitization of fieldnotes, journals, correspondence, and manuscripts",
  "Preservation capture for maps, photographs, drawings, and ephemera",
  "Metadata and finding aid preparation for research and access workflows",
  "High-fidelity archive conversion for institutions and community collections",
];

const workflow = [
  { step: "01", title: "Assess the collection", text: "We review the materials, item types, condition, rights, metadata needs, and preservation priorities before digitization begins." },
  { step: "02", title: "Prepare and capture", text: "We arrange records, handle fragile materials appropriately, and capture high-quality image or document files with preservation standards in mind." },
  { step: "03", title: "Process and enrich", text: "We apply OCR/ICR, classify records, build metadata structures, and connect items to the right archive or catalog context." },
  { step: "04", title: "Deliver and preserve", text: "We provide access-ready assets, validated outputs, and a clear record of the digitization process for institutional reuse." },
];

export default function DigitisationAnthropologicalArchives() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/academic-research-cultural-heritage">Academic, Research & Cultural Heritage Solutions</Link>
              <span>/</span>
              <strong>Digitisation of Anthropological Archives</strong>
            </nav>

            <h1>
              Preserve the source and open the <em>collection to new audiences.</em>
            </h1>
            <p>
              We help institutions digitize field records, manuscripts, photographs, maps, and archival materials with care, structure, and contextual metadata that supports both preservation and research access.
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

          <div className="service-hero-art" aria-label="Anthropological archives illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <FileArchive size={42} strokeWidth={1.2} />
              <span className="mono-label">ARCHIVE / PRESERVE</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Index</span></div>
            <div className="art-chip chip-two"><FileText size={16} /><span>Records</span></div>
            <div className="art-chip chip-three"><MapPinned size={16} /><span>Context</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Access</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support high-fidelity digitization, metadata creation, OCR/ICR, archival indexing, file organization, and secure delivery for anthropological collections, archives, and field-based records.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Preservation-first</strong>
                <span>We focus on faithful capture, context, and careful handling of fragile or unique materials.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Research-ready</strong>
                <span>Digitized materials become easier to navigate, search, and reuse for teaching and scholarship.</span>
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
                  <li><Check size={16} />High-resolution preservation and access files</li>
                  <li><Check size={16} />Searchable OCR/ICR text and metadata packages</li>
                  <li><Check size={16} />Organized archive structure with item-level context</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Anthropology and ethnography collections</li>
                  <li><Check size={16} />Museums, universities, and research institutions</li>
                  <li><Check size={16} />Cultural heritage and archive programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the details <span>that give collections meaning.</span></h2>
            <p>
              Digitization is most valuable when it preserves not only the original object but also the context, sequence, and metadata that allow scholars and communities to understand and reuse it responsibly.
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
            <h2>Protect memory while<br /><em>making it accessible.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are preserving a field archive, preparing a public-facing digital collection, or improving research access, careful digitization supports scholarship and stewardship alike.
            </p>
            <a href="/contact-us" className="text-link">Digitize your archive <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
