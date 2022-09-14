import { ThemeContextProvider } from "../context/ThemeContext";
import "../styles/globals.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "../styles/rgl-custom-style.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeContextProvider>
			<AnimatePresence
				mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} key={router.pathname} />
			</AnimatePresence>
		</ThemeContextProvider>
	);
}

export default MyApp;
