import Header from "../components/UI/Header";
import MainGrid from "../components/Grids/GridLayout";
import { ThemeContextProvider } from "../context/ThemeContext";
import axios from "axios";
import { FilterContextProvider } from "../context/FilterContext";
import Footer from "../components/UI/Footer";

function App() {
	return (
		<ThemeContextProvider>
			<FilterContextProvider>
				<div className="overflow-x-clip">
					<Header />
					<MainGrid />
					<Footer />
				</div>
			</FilterContextProvider>
		</ThemeContextProvider>
	);
}

export default App;
