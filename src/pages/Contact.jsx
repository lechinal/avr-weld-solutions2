import { useState } from "react";

import styles from "./Contact.module.css";

const contactInfo = [
  {
    title: "Telefon",
    value: "+40 750 123 456",
    icon: "📞",
    href: "tel:+40750123456",
  },
  {
    title: "Email",
    value: "contact@avrweldsolutions.ro",
    icon: "📧",
    href: "mailto:contact@avrweldsolutions.ro",
  },
  {
    title: "Adresă",
    value: "Str. Al. G. Golescu Nr. 42, Blaj, judetul Alba",
    icon: "📍",
    href: "https://maps.app.goo.gl/e3ahHWGnYPcA4JyP7",
  },
  {
    title: "Program",
    value: "Luni - Vineri: 08:00 - 18:00",
    icon: "🕒",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Contactează-ne</h1>
          <p className={styles.heroSubtitle}>
            Suntem aici să vă ajutăm cu toate nevoile de sudură și confecții
            metalice. Contactați-ne pentru o consultație gratuită.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Trimite-ne un Mesaj</h2>

              <form
                action="https://formspree.io/f/moqobqzb" // Endpoint-ul de la Formspree
                method="POST"
                className={styles.form}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                      Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="company">
                      Companie
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="service">
                    Serviciu de Interes
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Selectează un serviciu</option>
                    <option value="welding">Sudură Profesională</option>
                    <option value="fabrication">Confecții Metalice</option>
                    <option value="transport">Transport Industrial</option>
                    <option value="consultation">Consultanță</option>
                    <option value="other">Altele</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={6}
                    placeholder="Descrieți proiectul dumneavoastră și cum vă putem ajuta..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  <span className={styles.buttonIcon}>📧</span>
                  Trimite Mesajul
                </button>
              </form>
            </div>

            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Informații de Contact</h2>
              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <span>{info.icon}</span>
                    </div>
                    <div className={styles.infoContent}>
                      <h3 className={styles.infoCardTitle}>{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={styles.infoValue}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className={styles.infoValue}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.mapContainer}>
                <h3 className={styles.mapTitle}>Locația Noastră</h3>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapIcon}>🗺️</div>
                  <p className={styles.mapText}>
                    Vizitați-ne la sediul nostru din localitatea Blaj, judetul
                    Alba pentru consultații directe și discuții despre
                    proiectele dumneavoastră.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/e3ahHWGnYPcA4JyP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapButton}
                  >
                    Vezi pe Hartă
                    <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.faqTitle}>Întrebări Frecvente</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Cât durează realizarea unui proiect?
              </h3>
              <p className={styles.faqAnswer}>
                Durata depinde de complexitatea proiectului. Proiectele simple
                pot fi finalizate în 1-2 săptămâni, în timp ce proiectele
                complexe pot dura 4-8 săptămâni.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Oferiți servicii în toată țara?
              </h3>
              <p className={styles.faqAnswer}>
                Da, oferim servicii la nivel național prin echipele noastre
                mobile specializate. Contactați-ne pentru detalii despre
                disponibilitatea în zona dumneavoastră.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Aveți certificări pentru sudură?
              </h3>
              <p className={styles.faqAnswer}>
                Da, echipa noastră deține certificări internaționale precum EN
                1090, ISO 3834, ASME IX și alte standarde relevante pentru
                industrie.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Cum calculați prețurile?</h3>
              <p className={styles.faqAnswer}>
                Prețurile sunt calculate în funcție de materialele utilizate,
                complexitatea lucrării, timpul necesar și specificațiile
                tehnice. Oferim întotdeauna o estimare detaliată.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
