import React from 'react'

import { motion } from 'framer-motion'
import Link from '../Link/Link'
import Image from 'next/image'

import { useFilter } from '../../context/FilterContext'
import { FILTER } from "../../constants/FilterConstants"

import Times from "../../public/projects/novatech-1.png"

const GridTimes = () => {
	const { filter } = useFilter()
	const visible = filter === FILTER.ALL || filter === FILTER.PROJECTS

  return (
    <motion.div whileHover={"hover"} className={`h-full w-full relative flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}>
			<Image
				src="/projects/disaster-bg.svg"
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
				label="www.novatech.co.id"
				href="https://novatech.co.id/"
			/>
		</motion.div>
  )
}

export default GridTimes