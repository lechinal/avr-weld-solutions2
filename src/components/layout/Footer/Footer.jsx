import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const footerLinks = {
  services: [
    { label: "Sudură Profesională", href: "/services" },
    { label: "Confecții Metalice", href: "/services" },
    { label: "Transport Industrial", href: "/services" },
    { label: "Consultanță", href: "/contact" },
  ],
  company: [
    { label: "Despre Noi", href: "/about" },
    { label: "Proiecte", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Servicii", href: "/services" },
  ],
  contact: [
    { label: "+40 750 123 456", href: "tel:+40750123456", icon: "📞" },
    {
      label: "contact@avrweldsolutions.ro",
      href: "mailto:contact@avrweldsolutions.ro",
      icon: "📧",
    },
    {
      label: "Blaj, judetul Alba",
      href: "https://maps.app.goo.gl/e3ahHWGnYPcA4JyP7",
      icon: "📍",
    },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <div className={styles.logo}>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>AVR</span>
                <span className={styles.logoSub}>WELD SOLUTIONS</span>
              </div>
            </div>
            <p className={styles.companyDescription}>
              Soluții profesionale de sudură și confecții metalice pentru
              industria românească. Peste 15 ani de experiență în domeniu cu
              certificări internaționale.
            </p>
            <div className={styles.certifications}>
              <span className={styles.certification}>EN 1090</span>
              <span className={styles.certification}>ISO 3834</span>
              <span className={styles.certification}>ASME IX</span>
            </div>
          </div>

          {/* Services Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Servicii</h3>
            <ul className={styles.linksList}>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Companie</h3>
            <ul className={styles.linksList}>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <ul className={styles.contactList}>
              {footerLinks.contact.map((contact, index) => (
                <li key={index} className={styles.contactItem}>
                  <a
                    href={contact.href}
                    className={styles.contactLink}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className={styles.contactIcon}>{contact.icon}</span>
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <Link to="/contact">
                <button className={styles.ctaButton}>
                  <span className={styles.buttonIcon}>📞</span>
                  Solicită Ofertă
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} AVR Weld Solutions. Toate drepturile rezervate.
            </p>
          </div>
          <div className={styles.legalLinks}>
            {/* Am înlocuit <a> cu <Link> și am pus rutele corecte */}
            <Link to="/privacy-policy" className={styles.legalLink}>
              Politica de Confidențialitate
            </Link>
            <Link to="/terms-and-conditions" className={styles.legalLink}>
              Termeni și Condiții
            </Link>
            <Link to="/gdpr" className={styles.legalLink}>
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
