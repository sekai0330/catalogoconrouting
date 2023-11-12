
import { useId } from "react"
import useFilters from "../hooks/useFilters";
import { sansita } from "../pages";

export default function Filters () {
    const { filters, setFilters } = useFilters();
    const categoryFilterId = useId()
    const minPriceFilterId = useId()

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    return (
        <section className={`${sansita.className} flex flex-col gap-4 px-3 items-center lg:justify-start`}>
            <h3 className="uppercase font-bold">Filtrar por:</h3>
            <div className="flex flex-col w-full gap-2 border p-2 rounded-lg shadow-lg">
                <label htmlFor={categoryFilterId} className="font-semibold">Categoria:</label>
                <select id={categoryFilterId} className=" rounded px-1 border p-1 text-center" onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="sala">Sala</option>
                    <option value="dormitorios">Dormitorio</option>
                    <option value="cocina">Cocina</option>
                    <option value="bathroom">Baño</option>
                </select>
            </div>
            <div className="flex flex-col w-full gap-2 border p-2 rounded-lg shadow-lg">
                <label htmlFor={minPriceFilterId} className="font-semibold">Precio a partir de:</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='500'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                    className="accent-yellow-700"
                />
                <span>${filters.minPrice}</span>
            </div>
        </section>
    )
}