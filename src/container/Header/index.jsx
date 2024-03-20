import { NavBar } from "../../components";
import "./Header.css";

const Header = () => {
  const links = [
    { title: "How it works", href: "#" },
    { title: "Meals", href: "#" },
    { title: "Testimonials", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Try for free", href: "#" },
  ];

  return (
    <header className="header">
      <img className="logo" alt="logo" src="assets/omnifood-logo.png" />
      <NavBar links={links} />
    </header>
  );
};

export default Header;
