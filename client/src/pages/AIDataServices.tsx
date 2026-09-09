import SiteFooter from "@/components/SiteFooter";
import { Link } from "wouter";
import ctaImage from "./images/ai-data.jpg"
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Bot,
  Boxes,
  Check,
  ChevronRight,
  Languages,
  ScanLine,
  Sparkles,
} from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";

const services = [
  {
    number: "01",
    icon: ScanLine,
    title: "Egocentric data",
    kicker: "First-person intelligence",
    description:
      "Capture and structure the way people move, look, and interact with the world to create richer training data for embodied AI and robotics.",
    capabilities: ["Human activity capture", "Object interaction labels", "Temporal event mapping"],
    link: "/service/egocentric-data",
  },
  {
    number: "02",
    icon: Boxes,
    title: "AI annotation",
    kicker: "Signal, not noise",
    description:
      "Purpose-built annotation workflows that turn raw images, video, text, and audio into high-quality supervised learning signal.",
    capabilities: ["Multi-modal annotation", "Ontology design", "Human-in-the-loop QA"],
    link: "/service/ai-annotation",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Computer vision",
    kicker: "See what matters",
    description:
      "Give vision models the detail they need with precise labels for objects, scenes, movement, defects, and visual relationships.",
    capabilities: ["Bounding boxes & polygons", "Keypoints & segmentation", "Video tracking"],
    link: "/service/computer-vision",
  },
  {
    number: "04",
    icon: AudioLines,
    title: "Speech & language AI",
    kicker: "Understand every word",
    description:
      "Build better voice and language systems with transcription, intent, sentiment, entity, and conversational data services.",
    capabilities: ["Speech transcription", "Intent & entity labeling", "Conversation evaluation"],
    link: "/service/speech-language-ai",
  },
  {
    number: "05",
    icon: Languages,
    title: "Multilingual datasets & localization",
    kicker: "Local context, global reach",
    description:
      "Expand model performance across languages and markets with culturally aware datasets, translation, and localization workflows.",
    capabilities: ["Multilingual collection", "Translation & transcreation", "Cultural QA"],
    link: "/service/multilingual-datasets-localization",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Synthetic data generation",
    kicker: "More edge cases, sooner",
    description:
      "Create targeted, diverse, and privacy-conscious data to help models learn rare scenarios and move faster from experiment to deployment.",
    capabilities: ["Scenario generation", "Data augmentation", "Synthetic QA & validation"],
    link: "/service/synthetic-data-generation",
  },
];

const workflow = [
  ["01", "Define the signal", "We align on the model, ontology, edge cases, and quality bar before any data moves."],
  ["02", "Build the workflow", "A specialist team and the right tooling turn your requirements into a repeatable operation."],
  ["03", "Assure every layer", "Multi-pass review, sampling, and feedback loops keep the dataset dependable at scale."],
];

export default function AIDataServices() {
  return (
    <div className="service-page">
      <ServicesHeader />

      <main>
        <section className="service-hero section-pad">
          <div className="service-hero-copy">
            <nav className="breadcrumbs">
              <Link href="/">Home</Link><span>/</span><strong>AI Data & Annotation Services</strong>
            </nav>
            <h1>Data that helps AI <em>see, speak, and act.</em></h1>
            <p>
              The models of tomorrow are only as capable as the data behind them. We collect, annotate, validate, and localize the human signal that makes AI useful in the real world.
            </p>
            <div className="service-hero-actions">
              <a className="button button-primary" href="/contact-us">Discuss your dataset <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#services">Explore services <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="service-hero-art" aria-label="AI data signal illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><Bot size={42} strokeWidth={1.2} /><span className="mono-label">MODEL / SIGNAL</span></div>
            <div className="art-chip chip-one"><ScanLine size={16} /><span>VISION</span></div>
            <div className="art-chip chip-two"><AudioLines size={16} /><span>SPEECH</span></div>
            <div className="art-chip chip-three"><Languages size={16} /><span>LANGUAGE</span></div>
            <div className="art-chip chip-four"><Boxes size={16} /><span>ACTION</span></div>
            <div className="art-caption mono-label">DATA LAYER / AD-001</div>
          </div>
        </section>

        <section id="services" className="service-list-section section-pad section-white">
          <div className="service-section-heading">
            <div>
              <h2>Everything between raw input and <span>model-ready signal.</span></h2>
            </div>
            <p>Choose a focused capability or combine them into one end-to-end data program. Every engagement is tailored to your model, market, and quality requirements.</p>
          </div>
          <div className="category-service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              const link = service.link;
              return (
                <article className="category-service-card" key={service.number}>
                  <div className="category-card-top"><span className="mono-label">{service.number}</span><Icon size={21} strokeWidth={1.5} /></div>
                  <span className="service-card-kicker">{service.kicker}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.capabilities.map((capability) => <li key={capability}><Check size={14} />{capability}</li>)}
                  </ul>
                  <a href={link} className="category-card-link">Explore this service <ChevronRight size={16} /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="method" className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>Good annotation is not just a labeling task. It is a system of decisions, context, review, and learning—designed around the errors that matter to your model.</p>
          </div>
          <div className="workflow-list">
            {workflow.map(([number, title, description]) => (
              <div className="workflow-step" key={number}>
                <span className="workflow-number mono-label">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="service-proof-3-section section-pad section-grey">
          <div className="contact-block">
            <h2>Signal<br /><em>over volume.</em></h2>
          </div>
          <div className="proof-copy">
            <p>Whether you are training an embodied agent, evaluating a multilingual assistant, or preparing a computer vision model for production, the goal is the same: data that reflects the world your system will actually enter.</p>
            <a href="/contact-us" className="text-link">Build your data program <ArrowUpRight size={17} /></a>
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
