import { Link } from "react-router-dom";
import styles from "./About.module.css";

const teamMembers = [
  {
    name: "Alexandru Vasile",
    role: "Fondator & Sudor Principal",
    experience: "15+ ani experiență",
    specialization: "Sudură TIG, MIG/MAG",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    certifications: ["EN 1090", "ISO 3834", "Sudură hiperbară"],
  },
  {
    name: "Radu Popescu",
    role: "Sudor Specializat",
    experience: "12+ ani experiență",
    specialization: "Confecții metalice",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    certifications: ["EN 287", "ASME IX", "AWS D1.1"],
  },
  {
    name: "Cristina Ionescu",
    role: "Manager Proiecte",
    experience: "8+ ani experiență",
    specialization: "Gestionare & Calitate",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    certifications: ["PMP", "ISO 9001", "Lean Six Sigma"],
  },
];

const milestones = [
  {
    year: "2009",
    title: "Înființarea Companiei",
    description:
      "AVR Weld Solutions își începe activitatea cu focus pe sudura industrială",
    icon: "🏗️",
  },
  {
    year: "2012",
    title: "Primul Contract Major",
    description:
      "Realizarea primei structuri metalice complexe pentru industria petrochimică",
    icon: "🏭",
  },
  {
    year: "2015",
    title: "Extensia Serviciilor",
    description:
      "Adăugarea serviciilor de transport industrial și confecții metalice",
    icon: "🚛",
  },
  {
    year: "2018",
    title: "Certificări Internaționale",
    description:
      "Obținerea certificărilor EN 1090 și ISO 3834 pentru sudură profesională",
    icon: "🏆",
  },
  {
    year: "2021",
    title: "Modernizarea Echipamentelor",
    description:
      "Investiții în tehnologie avansată pentru tăiere cu plasmă și laser",
    icon: "⚡",
  },
  {
    year: "2024",
    title: "Expansiune Națională",
    description:
      "Extinderea serviciilor la nivel național cu echipe mobile specializate",
    icon: "🌍",
  },
];

const values = [
  {
    title: "Calitate",
    description:
      "Folosim doar materiale premium și respectăm standardele internaționale",
    icon: "⭐",
  },
  {
    title: "Experiență",
    description: "Peste 15 ani de experiență în domeniul sudurilor industriale",
    icon: "🔧",
  },
  {
    title: "Inovație",
    description: "Investim constant în tehnologii moderne și procedee avansate",
    icon: "💡",
  },
  {
    title: "Siguranță",
    description:
      "Respectăm cele mai stricte norme de siguranță în toate proiectele",
    icon: "🛡️",
  },
];

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Despre AVR Weld Solutions</h1>
          <p className={styles.heroSubtitle}>
            Peste 15 ani de experiență în furnizarea soluțiilor profesionale de
            sudură și confecții metalice pentru industria românească
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>Povestea Noastră</h2>
              <p className={styles.storyText}>
                AVR Weld Solutions a fost înființată în 2009 cu o viziune clară:
                să oferim servicii de sudură și confecții metalice de cea mai
                înaltă calitate pentru industria românească. De atunci, am
                crescut constant, construind o reputație solidă bazată pe
                profesionalism, inovație și dedicare.
              </p>
              <p className={styles.storyText}>
                Astăzi, suntem recunoscuți ca unul dintre liderii pieței în
                domeniul sudurilor industriale, oferind soluții complete pentru
                o gamă largă de industrii, de la petrochimică și construcții
                navale la infrastructură și echipamente industriale.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Proiecte Finalizate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Ani Experiență</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Clienți Mulțumiți</span>
                </div>
              </div>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="AVR Weld Solutions Workshop"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className={styles.container}>
          <h2 className={styles.timelineTitle}>Evoluția Noastră</h2>
          <div className={styles.timelineList}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <span>{milestone.icon}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <h3 className={styles.timelineItemTitle}>
                    {milestone.title}
                  </h3>
                  <p className={styles.timelineDescription}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>Echipa Noastră</h2>
            <p className={styles.teamSubtitle}>
              Profesioniști dedicați cu experiență vastă în domeniul sudurilor
              industriale
            </p>
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberExperience}>{member.experience}</p>
                  <p className={styles.memberSpecialization}>
                    {member.specialization}
                  </p>
                  <div className={styles.certifications}>
                    {member.certifications.map((cert, idx) => (
                      <span key={idx} className={styles.certification}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.valuesTitle}>Valorile Noastre</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <span>{value.icon}</span>
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Să Colaborăm!</h2>
          <p className={styles.ctaSubtitle}>
            Contactați-ne pentru a afla cum experiența și profesionalismul
            nostru pot contribui la succesul proiectului dumneavoastră.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact">
              <button className={styles.ctaPrimaryButton}>
                <span className={styles.buttonIcon}>📞</span>
                Contactează-ne
              </button>
            </Link>
            <Link to="/services">
              <button className={styles.ctaSecondaryButton}>
                Vezi Serviciile
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
