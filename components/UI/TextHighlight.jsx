import React from "react";

const TextHighlight = ({children}) => {
	return (
		<span className='inline-flex gap-1 w-fit after:content-[""] cursor-pointer relative after:left-0 after:bottom-1 after:absolute after:w-full after:bg-amber-500/40 after:rounded hover:underline decoration-amber-500 decoration-2 font-medium after:-skew-y-2 after:h-4 after:-z-[1] whitespace-nowrap'>
			{children}
		</span>
	);
};

export default TextHighlight;
