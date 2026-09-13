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
  Waypoints,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Task flows", label: "for multi-step execution" },
  { value: "Tool use", label: "with guardrails" },
  { value: "Human review", label: "built in" },
];

const useCases = [
  "AI systems that plan, choose tools, and act across business workflows",
  "Multi-step assistants for operations, support, and document-heavy work",
  "Agentic evaluation for reliability, escalation, and recourse handling",
  "Human-in-the-loop orchestration for critical or sensitive decisions",
];

const workflow = [
  { step: "01", title: "Map the workflow", text: "We identify the tasks, tools, permissions, decision points, and failure modes that should be governed by an agent." },
  { step: "02", title: "Design the operating loop", text: "We set up roles, prompts, retrieval, memory, and tool access to support safe planning and execution." },
  { step: "03", title: "Train and test behaviors", text: "We prepare realistic examples and evaluation scenarios to assess reasoning, fallback behavior, and completion quality." },
  { step: "04", title: "Monitor and improve", text: "We establish logging, review loops, escalation paths, and continuous iteration for production readiness." },
];

export default function AgenticAI() {
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
              <strong>Agentic AI</strong>
            </nav>

            <h1>
              Intelligent systems that <em>reason, act, and recover.</em>
            </h1>
            <p>
              We help teams design the data, workflows, and evaluation loops behind AI agents that can plan actions, use tools, and operate responsibly inside real business processes.
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

          <div className="service-hero-art" aria-label="Agentic AI illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Bot size={42} strokeWidth={1.2} />
              <span className="mono-label">AGENT / TOOLING</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Plan</span></div>
            <div className="art-chip chip-two"><Database size={16} /><span>Context</span></div>
            <div className="art-chip chip-three"><Gauge size={16} /><span>Eval</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Action</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support workflow design, tool-use specification, agent behavior testing, safety guardrails, and monitoring for teams building AI systems that carry out real tasks with accountability.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Governed by design</strong>
                <span>Permissions, escalation, and review paths are part of the system, not an afterthought.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Built for real work</strong>
                <span>We structure the task loops that matter in operations, support, and internal automation.</span>
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
                  <li><Check size={16} />Agent workflow maps and tool-access architecture</li>
                  <li><Check size={16} />Prompt, role, and orchestration definitions</li>
                  <li><Check size={16} />Safety, monitoring, and governance package</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Operations and support workflows</li>
                  <li><Check size={16} />Research, analysis, and knowledge work</li>
                  <li><Check size={16} />Teams needing dependable AI execution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad" id="approach">
          <div className="method-intro">
            <h2>Built for action, <span>not just output.</span></h2>
            <p>
              Effective agentic AI depends on task design, data quality, reviewability, and operational constraints. We help teams build systems that are useful, measurable, and safe to deploy.
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
            <h2>Operational AI <em>that stays accountable.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              From workflow mapping to evaluation and governance, we help teams turn agentic AI from an experiment into a controlled, production-ready operating layer.
            </p>
            <a href="/contact-us" className="text-link">Design your agent workflow <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
