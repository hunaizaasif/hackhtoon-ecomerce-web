import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
function Topbar() {
  return (
    <header className="bg-[#272343] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center md:flex-row justify-between ">
        <p className="flex items-center text-xs mr-2"> <TiTickOutline  />
          <span > Free shiping On All Orders Over $50
        </span></p>

        <nav className="flex md:flex flex-row md:space-x-4 "> 
        <div className="flex items-center">
         <p className="hover:text-[#029FAE] ">Eng 
          </p>
          <RiArrowDropDownLine className='text-2xl'/>
          </div>
          <Link href="/FAQ"
             className="hover:text-[#029FAE]  px-2">Faqs
          </Link>
          <Link href="/" className="flex items-center space-x-2 hover:text-[#029FAE] ">< BsExclamationCircle />
       <span > Need Help
     </span>
     </Link> 
        </nav>

         
         </div>
      
    </header>
  );
}

export default Topbar;