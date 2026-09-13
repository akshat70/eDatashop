import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Check,
  FileText,
  Globe,
  Mic,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Transcription", label: "and diarization" },
  { value: "Intent", label: "and entity labeling" },
  { value: "Multilingual", label: "language quality" },
];

const useCases = [
  "Transcription, speaker labeling, and conversation structure",
  "Intent, sentiment, and entity recognition for voice assistants",
  "Multilingual utterance collection and localization review",
  "Dialogue and safety evaluation for language-first AI products",
];

const workflow = [
  { step: "01", title: "Define the language objective", text: "We clarify the target dialects, domains, workflows, and quality metrics before any collection or annotation begins." },
  { step: "02", title: "Prepare the corpus", text: "We review audio, text, or conversational inputs, normalize formats, and define the labeling rules for the project." },
  { step: "03", title: "Annotate and validate", text: "Linguists, reviewers, and QA specialists apply intent, entity, sentiment, and conversation labels with calibration loops." },
  { step: "04", title: "Deliver the language dataset", text: "We provide clean, documented outputs with metadata, coverage checks, and format-ready exports for training or evaluation." },
];

export default function SpeechLanguageAI() {
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
              <strong>Speech & Language AI</strong>
            </nav>

            <h1>
              Language data designed for <em>real-world understanding.</em>
            </h1>
            <p>
              We prepare speech and language datasets that help AI systems understand the nuance, structure, and intent behind how people actually speak, write, and interact.
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

          <div className="service-hero-art" aria-label="Speech and language AI illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Mic size={42} strokeWidth={1.2} />
              <span className="mono-label">VOICE / LANGUAGE</span>
            </div>
            <div className="art-chip chip-one"><AudioLines size={16} /><span>Audio</span></div>
            <div className="art-chip chip-two"><FileText size={16} /><span>Text</span></div>
            <div className="art-chip chip-three"><Globe size={16} /><span>Locale</span></div>
            <div className="art-chip chip-four"><Users size={16} /><span>Intent</span></div>
            <div className="art-caption mono-label">SPEECH / LANGUAGE / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support transcription, diarization, intent labeling, multilingual QA, conversational annotation, and language-quality workflows for speech and text AI products.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Context-aware</strong>
                <span>We label around intent, nuance, and conversational structure—not just raw text.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Quality-led</strong>
                <span>Calibration and review loops help protect consistency across speakers and locales.</span>
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
                  <li><Check size={16} />Timestamped, speaker-labeled transcripts</li>
                  <li><Check size={16} />Intent, entity, sentiment, and conversation annotations</li>
                  <li><Check size={16} />Multilingual QA reports and model-ready exports</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Voice assistants and call analytics</li>
                  <li><Check size={16} />Customer support and conversational AI</li>
                  <li><Check size={16} />Healthcare, government, and enterprise language workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>
              Good speech and language datasets are shaped around real conversations, real accents, and real context—so the model learns the nuance people expect from a useful assistant.
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
            <h2>Turn sound and text<br /><em>into signal.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether your use case is speech recognition, multilingual assistants, or conversational intelligence, our workflows are built to make language data more accurate and useful.
            </p>
            <a href="/contact-us" className="text-link">Build your language dataset <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
