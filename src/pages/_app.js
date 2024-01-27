import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </main>
  );
}
