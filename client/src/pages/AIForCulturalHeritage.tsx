import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileText,
  ImageIcon,
  Sparkles,
  Telescope,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "AI-assisted access and discovery across archives and collections",
  "OCR and handwritten text recognition for historical documents",
  "Image classification and relationship discovery across heritage materials",
  "Metadata enrichment for institutions, research portals, and digital exhibits",
];

const workflow = [
  { step: "01", title: "Review the corpus", text: "We assess the collection types, metadata, digitized formats, and research goals before AI processing begins." },
  { step: "02", title: "Prepare the inputs", text: "We normalize files, organize the corpus, and ready the image/document assets for OCR, HTR, and analysis workflows." },
  { step: "03", title: "Run and refine", text: "We apply AI models for text recognition, layout analysis, classification, and entity extraction and then validate important outputs." },
  { step: "04", title: "Enrich and publish", text: "We connect the improved metadata to institutional systems and structured outputs so archives become easier to search and interpret." },
];

export default function AIForCulturalHeritage() {
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
              <strong>AI for Cultural Heritage</strong>
            </nav>

            <h1>
              Discover new paths into <em>cultural knowledge.</em>
            </h1>
            <p>
              We help cultural institutions apply AI thoughtfully to improve access, enrich metadata, reveal relationships across collections, and support research with stronger digital workflows.
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

          <div className="service-hero-art" aria-label="AI for cultural heritage illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Telescope size={42} strokeWidth={1.2} />
              <span className="mono-label">HERITAGE / AI</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>OCR</span></div>
            <div className="art-chip chip-two"><ImageIcon size={16} /><span>Vision</span></div>
            <div className="art-chip chip-three"><FileText size={16} /><span>Text</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Insights</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support OCR and handwritten text recognition, layout analysis, image classification, entity extraction, metadata enrichment, and human-reviewed AI for cultural heritage collections and digital research workflows.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <Check size={19} />
                <strong>Human-centered</strong>
                <span>Model outputs are reviewed and refined so cultural meaning is preserved responsibly.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Research-enabling</strong>
                <span>AI helps collections become more searchable, contextual, and discoverable.</span>
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
                  <li><Check size={16} />Searchable transcripts and OCR/HTR outputs</li>
                  <li><Check size={16} />Enriched metadata and entity-linked collection records</li>
                  <li><Check size={16} />Structured, research-friendly outputs for portals and archives</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Archives, libraries, and museums</li>
                  <li><Check size={16} />Research institutions and universities</li>
                  <li><Check size={16} />Cultural institutions building digital access programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for discovery <span>without losing context.</span></h2>
            <p>
              Cultural heritage AI works best when the work is grounded in archival context, human review, and clear institutional rules for access, interpretation, and stewardship.
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
            <h2>Open heritage collections to<br /><em>new kinds of discovery.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              When AI supports thoughtful cataloging and access, institutions can reveal patterns, connections, and knowledge that were previously difficult to surface at scale.
            </p>
            <a href="/contact-us" className="text-link">Explore AI for your collection <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
