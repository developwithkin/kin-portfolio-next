import Header from "../components/UI/Header";
import Head from "next/head";
import MainGrid from "../components/Grids/GridLayout";
import { ThemeContextProvider } from "../context/ThemeContext";
import axios from "axios";
import { FilterContextProvider } from "../context/FilterContext";
import Footer from "../components/UI/Footer";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect } from "react";
import withTransition from "../HOC/withTransition";
import FloatingResume from "../components/UI/FloatingResume";
import useDimension from "../hooks/useDimension";

function App() {
	const { windowSize } = useDimension()
	return (
		<>
			<Head>
				<title>Reinhard Kevin - Ngide dan ngode</title>
			</Head>
			<FilterContextProvider>
				<motion.div className="overflow-x-clip" exit={{ opacity: 0 }}>
					<Header />
					<MainGrid />
					<Footer />
				</motion.div>
				{windowSize.width < 640 && <FloatingResume />}
			</FilterContextProvider>
		</>
	);
}

export default withTransition(App);
// export default App;
