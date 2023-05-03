import "@/styles/globals.css";
import { Navbar, Footer } from "../components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}
