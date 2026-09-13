import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const useCases = [
  "Custom ML systems for prediction, classification, and decision support",
  "AI-powered workflow automation across operations, support, and analytics",
  "Tailored software and integrations for business-specific processes",
  "Rapid prototyping and deployment of tools built around real team workflows",
];

const workflow = [
  { step: "01", title: "Frame the problem", text: "We align on the business objective, constraints, decision points, and measurable success criteria before engineering begins." },
  { step: "02", title: "Design the solution", text: "We define the architecture, data flow, integrations, and model or software scope needed to deliver the right outcome." },
  { step: "03", title: "Build and validate", text: "We prototype, iterate, and test the model or tool against real-world scenarios and operational requirements." },
  { step: "04", title: "Deploy and improve", text: "We support implementation, monitoring, integration, and continuous refinement as the workflow matures in production." },
];

export default function CustomMLTailoredSoftware() {
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
              <strong>Custom ML & Tailored Software Development</strong>
            </nav>

            <h1>
              Solutions built around <em>your real workflow.</em>
            </h1>
            <p>
              We help teams turn business needs into custom models, applications, and workflows that fit the actual process, data, and operating context behind the work.
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

          <div className="service-hero-art" aria-label="Custom ML and software development illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Code2 size={42} strokeWidth={1.2} />
              <span className="mono-label">ML / SOFTWARE</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Flow</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Data</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Test</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Build</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support custom ML design, tailored software development, workflow automation, integration planning, and production-ready implementation around the processes your team actually runs.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Built for context</strong>
                <span>We design around your operating model, user needs, and real constraints—not just a generic product template.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Practical to deploy</strong>
                <span>From prototype through rollout, the work stays tied to outcomes and maintainability.</span>
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
                  <li><Check size={16} />Solution architecture and workflow specification</li>
                  <li><Check size={16} />Prototype or production-ready model or application</li>
                  <li><Check size={16} />Integration and deployment plan with operational guidance</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Operations and business workflows</li>
                  <li><Check size={16} />Analytics, automation, and decision support</li>
                  <li><Check size={16} />Teams needing custom technology built around real work</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for the work <span>teams actually do.</span></h2>
            <p>
              Tailored AI and software work best when the technical solution mirrors the real operating rhythm of the business—its decisions, exceptions, data sources, and user experience.
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
            <h2>Build what your team<br /><em>actually needs.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              From bespoke ML to custom software, we design systems that fit the real workflow behind the problem so they are usable, maintainable, and commercially effective.
            </p>
            <a href="/contact-us" className="text-link">Start your tailored solution <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
