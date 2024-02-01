import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "@/lib/ga";
import * as fbp from "@/lib/fbp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
      fbp.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <main className={poppins.className}>
        <Navbar />

        <Component {...pageProps} />

        <Footer />
      </main>
    </>
  );
}
