import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  FileSearch,
  FolderSearch,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Grounded enterprise assistants for support, policy, and operations",
  "Search and answer workflows over internal documents and knowledge bases",
  "Context-aware retrieval for compliance, HR, finance, and research teams",
  "Freshness-aware knowledge pipelines for AI-powered decision support",
];

const workflow = [
  { step: "01", title: "Define the knowledge layer", text: "We review the content sources, access rules, selected use cases, and freshness requirements before preparing the retrieval system." },
  { step: "02", title: "Prepare the corpus", text: "We ingest, clean, classify, OCR, and structure the source material so it is ready for search and retrieval." },
  { step: "03", title: "Configure retrieval", text: "We align chunking, metadata, keyword, vector, or hybrid retrieval, and source provenance to the type of answers needed." },
  { step: "04", title: "Evaluate and refresh", text: "We test relevance, citation quality, and grounding, then monitor updates and re-index as the knowledge base evolves." },
];

export default function RetrievalAugmentedGenerationSupport() {
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
              <strong>Retrieval-Augmented Generation Support</strong>
            </nav>

            <h1>
              Ground AI in the right <em>knowledge context.</em>
            </h1>
            <p>
              We help organizations prepare the data, metadata, indexing, and retrieval layers that make enterprise generative AI more grounded, reliable, and useful in real workflows.
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

          <div className="service-hero-art" aria-label="Retrieval-augmented generation illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Search size={42} strokeWidth={1.2} />
              <span className="mono-label">RAG / RETRIEVAL</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Index</span></div>
            <div className="art-chip chip-two"><FolderSearch size={16} /><span>Docs</span></div>
            <div className="art-chip chip-three"><Layers3 size={16} /><span>Chunks</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support knowledge intake, document preparation, OCR and extraction, metadata tagging, chunking, retrieval configuration, grounding evaluation, and refresh operations for enterprise AI use cases.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Grounded answers</strong>
                <span>We align the data layer behind the model so responses draw from the right sources and context.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>More trustworthy AI</strong>
                <span>Better retrieval quality, provenance, and evaluation improve explainability and operational confidence.</span>
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
                  <li><Check size={16} />Prepared knowledge corpus with provenance and metadata</li>
                  <li><Check size={16} />Configured retrieval stack and access controls</li>
                  <li><Check size={16} />Evaluation report, citation quality review, and refresh runbook</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Customer support and service workflows</li>
                  <li><Check size={16} />HR, policy, and compliance applications</li>
                  <li><Check size={16} />Knowledge-intensive enterprise assistants and copilots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the context <span>AI needs to answer well.</span></h2>
            <p>
              Retrieval quality depends on the structure and governance of the knowledge behind it. The strongest RAG systems are built around source quality, indexing discipline, and evaluation against real user tasks.
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
            <h2>Turn enterprise knowledge into<br /><em>grounded AI answers.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are building a knowledge assistant, internal copilot, or policy answer system, retrieval quality and source governance are what make the output useful and trustworthy.
            </p>
            <a href="/contact-us" className="text-link">Design your RAG foundation <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
