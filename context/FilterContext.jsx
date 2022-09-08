import React, { createContext, useState, useContext } from "react";

import { FILTER } from "../constants/FilterConstants";

export const FilterContext = createContext({
	filter: FILTER.ALL,
});

export const FilterContextProvider = ({ children }) => {
	const [filter, setFilter] = useState(FILTER.ALL);

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => useContext(FilterContext);
