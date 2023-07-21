import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  return (
    <nav className="navigation">
      <section className="navigation_logo-wrapper">
        <NavLink to="/">
          <img src={logo} className="navigation__logo" alt="logo" />
        </NavLink>
      </section>
      <ul className="navigation__items-wrapper">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navigation__item active" : "navigation__item"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navigation__item active" : "navigation__item"
            }
          >
            About The Series
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive ? "navigation__item active" : "navigation__item"
            }
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/plot"
            className={({ isActive }) =>
              isActive ? "navigation__item active" : "navigation__item"
            }
          >
            Plot
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
