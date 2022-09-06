import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";


import { motion } from "framer-motion"

const Link = ({ label, href, }) => {
  const variants = {
		hover: {
			width: "auto",
		},
	};

	const text_variants = {
		hover: {
			transform: "translateX(0px)",
			opacity: 1,
		},
	};

  return (
    <motion.a
				className="item-link transition-shadow duration-300 dark:bg-dark dark:shadow-border-dark cursor-pointer bg-white w-9 h-9 absolute left-5 bottom-5 rounded-full overflow-clip flex justify-center items-center"
				variants={variants}
        href={href}
        target="_blank"
				transition={{ duration: 0.3 }}
			>
				<motion.p
					className="mr-9 ml-4 opacity-0 whitespace-nowrap"
          style={{ transform: "translateX(-12px)"}}
					variants={text_variants}
          transition={{ duration: 0.3 }}
				>
					{ label }
				</motion.p>
				<motion.div className="absolute right-0 w-9 h-9 flex justify-center items-center">
					<ImArrowUpRight2 className="" />
				</motion.div>
			</motion.a>
  )
}

export default Link