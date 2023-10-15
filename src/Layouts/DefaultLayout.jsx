import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/HeaderComponent";
import Footer from "../components/LayoutComponents/FooterComponent";

const DefaultLayout = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen">
    <Outlet/>
    </div>
    <Footer />
    </>
  );
};

export default DefaultLayout;
