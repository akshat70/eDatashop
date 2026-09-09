import { Link } from "wouter";
import brandLogo from "./images/logo-02.png";

export default function SiteFooter() {
  return <footer className="global-footer">
  <div className="global-footer-grid">
    <div className="global-footer-brand">
      <Link href="/" aria-label="DataShop home">
        <img src={brandLogo} alt="DataShop, Data · AI · Impact" />
      </Link>
      <p>The data and AI services brand of CyberData India, a full-service information management company established in 1996.</p>
    </div>
    <div className="global-footer-column">
      <span className="mono-label">COMPANY</span>
      <Link href="/overview">About us</Link>
      <Link href="/engagement-models">Engagement models</Link>
      <Link href="/case-studies">Case studies</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/faq">FAQ</Link>
    </div>
    <div className="global-footer-column">
      <span className="mono-label">SERVICES</span>
      <Link href="/services/ai-data-annotation">AI Data & Annotation</Link>
      <Link href="/services/generative-ai-llm-model">Generative AI & LLM</Link>
      <Link href="/services/enterprise-data-document-digitization">Enterprise Data & Digitization</Link>
      <Link href="/services/academic-research-cultural-heritage">Academic & Cultural Heritage</Link>
    </div>
    <div className="global-footer-column global-footer-contact">
      <span className="mono-label">CONTACT</span>
      <a href="mailto:info@edatashop.com">info@edatashop.com</a>
      <a href="tel:+911126287210">+91 11 2628 7210</a>
      <address>Sanchi Building, 2nd Floor, 77 Nehru Place,<br />New Delhi – 110019, India</address>
    </div>
    <div className="global-footer-column">
      <span className="mono-label">LEGAL</span>
      <Link href="/privacy-policy">Privacy policy</Link>
      <Link href="/terms-and-conditions">Terms & conditions</Link>
    </div>
  </div>
  <div className="global-footer-bottom">
    <span className="footer-meta-group">
      <span>© 2026</span> 
      <span>CyberData India / eDataShop.</span> 
      <span>All rights reserved.</span> 
      <span className="footer-design-credit">Designed by <a href="https://primeromediagroup.com" target="_blank" rel="noreferrer">Primero Media</a>
      </span></span>
    <span>ISO 9001:2015 & ISO 27001:2013 Certified</span>
  </div>
</footer>;
  }