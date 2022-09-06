import React, { useState } from "react";

import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

import Logo from "../assets/reilogo.svg";

const Header = () => {
	const [menuIdx, setMenuIdx] = useState(0);

	const menu = [
		{
			name: "All",
			idx: 0,
			width: "50px",
			left: "1px",
		},
		{
			name: "All",
			idx: 1,
			width: "75px",
			left: "56px",
		},
		{
			name: "All",
			idx: 2,
			width: "92px",
			left: "135px",
		},
		{
			name: "All",
			idx: 3,
			width: "83px",
			left: "227px",
		},
	];

	const width = useSpring(menu[menuIdx].width);
	const left = useSpring(menu[menuIdx].left);

	const transform = useMotionTemplate`translateX(${left})`

	return (
		<div className="flex-col sm:flex-row pt-14 sm:pt-6 w-11/12 mx-auto sm:h-32 flex justify-between items-center">
			<Logo className="w-fit" width={"60"} height={"60"} viewBox="0 0 986 602"/>
			{/* <img src="reilogo.svg" alt="logo" className="h-8" /> */}
			<div className="mt-8 sm:mt-0">
				<ul className="navitem-container font-medium">
					<motion.span
						className="highlighter"
						style={{ width, transform }}
					></motion.span>
					<li
						className="navitem rounded-full cursor-pointer hover:opacity-40 transition-opacity duration-300 ease-out delay-50"
						onClick={() => {
							setMenuIdx(0);
							width.set(menu[0].width);
							left.set(menu[0].left);
						}}
					>
						All
					</li>
					<li
						className="navitem rounded-full cursor-pointer hover:opacity-40 transition-opacity duration-300 ease-out delay-50"
						onClick={() => {
							setMenuIdx(1);
							width.set(menu[1].width);
							left.set(menu[1].left);
						}}
					>
						About
					</li>
					<li
						className="navitem rounded-full cursor-pointer hover:opacity-40 transition-opacity duration-300 ease-out delay-50"
						onClick={() => {
							setMenuIdx(2);
							width.set(menu[2].width);
							left.set(menu[2].left);
						}}
					>
						Projects
					</li>
					<li
						className="navitem rounded-full cursor-pointer hover:opacity-40 transition-opacity duration-300 ease-out delay-50"
						onClick={() => {
							setMenuIdx(3);
							width.set(menu[3].width);
							left.set(menu[3].left);
						}}
					>
						Media
					</li>
				</ul>
			</div>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href="#" className="hidden sm:block">
				Contacts
			</a>
		</div>
	);
};

export default Header;
