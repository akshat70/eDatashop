import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import { ArrowDownRight, ArrowUpRight, Check, Eye, Gauge, MapPinned, ShieldCheck, Sparkles, Waypoints } from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "First-person", label: "video and sensor capture" },
  { value: "Action", label: "grounded training signals" },
  { value: "Embodied AI", label: "readiness across robotics" },
];

const useCases = [
  "Human activity recognition and daily tasks",
  "Hands, tools, and object interaction labeling",
  "Robotics and autonomous system perception",
  "AR/VR, wearable, and assistive intelligence workflows",
];

const workflow = [
  { step: "01", title: "Scope the signal", text: "We align on the task, environment, sensor mix, taxonomy, and privacy requirements before any capture begins." },
  { step: "02", title: "Capture in context", text: "We design natural, task-driven data collection so the recordings reflect how people actually work, move, and interact." },
  { step: "03", title: "Label and validate", text: "Experts annotate action, gaze, interaction, objects, and temporal context with QA reviews and audit trails." },
  { step: "04", title: "Deliver model-ready data", text: "We package a clean, documented dataset with metadata, provenance, and traceable quality checks for training or evaluation." },
];

export default function EgocentricData() {
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
              <strong>Egocentric Data</strong>
            </nav>

            <h1>
              First-person data for <em>embodied AI.</em>
            </h1>
            <p>
              We help teams collect, structure, and validate the rich, context-heavy recordings that teach systems how people observe, act, and react in real environments.
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

          <div className="service-hero-art" aria-label="Egocentric data illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Eye size={42} strokeWidth={1.2} />
              <span className="mono-label">FIRST-PERSON SIGNAL</span>
            </div>
            <div className="art-chip chip-one"><Waypoints size={16} /><span>Gaze</span></div>
            <div className="art-chip chip-two"><Gauge size={16} /><span>Motion</span></div>
            <div className="art-chip chip-three"><MapPinned size={16} /><span>Context</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Action</span></div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support collection planning, multimodal capture, annotation, privacy review, and structure for datasets used in robotics, wearable intelligence, autonomous systems, and real-world scene understanding.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Privacy-aware</strong>
                <span>Consent, redaction, and responsible review built into the workflow.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Action-focused</strong>
                <span>Temporal context, objects, interactions, and intent labeled for real use.</span>
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
                  <li><Check size={16} />Synchronized first-person video, audio, and sensor data</li>
                  <li><Check size={16} />Annotated action, object, and interaction labels</li>
                  <li><Check size={16} />Privacy-reviewed, documented, model-ready data packages</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Robotics and physical AI</li>
                  <li><Check size={16} />AR/VR and wearable systems</li>
                  <li><Check size={16} />Healthcare and human activity intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>
              Good egocentric datasets combine the right capture setup, careful labeling, and structured quality controls so the resulting signal is useful for embodied AI and robotics teams.
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
            <h2>Help your model<br /><em>understand context.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are building a robotics perception stack or a wearable intelligence workflow, the right egocentric dataset turns behavior into structured learning signal.
            </p>
            <a href="/contact-us" className="text-link">Build your data collection program <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
