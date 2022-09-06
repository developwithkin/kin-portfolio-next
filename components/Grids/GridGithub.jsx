import React from "react";
import { motion } from "framer-motion";
import Link from "../Link/Link";

const Grid2521 = () => {
	// const variants = {
	// 	hover: {
	// 		width: "auto",
	// 	},
	// };

	// const text_variants = {
	// 	hover: {
	// 		transform: "translateX(0px)",
	// 		opacity: 1,
	// 	},
	// };

	return (
		<motion.div
			whileHover={"hover"}
			className="bg-[#1B1F23] h-full w-full flex justify-center items-center"
		>
			<img src="github.svg" alt="github-logo" className="h-20" />
      <Link 
        label="Github"
        href="https://github.com/reinhaaard13"
      />
			{/* <motion.div
				className="item-link transition-shadow duration-300 cursor-pointer bg-white w-9 h-9 absolute left-5 bottom-5 rounded-full flex justify-center items-center"
				variants={variants}
				transition={{ duration: 0.3 }}
			>
				<motion.p
					className="mr-9 ml-4 opacity-0"
          style={{ transform: "translateX(-12px)"}}
					variants={text_variants}
          transition={{ duration: 0.3 }}
				>
					Github
				</motion.p>
				<motion.div className="absolute right-0 w-9 h-9 flex justify-center items-center">
					<ImArrowUpRight2 className="" />
				</motion.div>
			</motion.div> */}
		</motion.div>
	);
};

export default Grid2521;
