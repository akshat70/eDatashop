import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Globe2,
  Languages,
  MessageSquareText,
  Mic,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Multilingual", label: "QA and evaluation" },
  { value: "Locale-aware", label: "annotation rules" },
  { value: "Speech + text", label: "language datasets" },
];

const useCases = [
  "Native-language prompt, query, and conversational dataset creation",
  "Intent, entity, sentiment, and relevance labeling across locales",
  "Speech collection, transcription, diarization, and accent-aware QA",
  "Localization review for cultural correctness, tone, and policy fit",
];

const workflow = [
  { step: "01", title: "Define the locales", text: "We align on language pairs, target regions, vocabulary, domains, and evaluation goals before sourcing begins." },
  { step: "02", title: "Prepare the corpus", text: "We collect representative prompts, utterances, recordings, customer scenarios, and source materials from the intended operating contexts." },
  { step: "03", title: "Annotate and localize", text: "Annotators and reviewers apply intent, entity, sentiment, safety, and cultural labeling with locale-adapted guidance." },
  { step: "04", title: "Deliver and refine", text: "We package the clean dataset, QA findings, and export-ready files for training, evaluation, or localization workflows." },
];

export default function MultilingualAI() {
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
              <strong>Multilingual AI Datasets & Localization</strong>
            </nav>

            <h1>
              Language data built for <em>global AI.</em>
            </h1>
            <p>
              We create multilingual datasets, localization workflows, and language quality systems that help AI models understand people across regions, dialects, and cultural contexts.
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

          <div className="service-hero-art" aria-label="Multilingual datasets illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Languages size={42} strokeWidth={1.2} />
              <span className="mono-label">GLOBAL LANGUAGE</span>
            </div>
            <div className="art-chip chip-one"><Globe2 size={16} /><span>Locale</span></div>
            <div className="art-chip chip-two"><Mic size={16} /><span>Speech</span></div>
            <div className="art-chip chip-three"><MessageSquareText size={16} /><span>Text</span></div>
            <div className="art-chip chip-four"><Users size={16} /><span>Intent</span></div>
            <div className="art-caption mono-label">MULTILINGUAL / DATA / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support multilingual data creation, localization review, speech/text labeling, annotation governance, and evaluation workflows for AI systems operating across languages and regions.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Context-aware</strong>
                <span>We label for intent, tone, safety, and regional meaning—not just literal translation.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Quality-led</strong>
                <span>Review loops, rubrics, and locale checks keep datasets aligned to user expectations.</span>
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
                  <li><Check size={16} />Multilingual text, prompt, and speech datasets</li>
                  <li><Check size={16} />Locale-specific annotation guidelines and QA rubrics</li>
                  <li><Check size={16} />Model-ready exports with metadata and review notes</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Voice assistants and customer support AI</li>
                  <li><Check size={16} />Global digital products and localization teams</li>
                  <li><Check size={16} />Healthcare, public sector, and enterprise language systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>global teams miss.</span></h2>
            <p>
              Good multilingual data needs careful design, strong annotation rules, and region-aware QA so language quality remains consistent across speaker groups, use cases, and product scenarios.
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
            <h2>Give your AI a<br /><em>global voice.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you are expanding to new markets or improving multilingual understanding for existing products, the right dataset makes language quality measurable and scalable.
            </p>
            <a href="/contact-us" className="text-link">Build your multilingual dataset <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
