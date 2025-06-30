import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);


export function FilterProvider({ children }) {
    const [filter, setFilter] = useState("all");
       return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
export default FilterProvider;