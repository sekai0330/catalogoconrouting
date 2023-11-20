
function Navbar () {
  
  return (
    <nav className="sticky top-0 z-20 bg-slate-800 border-b border-b-red-950 border-opacity-50">
      <div className="max-w-screen-xl px-5 md:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0 ">
        <a href='#inicio' className="flex gap-1 items-center pl-0">
          <img src="/logo.webp" width={120} height={55} alt="Logo EdwinSantos" />
        </a>
        <div>
          <ul className="flex gap-5">
            {redes.map(red => (
              <li key={red.id}>
                <a href={red.link} className="flex items-center gap-1">
                  <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                  <p className="hidden md:block text-white text-sm">{red.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

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
      link: "https://www.instagram.com/",
      image: "instagram"
  },
  {
      id:3,
      name: "TikTok",
      link: "https://www.tiktok.com/",
      image: "tiktok"
  }
]