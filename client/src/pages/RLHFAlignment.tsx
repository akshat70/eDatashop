import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleGauge,
  Handshake,
  MonitorCheck,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Preference", label: "ranking data" },
  { value: "Human-in-loop", label: "review" },
  { value: "Alignment", label: "and safety" },
];

const useCases = [
  "Preference data and output ranking for policy-aligned responses",
  "Human feedback loops for helpfulness, truthfulness, and safety",
  "Red-team and adversarial safety testing for high-risk tasks",
  "Alignment review for enterprise and research-grade model workflows",
];

const workflow = [
  { step: "01", title: "Define alignment goals", text: "We align on model behaviors, policy constraints, acceptable risk, and success criteria before data collection begins." },
  { step: "02", title: "Calibrate reviewers", text: "We train reviewers with gold examples, edge cases, and scoring rubrics so judgments are consistent and traceable." },
  { step: "03", title: "Collect judgments", text: "We gather demonstrations, rankings, pairwise preferences, and safety labels through structured review loops." },
  { step: "04", title: "Measure and improve", text: "We analyze agreement, disagreement, policy outcomes, and model regressions so the next iteration is more reliable." },
];

export default function RLHFAlignment() {
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
              <strong>RLHF & AI Alignment</strong>
            </nav>

            <h1>
              Human feedback that guides <em>better model behavior.</em>
            </h1>
            <p>
              We structure demonstrations, preference data, and safety judgments so model teams can improve helpfulness, reliability, and alignment with domain expectations.
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

          <div className="service-hero-art" aria-label="RLHF and AI alignment illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Target size={42} strokeWidth={1.2} />
              <span className="mono-label">ALIGNMENT / FEEDBACK</span>
            </div>
            <div className="art-chip chip-one"><Handshake size={16} /><span>People</span></div>
            <div className="art-chip chip-two"><MonitorCheck size={16} /><span>Review</span></div>
            <div className="art-chip chip-three"><CircleGauge size={16} /><span>Scores</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Safety</span></div>
            <div className="art-caption mono-label">RLHF / ALIGNMENT / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support preference data collection, human review calibration, safety labeling, quality adjudication, and alignment evaluation programs for model development teams.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Policy-aware</strong>
                <span>Rubrics are defined around helpfulness, truthfulness, safety, and domain fit.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Review-driven</strong>
                <span>We focus on consistent human judgments and measurable agreement across model behaviors.</span>
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
                  <li><Check size={16} />Preference, ranking, and safety datasets</li>
                  <li><Check size={16} />Rubrics, reviewer standards, and adjudication records</li>
                  <li><Check size={16} />Alignment report with performance and regression insight</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />LLM teams and model evaluators</li>
                  <li><Check size={16} />Healthcare, finance, and public sector AI programs</li>
                  <li><Check size={16} />Safety, policy, and trust review workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models cannot infer alone.</span></h2>
            <p>
              Human preference data is only valuable when it is structured around clear criteria, consistent reviewers, and a measurable framework for comparing quality and risk.
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
            <h2>Improve model behavior <em>with better feedback.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are refining helpfulness, evaluating safety risks, or aligning output to enterprise needs, structured human feedback creates the data foundation for stronger model behavior.
            </p>
            <a href="/contact-us" className="text-link">Build your alignment program <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
