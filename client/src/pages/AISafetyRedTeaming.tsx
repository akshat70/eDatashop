import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Database,
  Gauge,
  MessageSquareWarning,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Safety and policy benchmark design for generative AI systems",
  "Adversarial prompt and jailbreak testing across high-risk workflows",
  "Content moderation dataset creation for text, image, and multimodal tasks",
  "Human review and escalation workflows for harmful or unreliable outputs",
];

const workflow = [
  { step: "01", title: "Define risk boundaries", text: "We identify harms, policy categories, escalation paths, and success thresholds before building the testing set." },
  { step: "02", title: "Prepare adversarial scenarios", text: "We assemble representative prompts, exploit patterns, and edge cases that reveal unsafe or low-quality model behavior." },
  { step: "03", title: "Review and label", text: "We apply structured human review with consistency checks to label severity, policy fit, and responsible response quality." },
  { step: "04", title: "Measure and remediate", text: "We report gaps, refine guardrails, and maintain a regression set so future model versions are monitored and improved." },
];

export default function AISafetyRedTeaming() {
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
              <strong>AI Safety, Red Teaming & Content Moderation</strong>
            </nav>

            <h1>
              Safer AI starts with <em>clearer testing.</em>
            </h1>
            <p>
              We help teams identify harmful, biased, or unreliable behaviors before they reach end users—building the evaluation foundations needed for responsible deployment.
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

          <div className="service-hero-art" aria-label="AI Safety and red teaming illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <MessageSquareWarning size={42} strokeWidth={1.2} />
              <span className="mono-label">SAFETY / RISK</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Threats</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Cases</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Score</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Guard</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support policy-aligned safety testing, red-team data creation, harm taxonomy design, content moderation review, and model-risk assessment programs for AI products and enterprise deployments.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Policy-aware</strong>
                <span>We classify harm types, severity levels, and escalation pathways in line with business and user risk.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Operationally useful</strong>
                <span>Outputs are structured for evaluation, review, and iterative remediation—not just one-off testing.</span>
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
                  <li><Check size={16} />Safety taxonomy and risk framework</li>
                  <li><Check size={16} />Red-team dataset and moderation review package</li>
                  <li><Check size={16} />Evaluation report with prioritized remediation actions</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Generative AI products and tools</li>
                  <li><Check size={16} />High-risk domains and public-facing systems</li>
                  <li><Check size={16} />Operational teams needing stronger AI governance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for high-risk <span>edge cases.</span></h2>
            <p>
              Safety is strongest when teams test for the real harms they care about—abuse, policy violations, edge-case failures, and low-confidence decision behavior—using disciplined review and repeatable evaluation.
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
            <h2>Reduce risk before it<br /><em>reaches the user.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether the goal is to test safety, improve moderation quality, or build accountable guardrails, our evaluation workflows turn risk understanding into actionable operational improvements.
            </p>
            <a href="/contact-us" className="text-link">Design your safety review process <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
