import React from 'react'

import { motion } from 'framer-motion'
import Link from '../Link/Link'
import Image from 'next/image'

import { useFilter } from '../../context/FilterContext'
import { FILTER } from "../../constants/FilterConstants"

import Times from "../../public/projects/times.png"

const GridTimes = () => {
	const { filter } = useFilter()
	const visible = filter === FILTER.ALL || filter === FILTER.PROJECTS

  return (
    <motion.div whileHover={"hover"} className={`h-full w-full relative flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}>
			<Image
				src="/projects/times_bg.svg"
				layout="fill"
				// objectFit="contain"
				alt=""
				className="w-full object-cover dark:opacity-30"
			/>
			<Image
				src={Times}
				layout="fill"
				// objectFit="contain"
				placeholder='blur'
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