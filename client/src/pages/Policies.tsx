import { Link } from "wouter";
import ServicesHeader from "@/components/ServicesHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacyPolicy() {
  return <div className="legal-page">
    <ServicesHeader />
    <main>
      <header className="legal-hero section-pad">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link>
          <span>/</span>
          <strong>Policies</strong>
        </nav>
        <h1>Policies</h1>
        <p>How CyberData India and eDataShop collect, use, protect, and manage information received through this website.</p><small>Last updated: 6 September 2026</small></header>

      <section className="legal-content section-pad section-white">
        <article><section id="information">
          <h2>1. Data and IT Security Policy</h2>
          <p>CyberData India, Sanchi Building, 2nd Floor, 77 Nehru Place, New Delhi 110019 follows clearly documented processes to ensure IT and Data security is not compromised. Our business is the conversion and protection of valuable data and we depend on these security measures for our success. We have never had an instance of compromised client data.</p>
        </section>
          <section id="use">
            <h2>2. Data Transfer</h2>
            <ul>
              <li>All input images and text data are stored centrally on server, not on local machines</li>
              <li>Individual FTP site for each client. Only authorized personnel can access the FTP.</li>
              <li>Data transferred from clients via FTP, emails, portable media.</li>
              <li>Sensitive client data transmitted via FTP only after encryption and password protected. Password and data files never sent in same email if data being sent via email.</li>
            </ul>
          </section>
          <section>
            <h2>3. IT Security</h2>
            <ul>
              <li>Daily on-site and weekly encrypted cloud backups ensure data safety.</li>
              <li>Only trained, authorized staff can access client data.</li>
              <li>We use licensed software exclusively—no pirated tools.</li>
              <li>Strong passwords are enforced; systems lock after three failed attempts.</li>
              <li>Client data is stored only for the agreed duration, with regular audits to ensure timely deletion.</li>
            </ul>
          </section>
          <section id="cookies">
            <h2>4. Computers</h2>
            <ul>
              <li>Windows ISA Server enables file-level security with full activity tracking.</li>
              <li>All systems are protected by Symantec antivirus.</li>
              <li>Server room is securely locked with access limited to the IT team.</li>
              <li>Employee workstations are restricted—no USBs, disc drives, printers, or camera devices (including phones) allowed.</li>
            </ul>
          </section>
          <section id="security">
            <h2>5. Internet Access Policy</h2>
            <ul>
              <li>No internet access for general workstations. Internet can be accessed only by limited personnel who are responsible for transmitting client data or working on online servers through VPN.</li>
              <li>Access to social networks, personal emails, chat restricted during working hours and can be done only after authorization.</li>
              <li>Downloading of software and other executable files strictly prohibited without proper authorization.</li>
            </ul>
          </section>
          <section id="rights">
            <h2>6. Premises Security</h2>
            <ul>
              <li>Physically secure workspace with 24/7 security and CCTV monitoring (footage retained for 30 days).</li>
              <li>Fire and water damage protection in place; annual fire audits conducted by government authorities.</li>
              <li>Health and Safety compliant environment.</li>
              <li>Only authorized personnel allowed; visitors must sign in upon entry.</li>
            </ul>
          </section>
        </article>
      </section>
    </main>
    <SiteFooter /></div>;
}
