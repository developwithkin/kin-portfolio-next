import React from "react";

import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import DarkToggler from "../UI/DarkToggler";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

const GridDarkToggle = () => {
	const { darkMode, toggleTheme } = useTheme();

	const { filter } = useFilter();
	const visible = filter === FILTER.ALL;

	return (
		<div className={`h-full w-full flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}>
			<DarkToggler />
		</div>
	);
};

export default GridDarkToggle;
