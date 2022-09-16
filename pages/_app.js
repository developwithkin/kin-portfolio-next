import { ThemeContextProvider } from "../context/ThemeContext";
import "../styles/globals.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "../styles/rgl-custom-style.css";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Router from "next/router";
import LoadingText from "../components/UI/LoadingText";
import { useCallback, useEffect } from "react";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => { nProgress.start(); });
Router.events.on("routeChangeComplete", () => { nProgress.done(); });
Router.events.on("routeChangeError", () => { nProgress.done(); });

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeContextProvider>
			<motion.div
				className={
					"fixed flex justify-center items-center top-0 left-0 w-full h-screen bg-amber-50 z-50 origin-bottom"
				}
				style={{ transformOrigin: "top" }}
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				transition={{ duration: 1, delay: 1 }}
			>
				<LoadingText />
			</motion.div>
			<AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
				<Component {...pageProps} key={router.pathname} />
			</AnimatePresence>
		</ThemeContextProvider>
	);
}

export default MyApp;
