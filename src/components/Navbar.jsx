import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[60px] border-b-2 border-[#24eabc]" >
      <ul className="flex items-center justify-around h-[100%] font-bold">
        <li className="text-white hover:border-b hover:border-[#24eabc]" ><Link href='/'>Inicio</Link></li>
        <li className="text-white hover:border-b hover:border-[#24eabc]" ><Link href='/about'>Sobre nosotros</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
