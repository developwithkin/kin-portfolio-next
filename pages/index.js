import Header from "../components/Header/Header";
import MainGrid from "../components/Grids/GridLayout";
import { ThemeContextProvider } from "../context/ThemeContext";
import axios from "axios";
 
function App() {
  return (
    <ThemeContextProvider>
      <div className="overflow-x-clip">
        <Header />
        <MainGrid />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
