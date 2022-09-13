import Header from "../components/UI/Header";
import Head from "next/head";
import MainGrid from "../components/Grids/GridLayout";
import { ThemeContextProvider } from "../context/ThemeContext";
import axios from "axios";
import { FilterContextProvider } from "../context/FilterContext";
import Footer from "../components/UI/Footer";

function App() {
	return (
		<>
			<Head>
				<title>Reinhard Kevin - Ngide dan ngode</title>
			</Head>
				<FilterContextProvider>
					<div className="overflow-x-clip">
						<Header />
						<MainGrid />
						<Footer />
					</div>
				</FilterContextProvider>
		</>
	);
}

export default App;
