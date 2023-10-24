import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/HeaderComponent";
import Footer from "../components/LayoutComponents/FooterComponent";

const DefaultLayout = () => {
  return (
    <>
    <Header />
    <div className="min-h-[calc(100vh-82px)] grid place-items-center">
    <Outlet/>
    </div>
    <Footer />
    </>
  );
};

export default DefaultLayout;
