import { PropTypes } from "prop-types";

import "./NavBar.css";

const NavBar = ({ links, isShow }) => {
  return (
    <nav className={`main-nav ${isShow ? "show" : ""}`}>
      <ul className="main-nav-list">
        {links?.map((link, index) => (
          <a
            key={index}
            className={`main-nav-link ${
              index === links.length - 1 ? "nav-cta" : ""
            }`}
            href={link.href}
          >
            {link.title}
          </a>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.array,
  isShow: PropTypes.boolean,
};
export default NavBar;
