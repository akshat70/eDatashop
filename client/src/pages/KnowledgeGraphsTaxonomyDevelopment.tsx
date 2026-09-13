import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Network,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Taxonomy and controlled vocabulary design for enterprise knowledge",
  "Entity and relationship mapping across structured and unstructured data",
  "Improved search, discovery, and content navigation for teams",
  "Semantic model design for AI, knowledge platforms, and governance",
];

const workflow = [
  { step: "01", title: "Discover the domain", text: "We map the subject area, users, source systems, governance needs, and use cases before designing the structure." },
  { step: "02", title: "Normalize the concepts", text: "We inventory terms, identifiers, labels, and source structures to reduce duplication and ambiguity." },
  { step: "03", title: "Design the graph", text: "We define hierarchy, relationships, entity roles, and crosswalks that align with the way teams think and operate." },
  { step: "04", title: "Validate and publish", text: "We review with stakeholders, apply governance rules, and prepare the taxonomy or graph for practical use in search and AI workflows." },
];

export default function KnowledgeGraphsTaxonomyDevelopment() {
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
              <strong>Knowledge Graphs & Taxonomy Development</strong>
            </nav>

            <h1>
              Connect the concepts inside your <em>enterprise knowledge.</em>
            </h1>
            <p>
              We help organizations structure terms, relationships, and metadata so the information they manage becomes easier to discover, trust, and use across search, AI, and business workflows.
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

          <div className="service-hero-art" aria-label="Knowledge graph illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Network size={42} strokeWidth={1.2} />
              <span className="mono-label">GRAPH / TAXONOMY</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Links</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Terms</span></div>
            <div className="art-chip chip-three"><GitBranch size={16} /><span>Relationships</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support taxonomy design, metadata normalization, semantic modeling, controlled vocabularies, entity mapping, and relationship structures that improve discoverability across business systems and AI use cases.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Clearer meaning</strong>
                <span>We reduce ambiguity in language and structure so teams can navigate content more consistently.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Better retrieval</strong>
                <span>Structured knowledge improves queries, navigation, recommendations, and AI grounding.</span>
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
                  <li><Check size={16} />Taxonomy or ontology design with governance rules</li>
                  <li><Check size={16} />Entity, relationship, and metadata mapping documentation</li>
                  <li><Check size={16} />Graph exports, crosswalks, and semantic mappings for reuse</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Search, knowledge, and digital experience teams</li>
                  <li><Check size={16} />Publishing, product, and research organizations</li>
                  <li><Check size={16} />AI teams needing better conceptual structure and grounding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for meaning <span>that scales.</span></h2>
            <p>
              Knowledge graph and taxonomy work is most effective when it reflects real content patterns, stakeholder vocabulary, and the systems that will use the structure day to day.
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
            <h2>Give your data a clearer<br /><em>meaning map.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              When terminology, entities, and relationships are structured well, search, discovery, governance, and AI systems operate with less friction and more context.
            </p>
            <a href="/contact-us" className="text-link">Build your knowledge structure <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
