import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./SocialLinks.module.css";

const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/your-page",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-profile",
    icon: <FaInstagram />,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@your-profile",
    icon: <FaTiktok />,
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/your-handle",
    icon: <FaTwitter />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: <FaLinkedin />,
  },
];
export default function SocialLinks() {
  return (
    <div className={styles.socialContainer}>
      {socialMediaLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Urmărește-ne pe ${social.name}`}
          className={styles.socialLink}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
