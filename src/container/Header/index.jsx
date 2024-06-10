import { CloseOutline, MenuOutline } from "react-ionicons";
import { NavBar } from "../../components";
import { useStateValue } from "../../context";
import "./Header.css";
const links = [
  { title: "How it works", href: "#howItWorks" },
  { title: "Meals", href: "#meals" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Pricing", href: "#pricing" },
  { title: "Try for free", href: "#" },
];
const styles = { height: "4.8rem", width: "4.8rem", color: "#333" };

const Header = () => {
  const { isNav, setIsNav } = useStateValue();

  const toggleIsNav = () => setIsNav((prev) => !prev);

  return (
    <header className={`header ${!isNav ? "nav-open" : ""}`}>
      <a href="#">
        <img className="logo" alt="logo" src="assets/omnifood-logo.png" />
      </a>
      <NavBar links={links} updater={() => setIsNav(true)} />
      <button className="btn-mobile-nav" onClick={toggleIsNav}>
        {isNav ? (
          <MenuOutline {...styles} cssClasses={"icon-mobile-nav"} />
        ) : (
          <CloseOutline {...styles} cssClasses={"icon-mobile-nav"} />
        )}
      </button>
    </header>
  );
};

export default Header;
