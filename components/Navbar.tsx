import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center bg-yellow-400 h-11">
      <div className="flex items-center bg-blue-600 rounded-full px-6 h-full ml-4">
        <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
        <span className="text-white font-semibold text-2xl tracking-normal">
          CN KIIT
        </span>
      </div>

      <div className="flex ml-7 h-full flex-1">

        <div className="relative px-10 font-bold uppercase text-2xl tracking-normal flex items-center overflow-hidden justify-center">
          <span className="z-10 mr-3.5">
            NINJA’S GOT TALENT
          </span>

          <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 
                          w-8 h-8 bg-green-400 rounded-full">
          </div>
        </div>

        <div className="bg-green-400 px-10 font-bold uppercase text-2xl tracking-normal flex items-center justify-center gap-3">
          <Image
            src="/navstar2.png"
            alt="Star icon"
            width={20}
            height={20}
          /> 
          NINJA’S GOT TALENT
        </div>

        <div className="relative bg-black text-white flex-1 px-12 font-bold uppercase text-2xl tracking-normal flex items-center justify-center gap-3">
          <Image
            src="/navstar.png"
            alt="Star icon"
            width={20}
            height={20}
          />
          <span className="z-10">
            NINJA’S GOT TALENT
          </span>
        </div>
      </div>
    </nav>
  )
}