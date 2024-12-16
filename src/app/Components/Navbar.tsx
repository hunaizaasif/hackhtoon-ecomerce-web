import Link from 'next/link';



export default function Navbar() {
  return (
    <header className=" bg-[#FFFFFF]  sticky top-0 z-50 ">
      <div className=" flex container mx-auto px-4 py-4 flex-col items-center md:flex-row md:justify-between ">
        

        <nav className="flex space-x-4">
          <Link href="/"
             className="hover:text-[#029FAE]">Home
          </Link>
          <Link href="/shop"
             className="hover:text-[#029FAE]">Shop
          </Link>
          <Link href="/ProductPage"
             className="hover:text-[#029FAE]">Products
          </Link>
          <Link href="/pages"
             className="hover:text-[#029FAE]">Pages
          </Link>
          <Link href="/AboutUs"
             className="hover:text-[#029FAE]">About
          </Link>
        </nav>
        
        {/* Contact and Cart sections */}
        <div className="flex space-x-4">
          <Link href="/ContectUs" className="text-sm hover:text-[#029FAE] ">Contact: (808)-555-0111</Link>
          
        </div>
      </div>
    </header>
  );
}


