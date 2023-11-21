'use client'
import { sansita } from "../pages";
import Link from "next/link";

export default function MuebleriaList ({ muebleria }) {

    return (
        <section>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 text-white">
                {muebleria.map(mueble => (
                    <li key={mueble.id} className={`${sansita.className} bg-gray-800 bg-opacity-50 flex flex-col justify-between py-3 px-5 rounded-lg border border-gray-600 space-y-1`}>
                        <div>
                            <img className="w-full h-40 object-contain object-center" src={`/img/${mueble.image}.webp`} alt={`imagen ${mueble.name}`} />
                            <p className="text-white uppercase font-semibold">{mueble.name}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-lg text-red-500">${mueble.price}</p>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ml-1 text-sm font-bold text-white">{mueble.rating}</p>
                            </div>
                        </div>
                        <Link legacyBehavior href={`/muebles/${mueble.url}`}>
                                <a className="flex items-center gap-2 justify-center bg-amber-600 hover:bg-amber-700 transition-colors text-botones text-white mt-5 md:mt-0 py-2 text-lg px-5 rounded-xl">
                                    Ver Detalles
                                </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}