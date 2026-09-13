import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Benchmarking models for safety, accuracy, and business relevance",
  "Quality assessment for retrieval, summarization, classification, and generation",
  "Human review and pairwise comparison for model ranking and improvement",
  "Regression testing and continuous evaluation for production releases",
];

const workflow = [
  { step: "01", title: "Define success criteria", text: "We translate use cases into measurable goals, rubrics, and risk thresholds before creating the evaluation set." },
  { step: "02", title: "Build the test set", text: "We assemble representative prompts, edge cases, and reference answers that reflect real user behavior and expected outcomes." },
  { step: "03", title: "Evaluate and compare", text: "We run model benchmarking, human review, and structured checks to identify quality gaps and failure patterns." },
  { step: "04", title: "Improve and monitor", text: "We use the findings to refine prompts, retrieval logic, and model selection while maintaining a regression set." },
];

export default function AIModelEvaluation() {
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
              <strong>AI Model Evaluation</strong>
            </nav>

            <h1>
              Measure model quality with <em>clear evidence.</em>
            </h1>
            <p>
              We help teams assess model performance across quality, safety, reliability, and business fit—turning evaluation into a repeatable system that supports deployment decisions.
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

          <div className="service-hero-art" aria-label="AI model evaluation illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Gauge size={42} strokeWidth={1.2} />
              <span className="mono-label">EVAL / METRICS</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Bench</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-three"><Layers3 size={16} /><span>Scores</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>QA</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support evaluation planning, benchmark design, human review, rubric calibration, error analysis, and continuous regression testing for AI workflows used in production environments.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Risk-aware</strong>
                <span>We identify failure modes, edge cases, and weak points before business rollout.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Decision-ready</strong>
                <span>Results are framed in a way teams can act on quickly and confidently.</span>
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
                  <li><Check size={16} />Evaluation plan with goals, metrics, and thresholds</li>
                  <li><Check size={16} />Benchmark set and reference answers for the task</li>
                  <li><Check size={16} />Error analysis and recommender report for improvement</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />LLM and assistant evaluation</li>
                  <li><Check size={16} />Classification, summarization, and retrieval workflows</li>
                  <li><Check size={16} />Teams getting ready for production release</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for quality signals <span>that matter.</span></h2>
            <p>
              Strong AI evaluation is not just about a single score. It is about understanding reliability, edge cases, model drift, and where business decisions will be most sensitive.
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
            <h2>Know where your model<br /><em>is strong—and where it fails.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              From prompt design to deployment review, we help you benchmark performance against real-world expectations and use that evidence to guide improvements with confidence.
            </p>
            <a href="/contact-us" className="text-link">Build your evaluation framework <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
