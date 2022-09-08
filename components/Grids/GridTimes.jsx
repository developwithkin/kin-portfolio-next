import React from 'react'

import { motion } from 'framer-motion'
import Link from '../Link/Link'

const GridTimes = () => {
  return (
    <motion.div whileHover={"hover"} className="h-full w-full flex justify-center items-center">
			<img
				src="projects/times_bg.svg"
				alt=""
				className="w-full h-[103%] object-cover -translate-y-1 dark:opacity-30"
			/>
			<img
				src="projects/times.png"
				alt=""
				className="absolute w-full h-full object-cover"
			/>
			<Link 
				label="Times Ticketing"
				href="https://github.com/reinhaaard13/times-ticketing"
			/>
		</motion.div>
  )
}

export default GridTimes