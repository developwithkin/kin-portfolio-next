import { useState, useEffect } from "react";

const useDimension = () => {
	const [breakpoint, setBreakpoint] = useState("lg");
	const [windowSize, setWindowSize] = useState({});

	const resizeHandler = () => {
		if (window.innerWidth < 640) {
			setBreakpoint("sm");
		} else if (window.innerWidth < 768) {
			setBreakpoint("md");
		} else if (window.innerWidth < 1024) {
			setBreakpoint("lg");
		} else if (window.innerWidth < 1280) {
			setBreakpoint("xl");
		} else {
			setBreakpoint("xxl");
		}
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);
		resizeHandler();

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

  return {
    windowSize,
    breakpoint
  }
};

export default useDimension;
