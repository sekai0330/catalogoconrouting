import useFilters from "../../hooks/useFilters.jsx";
import { useRouter } from "next/router";
import Head from "next/head";
import { sansita, source } from "..";
import { IconWhatsapp } from "../../components/Icons.jsx";

export default function Page () {
    const router = useRouter()
    const { url } = router.query;
    
    const { muebleria } = useFilters()

    const sale = muebleria.muebleria.find((muebles) => muebles.url === url )

    if (!sale) {
        return <div>Venta no encontrada</div>;
    }

    const whatsappNumber = '75331045';
    const message = `¡Hola! Estoy interesado en el producto "${sale.name}" de la categoria "${sale.category}" del Catalogo Digital.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <Head>
                <title>Catalogo Muebleria - {sale.name}</title>
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />
                <meta name='description' content={sale.name} />
            </Head>
            <section className={`${sansita.className} max-w-screen-xl mx-auto md:w-5/6 my-16 px-3 md:px-0`}>
                <div className="flex">
                    <h1 className="uppercase text-white text-lg rounded-full bg-gray-800 py-2 px-6">{sale.category} - {sale.name}</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-10">
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <img
                            src={`/img/${sale.image}.webp`}
                            alt={`imagen de ${sale.name}`}
                            className="md:h-80 lg:h-96 object-contain"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-3 text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">{sale.name}</h2>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className={`${source.className} ml-1 text-lg font-bold text-white`}>{sale.rating}</p>
                            </div>
                            <div className="flex items-center">
                                <p className={`${source.className} text-lg`}>En Existencia</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Descripcion:</p>
                            <p className={`${source.className} [text-wrap:balance]`}>{sale.description}</p>
                        </div>
                        <div className="flex gap-1 items-end justify-center md:justify-start">
                            <p className="text-4xl text-red-500 font-bold">${sale.price}</p>
                            <p className="text-slate-200">Precio en Dolares Americanos</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start pt-2">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white font-bold hover:bg-red-500 transition-colors py-2 px-10 rounded-full flex items-center gap-1">Comprar ahora en Whatsapp
                                <IconWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}