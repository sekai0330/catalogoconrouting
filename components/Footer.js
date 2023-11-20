
import Image from "next/image"
import { sansita, vollkorn } from "../pages"

const redes = [
    {
        id:1,
        name: "Facebook",
        link: "https://www.facebook.com/",
        image: "facebook"
    },
    {
        id:2,
        name: "Instagram",
        link: "https://www.instragram.com/",
        image: "instagram"
    },
    {
        id:3,
        name: "TikTok",
        link: "https://www.tiktok.com/",
        image: "tiktok"
    }
]

export default function Footer () {
    return (
        <footer className={`${sansita.className} bg-slate-950`}>
            <section className="max-w-screen-xl mx-auto md:w-5/6 px-3 md:px-0 flex flex-col md:text-left text-center md:flex-row items-center md:items-start md:justify-between py-10 space-y-5 md:space-y-0">
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                    <a href='#inicio' className="flex gap-1 items-center pl-0">
                        <Image src="/logo.webp" width={200} height={50} alt="Logo Muebleria" />
                    </a>
                    <p className={`${vollkorn.className} text-white [text-wrap:balance] mt-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam!</p>
                </div>
                <div className="flex flex-col">
                    <h3 className={`${vollkorn.className} text-white text-lg font-black uppercase`}>Redes Sociales</h3>
                    <ul className="md:flex flex-col  gap-2 text-white mt-2 space-y-3">
                        {redes.map(red => (
                            <li key={red.id} className="flex items-center justify-center md:justify-start">
                                <a href={red.link} className="flex items-center gap-1">
                                    <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                                    <p className={`${vollkorn.className} text-white`}>{red.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className={`${vollkorn.className} text-white text-lg font-black uppercase`}>Metodos de Pago</h3>
                    <div className={`${vollkorn.className} mt-2`}>
                        <p className="text-white font-bold">Transferencias:</p>
                        <p className="text-white text-sm">Logo Bancos</p>
                    </div>
                    <div className={`${vollkorn.className} mt-2`}>
                        <p className="text-white font-bold">Cryptomonedas:</p>
                        <p className="text-white text-sm">Logo exchange, chivo wallet</p>
                    </div>
                    <div className={`${vollkorn.className} mt-2`}>
                        <p className="text-white font-bold">Paypal:</p>
                        <p className="text-white text-sm">Logo Paypal</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}