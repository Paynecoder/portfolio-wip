import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <motion.div
        key={router.route}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}
