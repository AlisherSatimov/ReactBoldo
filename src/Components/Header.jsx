import { Component } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const links = [
    { link: "/product", text: "Products" },
    { link: "/services", text: "Services" },
    { link: "/about", text: "About" },
  ];

class Header extends Component {
  render() {
    return (
      <header
        className="container main-header"
      >
        <Link className="" to="/">
          <img src="/Logo.png" alt="log" />
        </Link>
        <nav>
          <ul className="nav-list">
            {links
              .filter((l) => l.link)
              .map((l, index) => (
                <NavLink
                  key={index}
                  link={l.link}
                  text={l.text}
                />
              ))}
              <li>
                <Link to="/login" className="login-btn">Login</Link>
              </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;