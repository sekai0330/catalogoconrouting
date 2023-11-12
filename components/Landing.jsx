import { sansita } from "@/pages"

export default function Landing () {
    

    return (
        <section className="[background-image:url(/img/header.webp)] w-full h-72 bg-cover bg-bottom flex items-center justify-center px-3 md:px-0">
            <h1 className={`${sansita.className} text-4xl md:text-6xl md:w-2/4 [text-wrap:balance] text-center text-white font-extrabold`}>Las Mejores opciones en Muebles</h1>
            
        </section>
    )
}

