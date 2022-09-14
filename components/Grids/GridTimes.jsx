import React from 'react'

import { motion } from 'framer-motion'
import Link from '../Link/Link'
import Image from 'next/image'

const GridTimes = () => {
  return (
    <motion.div whileHover={"hover"} className="h-full w-full relative flex justify-center items-center">
			<Image
				src="/projects/times_bg.svg"
				layout="fill"
				// objectFit="contain"
				alt=""
				className="w-full object-cover dark:opacity-30"
			/>
			<Image
				src="/projects/times.png"
				layout="fill"
				// objectFit="contain"
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