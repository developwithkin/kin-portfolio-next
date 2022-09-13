import { ThemeContextProvider } from "../context/ThemeContext";
import "../styles/globals.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "../styles/rgl-custom-style.css";

function MyApp({ Component, pageProps }) {
	return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp;
