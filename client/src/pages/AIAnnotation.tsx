import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Check,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Multi-modal", label: "data annotation" },
  { value: "Human + AI", label: "quality review" },
  { value: "Model-ready", label: "training signal" },
];

const useCases = [
  "Image, video, text, audio, and sensor labeling",
  "Object detection, segmentation, and tracking workflows",
  "Ontology design and edge-case guidance",
  "High-quality QA for training and evaluation pipelines",
];

const workflow = [
  { step: "01", title: "Define the label system", text: "We align on schema, taxonomy, edge cases, and acceptance criteria before annotation begins." },
  { step: "02", title: "Prepare the sources", text: "We structure the raw files, review quality, and create consistent labeling rules for the project team." },
  { step: "03", title: "Annotate and review", text: "Specialists apply labels with model-assisted support, inter-review checks, and trackable corrections." },
  { step: "04", title: "Deliver and iterate", text: "We package the approved dataset, QA notes, and export-ready files for training or evaluation cycles." },
];

export default function AIAnnotation() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/ai-data-annotation">AI Data & Annotation Services</Link>
              <span>/</span>
              <strong>AI Annotation</strong>
            </nav>

            <h1>
              Training data with <em>precision and consistency.</em>
            </h1>
            <p>
              We build annotation systems that convert raw signals into trusted learning data—clear enough for models, structured enough for teams, and rigorous enough for production.
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

          <div className="service-hero-art" aria-label="AI annotation illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Layers3 size={42} strokeWidth={1.2} />
              <span className="mono-label">LABEL / SIGNAL</span>
            </div>
            <div className="art-chip chip-one"><Boxes size={16} /><span>Vision</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>QA</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Model</span></div>
            <div className="art-caption mono-label">ANNOTATION / DATASET / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support annotation strategy, schema design, specialist labeling, QA review, and model-ready export across image, video, text, audio, and sensor datasets.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Quality-first</strong>
                <span>Guidelines, QA loops, and adjudication keep labels trustworthy.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Flexible delivery</strong>
                <span>Manual, hybrid, and model-assisted workflows matched to your data.</span>
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
                  <li><Check size={16} />Structured labeled datasets linked to source files</li>
                  <li><Check size={16} />Schema, taxonomy, and annotation guidelines</li>
                  <li><Check size={16} />QA summaries, correction logs, and export-ready files</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Robotics and computer vision</li>
                  <li><Check size={16} />Autonomous systems and inspection</li>
                  <li><Check size={16} />Models that require high-confidence supervised labels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>
              Accurate training data depends on more than speed. It requires a consistent ontology, thoughtful QA, and operational discipline across every annotation pass.
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
            <h2>Give your model<br /><em>clearer signal.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether the task is detection, text labeling, or multi-modal QA, strong annotation design reduces noise and gives your team a better training base.
            </p>
            <a href="/contact-us" className="text-link">Build your annotation workflow <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
