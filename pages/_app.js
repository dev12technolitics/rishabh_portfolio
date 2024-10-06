import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import bgImage from "../assets/bgimg.png";
import Footer from "../components/Footer/Footer";
import { Sidebar } from "../components/navbar";
import "../styles/globals.css";

// xl:h-screen xl:overflow-hidden
function MyApp({ Component, pageProps }) {
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-cyan1 to-blue1">
        <div
          className="absolute left-0 bottom-0 h-full w-2/4 opacity-20"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <Sidebar />

            <Component {...pageProps} />

            <Footer />
          </div>
        </div>
      </section>

      {/* <section
      className="h-full
     bg-gradient-to-b from-cyan1 to-blue1 f"
    >
      <div
        className="absolute left-0 bottom-0 h-full w-2/4 opacity-20"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </section> */}
    </>
  );
}

export default MyApp;
