

import { Suspense } from "react";
import Hero from "./Components/Hero";
import CompanyLogo from "./Components/CompanyLogo";
import FeatureProduct from "./Components/FeatureProduct";
import TopCategories from "./Components/TopCategories";
import OurProduct from "./Components/OurProduct";
import Gallery from "./Components/Gallery";
import { Skeleton } from "@/components/ui/skeleton";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompanyLogo />
      <Suspense
      fallback = {<div> <Skeleton className="w-[100px] h-[20px] rounded-full" /></div>}>
 <FeatureProduct/>
      </Suspense>
      
 <Suspense
      fallback = {<div className="flex justify-center"><Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>}>
      <TopCategories/>
    </Suspense>

<Suspense
      fallback = {<div className="flex justify-center">loading.....</div>}>
       <Gallery/>
    </Suspense>

   <Suspense
      fallback = {<div>loading.....</div>}>
      <OurProduct/>
    </Suspense>  
       {/* <ProductList /> */}
  {/* <ProductPages/> */}
   
   {/* <SingleProductPage/> */}
      
    </main>
  );
}
