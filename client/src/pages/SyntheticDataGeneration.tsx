import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Cpu,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Rare-event", label: "coverage" },
  { value: "Bias-aware", label: "validation" },
  { value: "Privacy-safe", label: "generation" },
];

const useCases = [
  "Edge-case generation for scarce or hard-to-capture scenarios",
  "Synthetic training data for vision, tabular, and multimodal workflows",
  "Rare-event augmentation for safety, insurance, and defect detection",
  "Simulated environments and controlled data expansion for model testing",
];

const workflow = [
  { step: "01", title: "Define the gap", text: "We identify the missing coverage, edge cases, constraints, and acceptance criteria that synthetic data should address." },
  { step: "02", title: "Prepare the inputs", text: "We align schemas, source properties, privacy rules, distribution targets, and generation conditions before synthesis begins." },
  { step: "03", title: "Generate and validate", text: "We build the synthetic variants, apply quality checks, and compare fidelity, utility, and diversity against the target use case." },
  { step: "04", title: "Deliver production-ready data", text: "We package a versioned dataset with provenance, QA notes, and model-use recommendations for training or evaluation." },
];

export default function SyntheticDataGeneration() {
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
              <strong>Synthetic Data Generation</strong>
            </nav>

            <h1>
              Synthetic data for <em>hard-to-capture scenarios.</em>
            </h1>
            <p>
              We help teams generate high-value synthetic datasets that fill gaps in coverage, improve model robustness, and support privacy-sensitive training workflows without compromising quality.
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

          <div className="service-hero-art" aria-label="Synthetic data generation illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Cpu size={42} strokeWidth={1.2} />
              <span className="mono-label">GENERATIVE SIGNAL</span>
            </div>
            <div className="art-chip chip-one"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-two"><Layers3 size={16} /><span>Vars</span></div>
            <div className="art-chip chip-three"><Wand2 size={16} /><span>Gen</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>QA</span></div>
            <div className="art-caption mono-label">SYNTHETIC / DATA / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support synthetic dataset strategy, generation design, privacy review, validation, edge-case coverage analysis, and production-ready delivery across tabular, vision, text, and multimodal use cases.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Privacy-aware</strong>
                <span>Generation strategies can be built to reduce exposure while preserving utility.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Usage-focused</strong>
                <span>We align data design to your training, test, and deployment objectives.</span>
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
                  <li><Check size={16} />Versioned synthetic datasets with provenance and schema</li>
                  <li><Check size={16} />Distribution analysis, fidelity metrics, and QA notes</li>
                  <li><Check size={16} />Model-ready data exports for training and evaluation</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Robotics and autonomous systems</li>
                  <li><Check size={16} />Healthcare, finance, and compliance-heavy domains</li>
                  <li><Check size={16} />Rare-event and low-frequency model scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>
              High-value synthetic data blends domain logic, controlled generation, and careful validation so the resulting examples are useful, realistic, and aligned with model objectives.
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
            <h2>Close the gap with<br /><em>smarter synthetic data.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you need more edge-case coverage, safer experimentation, or more scalable training inputs, synthetic data can extend your model capabilities without depending on complete real-world capture.
            </p>
            <a href="/contact-us" className="text-link">Build your synthetic dataset <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
