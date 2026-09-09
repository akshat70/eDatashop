import SiteFooter from "@/components/SiteFooter";
import { type PointerEvent, useState } from "react";
import heroImage from "./images/homepage-hero.png";
import pcra from "./images/pcra.webp";
import fireFly from "./images/firefly.webp";
import eurekaForbes from "./images/eureka-forbes.webp";
import shine from "./images/shine.webp";
import collegesource from "./images/college-source.webp";
import eBooks from "./images/eBooks.webp";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Database,
  FileCheck2,
  FileText,
  Menu,
  MoveRight,
  ScanLine,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import ServicesHeader from "@/components/ServicesHeader";

const services = [
  {
    number: "01",
    icon: FileText,
    title: "Data entry",
    description:
      "Accurate manual and automated entry for documents, forms, catalogs, and everything in between.",
    tag: "Capture",
  },
  {
    number: "02",
    icon: Database,
    title: "Data processing",
    description:
      "Structure, sort, validate, and enrich large datasets so teams can make decisions with confidence.",
    tag: "Structure",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Digitization",
    description:
      "Transform paper archives, scans, and PDFs into searchable, usable digital records.",
    tag: "Convert",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Quality assurance",
    description:
      "Human-led review and validation layers that protect the integrity of every important record.",
    tag: "Validate",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "AI data services",
    description:
      "Annotation and evaluation workflows that give AI teams the high-quality signal they need.",
    tag: "Train",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Secure operations",
    description:
      "Reliable processes built around confidentiality, controlled access, and compliance-minded delivery.",
    tag: "Protect",
  },
];

const industries = [
  ["Government", "Records, forms, public data"],
  ["Healthcare", "Patient files, research, compliance"],
  ["Finance", "Transactions, documents, risk"],
  ["Retail", "Catalogs, orders, customer data"],
  ["Publishing", "Books, archives, metadata"],
  ["Legal", "Contracts, discovery, case files"],
];

const processSteps = [
  ["01", "Understand", "We map your inputs, constraints, and desired outcome."],
  ["02", "Operate", "Our specialists and systems process the work at scale."],
  ["03", "Assure", "Layered QA makes every output more reliable."],
  ["04", "Deliver", "Clean, structured data arrives ready for what is next."],
];

const clientLogos = [
  { name: "CollegeSource", src: collegesource },
  { name: "PCRA", src: pcra },
  { name: "FireFly", src: fireFly },
  { name: "Eureka Forbes", src: eurekaForbes },
  { name: "eBooks", src: eBooks },
  { name: "Shine", src: shine },
];

function InteractiveHeroGraphic() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [activeNode, setActiveNode] = useState("validated");

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <div
      className="interactive-graphic"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer({ x: 50, y: 50 })}
      aria-label="Interactive data workflow graphic"
    >
      <svg className="signal-map" viewBox="0 0 600 500" role="img" aria-label="Animated data signals moving from documents to a validated dataset">
        <defs>
          <linearGradient id="signal-orange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f15a24" stopOpacity="0" />
            <stop offset=".3" stopColor="#f15a24" />
            <stop offset="1" stopColor="#f15a24" stopOpacity=".12" />
          </linearGradient>
          <filter id="signal-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g className="map-grid"><path d="M35 55H565M35 120H565M35 185H565M35 250H565M35 315H565M35 380H565M35 445H565" /><path d="M70 25V475M145 25V475M220 25V475M295 25V475M370 25V475M445 25V475M520 25V475" /></g>
        <g className="signal-lines" filter="url(#signal-glow)">
          <path d="M62 124 C155 124 161 224 264 242 S390 236 509 155" />
          <path d="M62 160 C150 160 163 247 268 253 S395 253 509 209" />
          <path d="M62 201 C158 200 185 272 273 266 S398 278 509 263" />
          <path d="M62 246 C157 244 195 296 280 279 S395 303 509 319" />
          <path d="M62 290 C164 289 198 321 286 292 S415 339 509 374" />
        </g>
        <g className="signal-pulses">
          <circle cx="168" cy="184" r="4" /><circle cx="277" cy="254" r="5" />
        </g>
        <g className="signal-axis"><circle cx="62" cy="124" r="4" /><circle cx="509" cy="155" r="4" /><circle cx="509" cy="374" r="4" /></g>
      </svg>
      <div className="graphic-micro-label micro-top mono-label">LIVE DATA LAYER / 001</div>
      <div className="graphic-micro-label micro-bottom mono-label">MOVE TO EXPLORE</div>
      <div className="graphic-node node-input" style={{ transform: `translate(${(pointer.x - 50) * -0.06}px, ${(pointer.y - 50) * -0.06}px)` }}>
        <span className="node-icon"><FileText size={15} /></span>
        <span><small>INPUT</small><strong>Documents</strong></span>
      </div>
      <div className="graphic-node node-ai" style={{ transform: `translate(${(pointer.x - 50) * 0.08}px, ${(pointer.y - 50) * 0.08}px)` }}>
        <span className="node-icon is-orange"><Sparkles size={15} /></span>
        <span><small>PROCESS</small><strong>Human + AI</strong></span>
      </div>
      <button
        className={`graphic-node node-output ${activeNode === "validated" ? "is-selected" : ""}`}
        style={{ transform: `translate(${(pointer.x - 50) * 0.12}px, ${(pointer.y - 50) * 0.12}px)` }}
        onClick={() => setActiveNode("validated")}
      >
        <span className="node-icon is-dark"><Database size={15} /></span>
        <span><small>OUTPUT</small><strong>Validated</strong></span>
        <Check size={13} className="node-check" />
      </button>
      <div className="graphic-readout">
        <span className="readout-dot" />
        <span className="mono-label">SIGNAL STATUS</span>
        <strong>{activeNode === "validated" ? "READY TO USE" : "PROCESSING"}</strong>
      </div>
    </div>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("Data entry");

  const navigate = (id: string) => {
    setMenuOpen(false);
    // if (id === "contact-us") {
      window.location.assign(id);
      // return;
    // }
    // scrollToId(id);
  };

  return (
    <div className="site-shell">

      <ServicesHeader />

      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <h1>Make every piece of data <em>do more.</em></h1>
            <p className="hero-intro">
              We transform messy, paper-based, and legacy information into clean, structured data for research, institutions, robotics, and AI models.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => navigate("/contact-us")}>
                Start a conversation <ArrowUpRight size={17} />
              </button>
              <button className="text-link" onClick={() => navigate("/about-us")}>
                Know more about us <MoveRight size={17} />
              </button>
            </div>
            <div className="hero-meta" aria-label="Company statistics">
              <div>
                <strong>29 years</strong>
                <span>In data & information management</span>
              </div>
              <div>
                <strong>99.8%</strong>
                <span>Accuracy across 100M+ records</span>
              </div>
              <div>
                <strong>ISO</strong>
                <span>Certified quality & security</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-visual">
              <img src={heroImage} alt="Abstract illustration of documents becoming structured data" />
              <InteractiveHeroGraphic />
              <div className="visual-corner visual-corner-tl mono-label">EDS / 001</div>
              <div className="visual-corner visual-corner-br mono-label">PRECISION → PROGRESS</div>
              <div className="workflow-card">
                <span className="mono-label workflow-label">LIVE WORKFLOW</span>
                <div className="workflow-row">
                  <span className="workflow-icon"><FileText size={14} /></span>
                  <span>Raw inputs</span>
                  <span className="workflow-line" />
                  <span className="workflow-icon is-orange"><Database size={14} /></span>
                  <strong>Useful data</strong>
                </div>
                <div className="workflow-status"><span /> Processing with a human in the loop</div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-strip" aria-labelledby="client-strip-title">
          <span id="client-strip-title" className="mono-label">TRUSTED BY TEAMS WHO HANDLE IMPORTANT INFORMATION</span>
          <div className="client-marquee">
            <div className="client-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div className="client-logo" key={`${client.name}-${index}`} aria-hidden={index >= clientLogos.length}>
                  <img src={client.src} alt={index < clientLogos.length ? client.name : ""} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities-section section-pad section-white">
          <div className="section-heading split-heading">
            <div>
              <h2>The work behind <span>better data.</span></h2>
            </div>
            <p>One partner for the essential layer between information and action. Choose the support you need, then scale when you are ready.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.title;
              return (
                <button
                  key={service.number}
                  className={`service-card ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveService(service.title)}
                  onFocus={() => setActiveService(service.title)}
                  onClick={() => service.title === "AI data services" ? window.location.assign("/services/ai-data-annotation") : setActiveService(service.title)}
                  aria-pressed={isActive}
                >
                  <div className="service-topline">
                    <span className="mono-label">{service.number}</span>
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow"><ArrowDownRight size={19} /></span>
                </button>
              );
            })}
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="about-aside">
            <div className="aside-index">01<span>—</span>04</div>
            <p>High-touch expertise. System-ready output. A calmer way to move data forward.</p>
          </div>
          <div className="about-content">
            <h2>Reliable by design, <span>human where it counts.</span></h2>
            <div className="process-list">
              {processSteps.map(([number, title, description]) => (
                <div className="process-item" key={number}>
                  <span className="process-number mono-label">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <Check size={17} className="process-check" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="industries-section section-pad section-grey">
          <div className="section-heading split-heading">
            <div>
              <h2>Built for the <span>real world.</span></h2>
            </div>
            <p>Every industry has different rules for what “good” looks like. Our workflows adapt to yours without losing the essentials: security, accuracy, and momentum.</p>
          </div>
          <div className="industry-layout">
            <div className="industry-list">
              {industries.map(([title, detail], index) => (
                <button className="industry-row" key={title} onClick={() => setActiveService(title)}>
                  <span className="mono-label">0{index + 1}</span>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>
            <div className="industry-note">
              <Sparkles size={21} />
              <span className="mono-label">THE OUTCOME</span>
              <h3>Less time wrestling with information. More time putting it to work.</h3>
              <button className="text-link dark-link" onClick={() => navigate("/contact-us")}>Talk through your workflow <ArrowUpRight size={17} /></button>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-block">
            <div>
              <h2>Bring us the messy part.</h2>
              <p>Tell us what is slowing your team down. We will help you find the cleanest way forward.</p>
            </div>
            <a className="button button-dark" href="/contact-us">
              Get in touch <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
