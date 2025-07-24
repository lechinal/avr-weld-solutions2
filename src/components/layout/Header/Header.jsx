import { useState } from "react";

import Logo from "./Logo/Logo.jsx";
import Navbar from "./NavBar/Navbar.jsx";

import styles from "../Header/Header.module.css";

const navigationItems = [
  { href: "/", label: "Acasă" },
  { href: "/about", label: "Despre Noi" },
  { href: "/services", label: "Servicii" },
  { href: "/projects", label: "Proiecte" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo onClick={closeMenu} />

        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          navigationItems={navigationItems}
        />
      </div>
    </header>
  );
}
