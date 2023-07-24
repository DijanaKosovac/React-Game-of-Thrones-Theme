import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MovieIcon from "@mui/icons-material/Movie";

const Navigation = () => {
  return (
    <React.Fragment>
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

      {/* Bottom navigation for mobile */}
      <div className="bottom-navigation">
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction
            label="Characters"
            icon={<PeopleOutlineIcon />}
          />
          <BottomNavigationAction label="Plot" icon={<MovieIcon />} />
        </BottomNavigation>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
