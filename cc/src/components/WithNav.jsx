import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Layout/Navbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
