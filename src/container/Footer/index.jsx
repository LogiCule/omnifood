import {
  CallOutline,
  HomeOutline,
  MailOutline,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
} from "react-ionicons";
import "./Footer.css";
const iconStyle = { height: "2.4rem", width: "2.4rem", color: "#767676" };
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" alt="logo" src="assets/omnifood-logo.png" />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <LogoFacebook cssClasses={"social-icon"} {...iconStyle} />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <LogoInstagram cssClasses={"social-icon"} {...iconStyle} />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <LogoTwitter cssClasses={"social-icon"} {...iconStyle} />
              </a>
            </li>
          </ul>
          <p className="copyright">
            Made by{" "}
            <a
              className="profile-link"
              href="https://logicule.vercel.app/"
              target="_blank"
            >
              LogiCule
            </a>{" "}
            with ❤️
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p className="address">
              <HomeOutline />
              &nbsp; 623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a href="tel:415-201-6370" className="footer-link">
                <CallOutline />
                &nbsp; 415-201-6370
              </a>
              <br />
              <a href="mailto:hello@omnifood.com" className="footer-link">
                <MailOutline />
                &nbsp; hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                {" "}
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
