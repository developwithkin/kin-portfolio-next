import React from "react";
import { motion } from "framer-motion";
import { ImArrowUpRight2 } from "react-icons/im";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";
import cx from "../../utils/classname";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import useDimension from "../../hooks/useDimension";

const GridContacts = () => {
	const { filter } = useFilter();
	const { darkMode } = useTheme();
  const { windowSize, breakpoint } = useDimension()
	const visible = filter === FILTER.ALL || filter === FILTER.ABOUT;

	return (
		<div
			className={cx(`h-full w-full flex items-center justify-center transition-opacity text-sm ${
				!visible && "opacity-25"
			}`, { "text-base": breakpoint === "xxl"})}
		>
			<div className={cx("grid grid-cols-2 h-full w-full", { 'grid-cols-1': windowSize.width <= 768 })}>
				<div
					className={cx(
						"bg-gradient-to-tl from-amber-500 to-pink-500 flex items-center group relative",
						{ "from-amber-500/70 to-pink-500/70": darkMode }
					)}
				>
					<a
						href={"https://www.instagram.com/nicodemusaveiro/"}
						target="_blank"
						rel="noreferrer"
            className="flex flex-col items-center mx-auto"
					>
						<img src="instagram_color.svg" alt="github-logo" className="h-10" />
						<p className="font-medium text-white group-hover:underline group-hover:-skew-y-2 transition-all duration-200 decoration-amber-500">
							@nicodemusaveiro
						</p>
						<ImArrowUpRight2 className="absolute right-0 top-0 mr-2 mt-2 text-white transition-all duration-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100" />
					</a>
				</div>

				<div
					className={cx(
						"flex items-center group relative",
						{
							"bg-slate-800 text-white": darkMode,
							"bg-slate-50 text-slate-800": !darkMode,
						}
					)}
				>
					<a
						href={"mailto:developwithkin@gmail.com"}
						target="_blank"
						rel="noreferrer"
            className="flex flex-col items-center mx-auto"
					>
						<img src="gmail.svg" alt="gmail-logo" className="h-8" />
						<p className="font-medium group-hover:underline group-hover:-skew-y-2 transition-all duration-200 decoration-amber-500">
							developwithkin@gmail.com
						</p>
						<ImArrowUpRight2
							className={cx(
								"absolute left-0 top-0 ml-2 mt-2 transition-all duration-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100",
								{ "text-white": darkMode, "text-slate-800": !darkMode }
							)}
						/>
					</a>
				</div>

				<div
					className={cx(
						"bg-blue-500 flex items-center group relative",
						{ "bg-opacity-70": darkMode }
					)}
				>
					<a
						href={"https://www.linkedin.com/in/nicodemus-bagus/"}
						target="_blank"
						rel="noreferrer"
            className="flex flex-col items-center mx-auto"
					>
						<img src="linkedin.png" alt="github-logo" className="h-10" />
						<p className="font-medium text-white group-hover:underline group-hover:-skew-y-2 transition-all duration-200 decoration-amber-500">
							Nicodemus Bagus
						</p>
						<ImArrowUpRight2
							className={cx(
								"absolute right-0 top-0 mr-2 mt-2 text-white transition-all duration-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"
							)}
						/>
					</a>
				</div>

				<div
					className={cx(
						"bg-green-500 flex items-center group relative",
						{ "bg-opacity-70": darkMode }
					)}
				>
					<a
						href={"https://wa.me/628527285599"}
						target="_blank"
						rel="noreferrer"
            className="flex flex-col items-center mx-auto"
					>
						<img
							src="whatsapp.svg"
							alt="github-logo"
							className="h-10"
						/>
						<p className="font-medium text-white group-hover:underline group-hover:-skew-y-2 transition-all duration-200 decoration-amber-500">
							+62 852 2728 5599
						</p>
						<ImArrowUpRight2
							className={cx(
								"absolute left-0 top-0 ml-2 mt-2 text-white transition-all duration-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"
							)}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default GridContacts;
