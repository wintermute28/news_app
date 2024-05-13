import { useState } from "react";

export const useFilters = (initualFilters) => {
    const [filters, setFilters] = useState(initualFilters);
    
      const changeFilter = (key, value) => {
        setFilters(prev => {
          return {...prev, [key]: value}
        });
      };

    return {filters, changeFilter};
}