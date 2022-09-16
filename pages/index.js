import Header from "../components/UI/Header";
import Head from "next/head";
import MainGrid from "../components/Grids/GridLayout";
import { ThemeContextProvider } from "../context/ThemeContext";
import axios from "axios";
import { FilterContextProvider } from "../context/FilterContext";
import Footer from "../components/UI/Footer";

import { motion } from "framer-motion";

function App() {
	return (
		<>
			<Head>
				<title>Reinhard Kevin - Ngide dan ngode</title>
			</Head>
			<motion.div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center font-moranga text-4xl text-white loading z-50">
				Loading...
			</motion.div>
			<FilterContextProvider>
				<motion.div className="overflow-x-clip" exit={{ opacity: 0 }}>
					<Header />
					<MainGrid />
					<Footer />
				</motion.div>
			</FilterContextProvider>
		</>
	);
}

export default App;
