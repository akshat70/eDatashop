import SiteFooter from "@/components/SiteFooter";
import ServicesHeader from "@/components/ServicesHeader";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Check,
  Eye,
  Gauge,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { value: "Detection", label: "and object recognition" },
  { value: "Segmentation", label: "for precise labels" },
  { value: "Vision QA", label: "across video and imagery" },
];

const useCases = [
  "Bounding boxes, masks, and keypoints for visual AI",
  "Object detection and scene understanding for robotics",
  "Video tracking and action recognition workflows",
  "OCR and visual-text labeling for complex documents and signage",
];

const workflow = [
  { step: "01", title: "Define the visual taxonomy", text: "We align on label classes, edge cases, annotation rules, and acceptance criteria before labeling begins." },
  { step: "02", title: "Assess the image or video stack", text: "We review quality, structure, and coverage to prepare the best labeling approach for each dataset." },
  { step: "03", title: "Annotate with review loops", text: "Specialists apply labels, validate ambiguous frames, and run QA checks across the full collection." },
  { step: "04", title: "Deliver model-ready outputs", text: "We provide clean, documented, export-ready annotations with traceability and model-use guidance." },
];

export default function ComputerVision() {
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
              <strong>Computer Vision</strong>
            </nav>

            <h1>
              Visual AI data built for <em>precision and scale.</em>
            </h1>
            <p>
              We help teams prepare image and video datasets for detection, segmentation, scene understanding, and operational vision systems—without losing accuracy at the edge cases.
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

          <div className="service-hero-art" aria-label="Computer vision illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <Eye size={42} strokeWidth={1.2} />
              <span className="mono-label">VISION / SIGNAL</span>
            </div>
            <div className="art-chip chip-one"><Target size={16} /><span>Detection</span></div>
            <div className="art-chip chip-two"><Boxes size={16} /><span>Segmentation</span></div>
            <div className="art-chip chip-three"><ScanLine size={16} /><span>OCR</span></div>
            <div className="art-chip chip-four"><Sparkles size={16} /><span>Tracking</span></div>
            <div className="art-caption mono-label">COMPUTER VISION / DATASET / 001</div>
          </div>
        </section>

        <section className="service-detail-body section-pad section-white">
          <div className="service-detail-main">
            <div className="service-section-intro">
              <h2>What we <em>support</em></h2>
              <p className="service-detail-lead">
                We support annotation planning, label schema design, image and video labeling, QA review, and model-ready output for computer vision pipelines across research, operations, and production.
              </p>
            </div>

            <div className="service-outcomes">
              <div>
                <ShieldCheck size={19} />
                <strong>Accurate by design</strong>
                <span>Clear boundaries, edge-case rules, and QA reviews reduce visual noise.</span>
              </div>
              <div>
                <Check size={19} />
                <strong>Scalable workflows</strong>
                <span>Manual, hybrid, and tool-assisted processes scaled across large collections.</span>
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
                  <li><Check size={16} />Labeled image and video datasets with agreed schema</li>
                  <li><Check size={16} />COCO, YOLO, Pascal VOC, or custom annotation files</li>
                  <li><Check size={16} />Dataset manifest, QA outcomes, and error review notes</li>
                </ul>
              </div>
              <div>
                <span className="mono-label accent-label">BUILT FOR</span>
                <ul>
                  <li><Check size={16} />Computer vision and perception models</li>
                  <li><Check size={16} />Industrial inspection and smart operations</li>
                  <li><Check size={16} />Autonomous systems and visual AI products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-method-section section-pad">
          <div className="method-intro">
            <h2>Built for the details <span>models miss.</span></h2>
            <p>
              Quality visual datasets depend on framework, specification, and review—especially when objects are small, partially visible, or occurring in real-world conditions.
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
            <h2>Make every pixel<br /><em>count.</em></h2>
          </div>
          <div className="proof-copy">
            <p>
              Whether you need bounding boxes, masks, OCR labels, or visual QA at scale, our workflows are designed to improve the signal behind your model.
            </p>
            <a href="/contact-us" className="text-link">Build your computer vision dataset <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
