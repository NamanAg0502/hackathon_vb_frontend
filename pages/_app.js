import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { checkLoggedIn } from "../utils/checkLoggedIn.js";
import { useRouter } from "next/router";
import { checkRoute } from "../utils/manageRoute";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const checkAuthorization = async () => {
    const userAuthorized = checkRoute(router.asPath);
    if (!userAuthorized) {
      const loggedIn = await checkLoggedIn();
      if (!loggedIn) router.push("/login");
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <div className="bg-gray-50">
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
