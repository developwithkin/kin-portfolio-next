import React from 'react'

import { useTheme } from '../../context/ThemeContext'

import { IoMdMoon } from 'react-icons/io'
import { MdWbSunny } from 'react-icons/md'

import { motion, AnimatePresence } from 'framer-motion'

const DarkToggler = () => {
  const {darkMode, toggleTheme} = useTheme()

	const toggleDarkMode = () => {
		toggleTheme();
	};

  return (
    <div
				className="cursor-pointer w-20 h-12 p-1 bg-slate-500/20 shadow-border-light backdrop-blur-sm dark:bg-dark-lightgray dark:shadow-border-dark rounded-full relative flex items-center"
        style={{ justifyContent: darkMode ? "flex-end" : "flex-start" }}
				onClick={toggleDarkMode}
			>
				<motion.div
					className="w-9 h-9 rounded-full bg-dark flex justify-center items-center"
					layout
				>
					<AnimatePresence mode="wait">
						{darkMode ? (
							<motion.div
								className="w-5 h-5 text-yellow-300"
								key={darkMode}
								initial={{ opacity: 0, rotate: -90, scale: 0 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={{ opacity: 0, rotate: 90, scale: 0 }}
								transition={{ type: "spring", duration: 0.3 }}
							>
								<IoMdMoon className="w-full h-full" />
							</motion.div>
						) : (
							<motion.div
								className="w-5 h-5 text-yellow-300"
								key={darkMode}
								initial={{ opacity: 0, rotate: -90, scale: 0 }}
								animate={{ opacity: 1, rotate: 0, scale: 1 }}
								exit={{ opacity: 0, rotate: 90, scale: 0 }}
								transition={{ type: "spring", duration: 0.3 }}
							>
								<MdWbSunny className="w-full h-full" />
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
  )
}

export default DarkToggler