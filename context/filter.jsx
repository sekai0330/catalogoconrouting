import { createContext, useState } from "react";
import muebleriaData from "../mocks/muebleria.json"

const FiltersContext = createContext();

const FilterProvider = ({ children }) => {
    const [ muebleria, setMuebleria ] = useState(muebleriaData)
    const [ filters, setFilters ] = useState({
        category: "all",
        genre: "all",
        minPrice: 0
    })

    const filterMuebleria = (muebleria) => {
        return muebleria.muebleria.filter( muebleria => {
            return (
                (
                    filters.category === "all" ||
                    muebleria.category === filters.category
                ) &&
                (
                    filters.genre === "all" || 
                    muebleria.genre === filters.genre
                ) && 
                (
                    muebleria.price >= filters.minPrice
                )
            )
        })
    }

    const filteredMuebleria = filterMuebleria(muebleria)

    return (
        <FiltersContext.Provider
            value={{
                muebleria,
                setMuebleria,
                filters,
                setFilters,
                filteredMuebleria
            }}
        >
            { children }
        </FiltersContext.Provider>
    )
}

export { FilterProvider }
export default FiltersContext