import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const GlobalHeaderLayout = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  );
};

export default GlobalHeaderLayout;
