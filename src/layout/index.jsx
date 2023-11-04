import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopOnMount from "../components/ScrollToTop";
import Loading from "../components/Loading";

const Layout = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
