import { Link, NavLink } from "react-router-dom";
import styles from "../Header.module.css";
import SocialLinks from "../../SocialLinks/SocialLinks";

export default function Navbar({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  navigationItems,
  variant,
}) {
  return (
    <>
      {/* --- Navigația pentru Desktop --- */}
      <div className={styles.desktopNav}>
        <nav>
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              end={item.href === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className={styles.ctaButtonLink}>
          <button className={styles.ctaButton}>
            <span style={{ fontSize: "14px" }}>📞</span>
            Contactează-ne
          </button>
        </Link>
      </div>

      {/* --- Butonul Hamburger --- */}
      <button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div
          className={
            isMenuOpen
              ? `${styles.hamburgerIcon} ${styles.open}`
              : styles.hamburgerIcon
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* --- Meniul Mobil Overlay --- */}

      {isMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <nav>
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={closeMenu}
                end={item.href === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={styles.mobileCtaButtonLink}
              onClick={closeMenu}
            >
              Contactează-ne
            </Link>
          </nav>
          <div className={styles.mobileExtraContent}>
            <div className={styles.mobileDivider} />
            <SocialLinks variant="dark" />
          </div>
        </div>
      )}
    </>
  );
}
