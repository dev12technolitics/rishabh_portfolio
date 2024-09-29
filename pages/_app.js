import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "../components/Footer/Footer";
import { Sidebar } from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <section
      className="home_box h-full xl:h-screen xl:overflow-hidden 
     bg-gradient-to-b from-blue1 to-cyan1"
    >
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default MyApp;
