import { NavBar } from "../../components";
import "./Header.css";

const Header = () => {
  const links = [
    { title: "How it works", href: "#howItWorks" },
    { title: "Meals", href: "#meals" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Pricing", href: "#pricing" },
    { title: "Try for free", href: "#" },
  ];

  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="logo" src="assets/omnifood-logo.png" />
      </a>
      <NavBar links={links} />
    </header>
  );
};

export default Header;
