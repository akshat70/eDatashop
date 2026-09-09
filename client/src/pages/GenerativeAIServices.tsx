import SiteFooter from "@/components/SiteFooter";
import { Link } from "wouter";
import ctaImage from "./images/generative-ai-support.jpg"
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  FlaskConical,
  GitBranch,
  ScanSearch,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Generative AI",
    kicker: "Create with intelligence",
    description: "Design, prototype, and operationalize generative AI experiences that turn language, vision, and multimodal models into useful products.",
    capabilities: ["Use-case discovery", "Prompt & workflow design", "Generative AI integration"],
    link: "/service/generative-ai"
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "LLM data",
    kicker: "The context layer",
    description: "Build the high-quality instruction, preference, retrieval, and domain data that helps large language models perform with greater accuracy.",
    capabilities: ["Instruction datasets", "Preference & feedback data", "RAG knowledge preparation"],
    link: "/service/llm-data"
  },
  {
    number: "03",
    icon: GitBranch,
    title: "RLHF & AI alignment",
    kicker: "Useful, safe, aligned",
    description: "Shape model behavior with human feedback, preference ranking, rubric design, and evaluation systems grounded in your quality bar.",
    capabilities: ["Preference ranking", "Rubric-based evaluation", "Human feedback programs"],
    link: "/service/rlhf-ai-alignment"
  },
  {
    number: "04",
    icon: Bot,
    title: "Agentic AI",
    kicker: "From answer to action",
    description: "Help AI agents understand goals, use tools, navigate workflows, and complete real tasks with dependable human and system handoffs.",
    capabilities: ["Tool-use datasets", "Agent trajectories", "Workflow simulation"],
    link: "/service/agentic-ai"
  },
  {
    number: "05",
    icon: ScanSearch,
    title: "AI model evaluation",
    kicker: "Measure what matters",
    description: "Evaluate model quality across capability, reliability, safety, and domain performance with structured benchmarks and expert review.",
    capabilities: ["Benchmark design", "Model red-teaming", "Quality & drift monitoring"],
    link: "/service/ai-model-evaluation"
  },
  {
    number: "06",
    icon: ShieldAlert,
    title: "AI safety, red teaming & content moderation",
    kicker: "Pressure-test the system",
    description: "Find failure modes before they reach users with adversarial testing, policy-aware review, and scalable content moderation operations.",
    capabilities: ["Adversarial testing", "Safety taxonomy design", "Content moderation"],
    link: "/service/ai-safety-red-teaming-content-moderation"
  },
  {
    number: "07",
    icon: Code2,
    title: "Custom ML & tailored software development",
    kicker: "Built around your edge",
    description: "Extend your AI capabilities with tailored ML workflows, data products, evaluation tools, and software designed for the way your team works.",
    capabilities: ["ML workflow engineering", "Custom data products", "Production integrations"],
    link: "/service/custom-ml-software-development"
  },
];

const workflow = [
  ["01", "Frame the objective", "We translate the model or product ambition into measurable data, behavior, and evaluation goals."],
  ["02", "Engineer the signal", "Specialists, domain experts, and tooling come together to produce the right data at the right level of nuance."],
  ["03", "Evaluate & improve", "Every cycle creates feedback: what worked, what failed, and what your system should learn next."],
];

export default function GenerativeAIServices() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad generative-hero">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link><span>/</span><strong>Generative AI, LLM & Model Services</strong>
            </nav>
            <h1>Make AI <em>work in the real world.</em></h1>
            <p>From the data that teaches a model to the evaluation that keeps it honest, we help AI teams move from promising intelligence to dependable performance.</p>
            <div className="service-hero-actions"><a className="button button-primary" href="/contact-us">Discuss your model <ArrowUpRight size={17} /></a><a className="text-link" href="#services">Explore services <ArrowDownRight size={17} /></a></div>
          </div>
          <div className="service-hero-art model-art" aria-label="Generative AI model system illustration">
            <div className="model-grid" />
            <div className="model-orbit model-orbit-one" /><div className="model-orbit model-orbit-two" />
            <div className="model-core"><BrainCircuit size={40} strokeWidth={1.2} /><span className="mono-label">MODEL / 02</span></div>
            <div className="model-token token-one">{`{ }`}</div><div className="model-token token-two">01</div><div className="model-token token-three">AI</div><div className="model-token token-four">↗</div>
            <div className="model-chip chip-one"><Sparkles size={15} /><span>GENERATE</span></div><div className="model-chip chip-two"><ShieldAlert size={15} /><span>ALIGN</span></div><div className="model-chip chip-three"><FlaskConical size={15} /><span>EVALUATE</span></div>
          </div>
        </section>

        <section id="services" className="service-list-section section-pad section-white">
          <div className="service-section-heading"><div><h2>From first prompt to <span>production-ready intelligence.</span></h2></div><p>Whether you are building a foundation model program or adding AI to an existing workflow, our services connect the data, people, and evaluation needed to move with confidence.</p></div>
          <div className="category-service-grid generative-grid">
            {services.map((service) => { const Icon = service.icon; return <article className="category-service-card" key={service.number}><div className="category-card-top"><span className="mono-label">{service.number}</span><Icon size={21} strokeWidth={1.5} /></div><span className="service-card-kicker">{service.kicker}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.capabilities.map((capability) => <li key={capability}><Check size={14} />{capability}</li>)}</ul><a href={service.link} className="category-card-link">Explore this service <ChevronRight size={16} /></a></article>; })}
          </div>
        </section>

        <section id="method" className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Intelligence needs a <span>feedback loop.</span></h2><p>Strong AI systems are not shipped once. They are shaped through deliberate data, measurable evaluation, and continuous learning from the world around them.</p></div>
          <div className="workflow-list">{workflow.map(([number, title, description]) => <div className="workflow-step" key={number}><span className="workflow-number mono-label">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={17} /></div>)}</div>
        </section>

        <section className="service-proof-3-section section-pad section-grey">
          <div className="contact-block">
            <h2>Useful<br /><em>intelligence.</em></h2>
          </div>
          <div className="proof-copy">
            <p>Good AI is not only more capable. It is more grounded, more measurable, and more useful to the people and workflows it serves.</p>
            <a href="/contact-us" className="text-link">Build your AI program <ArrowUpRight size={17} /></a>
          </div>
          <div className="proof-visual">
            <img src={ctaImage} alt="Abstract orange model core with data streams and neural pathways" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
