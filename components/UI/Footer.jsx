import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center p-4 text-sm font-medium dark:shadow-border-dark">
			<p>
				Made with 💖 and ☕ by{" "}
				<span className="font-moranga">Reinhard Kevin</span>
			</p>
			<p className="font-normal">
				Inspired by:
				<a href="https://nevflynn.com/" target="_blank" rel="noreferrer">
					{" "}
					neflynn.com
				</a>
			</p>
		</div>
	);
};

export default Footer;
