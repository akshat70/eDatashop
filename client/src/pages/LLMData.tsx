import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Database,
  FileText,
  Gauge,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Instruction", label: "and preference data" },
  { value: "Model eval", label: "quality checks" },
  { value: "Fine-tune", label: "ready datasets" },
];

const useCases = [
  "Instruction tuning and domain-specific prompt-response datasets",
  "Preference and ranking workflows for human-aligned model behavior",
  "Evaluation and benchmark creation for LLM quality and safety",
  "Guardrail and retrieval data for production-grade language applications",
];

const workflow = [
  { step: "01", title: "Define the model goal", text: "We clarify the task, domain, expected outputs, and quality bar before data collection begins." },
  { step: "02", title: "Prepare the data corpus", text: "We source, clean, segment, and standardize examples into a consistent format for training or evaluation." },
  { step: "03", title: "Annotate and review", text: "Human reviewers label instructions, responses, rankings, and safety signals using calibrated rubric checks." },
  { step: "04", title: "Package and iterate", text: "We deliver model-ready files, QA summaries, and guidance for retraining, benchmarking, or further refinement." },
];

export default function LLMData() {
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
              <strong>LLM Data</strong>
            </nav>

            <h1>
              Data foundations for <em>smarter language models.</em>
            </h1>
            <p>
              We prepare instruction, preference, evaluation, and policy-aligned datasets that help language models become more useful, safer, and better suited to real business workflows.
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

          <div className="service-hero-art" aria-label="LLM data illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <BrainCircuit size={42} strokeWidth={1.2} />
              <span className="mono-label">LLM / DATA</span>
            </div>
            <div className="art-chip chip-one"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-two"><FileText size={16} /><span>Instr</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Eval</span></div>
            <div className="art-chip chip-four"><Waypoints size={16} /><span>Flow</span></div>
            <div className="art-caption mono-label">LLM DATA / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support curation of instruction, preference, alignment, evaluation, and guardrail data for enterprise and research-grade language model workflows.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Human-aligned</strong>
                <span>Preference and rubric design help shape responses around quality and appropriateness.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Model-ready</strong>
                <span>We structure data and QA so it is ready for fine-tuning, benchmarking, or production evaluation.</span>
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
                  <li><Check size={16} />Instruction, preference, ranking, and QA datasets</li>
                  <li><Check size={16} />Taxonomy, rubric, and formatting specifications</li>
                  <li><Check size={16} />Versioned training/evaluation packages with review notes</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Model training and fine-tuning</li>
                  <li><Check size={16} />Enterprise AI assistants and copilots</li>
                  <li><Check size={16} />Evaluation, safety, and quality improvement teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models learn from.</span></h2>
            <p>
              LLM data programs work best when they combine careful curation, consistent guidelines, human review, and measurable evaluation against the intended use case.
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
            <h2>Give your model <em>better learning signals.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are fine-tuning, benchmarking, or aligning a model for real user activity, well-designed LLM data improves quality, safety, and trust.
            </p>
            <a href="/contact-us" className="text-link">Design your LLM data pipeline <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
