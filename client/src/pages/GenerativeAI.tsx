import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
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
  { value: "Prompt + RAG", label: "workflow design" },
  { value: "Safety", label: "and evaluation" },
  { value: "AI-ready", label: "integration" },
];

const useCases = [
  "LLM-powered assistants for customer support, internal knowledge, and search",
  "Generative workflows for summarization, extraction, classification, and QA",
  "Prompt and retrieval system design for grounded enterprise applications",
  "Evaluation, red teaming, and model monitoring for real-world deployment",
];

const workflow = [
  { step: "01", title: "Discover the use case", text: "We align on user workflows, data sources, constraints, and success metrics before building the generative solution." },
  { step: "02", title: "Prepare the data layer", text: "We structure the documents, metadata, retrieval sources, and access boundaries that ground the assistant in trusted information." },
  { step: "03", title: "Prototype and evaluate", text: "We design prompts, retrieval logic, tool use, and evaluation harnesses to test performance and safety in context." },
  { step: "04", title: "Deploy and improve", text: "We support deployment, monitoring, human review, cost tracking, and iterative refinement as the solution matures." },
];

export default function GenerativeAI() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/generative-ai-llm-model">Generative AI, LLM & Model Services</Link>
              <span>/</span>
              <strong>Generative AI</strong>
            </nav>

            <h1>
              Generative AI designed for <em>practical business use.</em>
            </h1>
            <p>
              We help teams move from AI experimentation into production workflows with the data, evaluation, and operational controls needed for trustworthy and effective generation.
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

          <div className="service-hero-art" aria-label="Generative AI illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Bot size={42} strokeWidth={1.2} />
              <span className="mono-label">LLM / WORKFLOW</span>
            </div>
            <div className="art-chip chip-one"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-two"><Layers3 size={16} /><span>RAG</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Eval</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>AI</span></div>
            <div className="art-caption mono-label">GEN AI / SYSTEMS / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support generative AI strategy, LLM application design, prompt engineering, retrieval-grounding, evaluation, deployment support, and operational governance across enterprise use cases.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Grounded and reliable</strong>
                <span>We design around authoritative data and review loops for better factuality.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Production-ready</strong>
                <span>From proof of concept to deployment, we structure the operating model around real outcomes.</span>
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
                  <li><Check size={16} />Use-case architecture and solution design</li>
                  <li><Check size={16} />Prompt library, grounding strategy, and RAG setup</li>
                  <li><Check size={16} />Evaluation framework, safety review, and deployment guidance</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Knowledge assistants and internal copilots</li>
                  <li><Check size={16} />Research and customer-facing AI workflows</li>
                  <li><Check size={16} />Teams needing measurable AI deployment outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>that decide trust.</span></h2>
            <p>
              Strong generative systems depend on ground truth, retrieval quality, safety evaluation, and a disciplined operating model—not just prompt quality alone.
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
            <h2>Turn AI ambition into <em>useful deployment.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are building a knowledge assistant, summarization workflow, or retrieval-grounded product, strong generative AI design turns experimentation into dependable systems.
            </p>
            <a href="/contact-us" className="text-link">Start your generative AI roadmap <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
