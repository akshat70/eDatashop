import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import brandLogo from "./images/logo-01.png";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";

const companyGroups = [
  {
    title: "About us",
    items: [
      { label: "Overview", href: "/overview" },
      { label: "Social Impact", href: "/social-impact" },
      { label: "Engagement models", href: "/engagement-models" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Egocentric data Samples", href: "/engagement-models" },
      { label: "SIT/NER OTS Data", href: "/sit-ner-ots-data" },
    ],
  },
];

const serviceGroups = [
  {
    title: "AI Data & Annotation Services",
    href: "/services/ai-data-annotation",
    items: ["Egocentric Data", "AI Annotation", "Computer Vision", "Speech & Language AI", "Multilingual AI Datasets & Localization", "Synthetic Data Generation"],
  },
  {
    title: "Generative AI, LLM & Model Services",
    href: "/services/generative-ai-llm-model",
    items: ["Generative AI", "LLM Data", "RLHF & AI Alignment", "Agentic AI", "AI Model Evaluation", "AI Safety, Red Teaming & Content Moderation", "Custom ML & Tailored Software Development"],
  },
  {
    title: "Enterprise Data, Document & Digitization Services",
    href: "/services/enterprise-data-document-digitization",
    items: ["Document AI & IDP", "Enterprise Document Digitization & OCR", "Data Conversion & Content Transformation", "Metadata Enrichment & Data Cleansing", "Data Engineering & ETL", "Data Migration & Warehousing", "Knowledge Graphs & Taxonomy Development", "RAG Support", "Intelligent Data Processing & Records Management"],
  },
  {
    title: "Academic, Research & Cultural Heritage Solutions",
    href: "/services/academic-research-cultural-heritage",
    items: ["Digitisation of Anthropological Archives", "AI for Cultural Heritage"],
  },
];

const serviceSlug = (title: string) => title.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ServicesHeader({ compact = false }: { compact?: boolean }) {
  const [activeMenu, setActiveMenu] = useState<"company" | "services" | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const companyButtonRef = useRef<HTMLButtonElement>(null);
  const [companyMenuPosition, setCompanyMenuPosition] = useState<{ left: number; top: number } | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (activeMenu && headerRef.current && !headerRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu !== "company" || !companyButtonRef.current || !headerRef.current) {
      setCompanyMenuPosition(null);
      return;
    }

    const buttonRect = companyButtonRef.current.getBoundingClientRect();
    const headerRect = headerRef.current.getBoundingClientRect();
    const panelWidth = 448;
    const maxLeft = Math.max(0, headerRect.width - panelWidth - 8);
    const left = Math.min(buttonRect.left - headerRect.left, maxLeft);

    setCompanyMenuPosition({
      left,
      top: buttonRect.bottom - headerRect.top + 12,
    });
  }, [activeMenu]);

  const toggleMenu = (menu: "company" | "services") => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  return (
    <div className="header-shell" ref={headerRef}>
      <header className={`site-header services-header ${compact ? "is-compact" : ""}`}>
        <Link href="/" className="brand" aria-label="DataShop home">
          <img className="brand-logo" src={brandLogo} alt="DataShop, Data · AI · Impact" />
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <button ref={companyButtonRef} className={`services-trigger ${activeMenu === "company" ? "is-open" : ""}`} onClick={() => toggleMenu("company")} aria-expanded={activeMenu === "company"}>
            Company <ChevronDown size={15} />
          </button>
          <button className={`services-trigger ${activeMenu === "services" ? "is-open" : ""}`} onClick={() => toggleMenu("services")} aria-expanded={activeMenu === "services"}>
            Services <ChevronDown size={15} />
          </button>
        </nav>
        <a className="header-cta project-cta" href="mailto:info@edatashop.com?subject=Website%20enquiry">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle services-menu-toggle" onClick={() => toggleMenu("services")} aria-label="Toggle menu" aria-expanded={activeMenu === "services"}>{activeMenu === "services" ? <X size={22} /> : <span className="menu-bars"><i /><i /><i /></span>}</button>
      </header>
      {activeMenu === "company" && companyMenuPosition && <div className="services-mega-menu company-mega-menu" style={{ left: companyMenuPosition.left }}>
        <div className="company-menu-shell">
          <div className="company-menu-grid">
            {companyGroups.map((group) => (
              <div className="company-menu-column" key={group.title}>
                <h3>{group.title}</h3>
                <div className="company-menu-links">
                  {group.items.map((item) => (
                    <Link href={item.href} key={item.label} onClick={() => setActiveMenu(null)}>{item.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>}
      {activeMenu === "services" && <div className="services-mega-menu">
        <div className="mega-menu-inner">
          {serviceGroups.map((group) => <div className="mega-group" key={group.title}>
            <Link href={group.href} className="mega-group-title" onClick={() => setActiveMenu(null)}>{group.title}</Link>
            <div className="mega-group-items">
              {group.items.map((item) => <Link href={`/service/${serviceSlug(item)}`} key={item} onClick={() => setActiveMenu(null)}>{item}</Link>)}
            </div>
          </div>)}
        </div>
      </div>}
    </div>
  );
}
