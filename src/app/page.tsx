import Hero from "./Components/Hero";
import CompanyLogo from "./Components/CompanyLogo"
import FeatureProduct from "./Components/FeatureProduct";
import TopCategories from "./Components/TopCategories"
import OurProduct from "./Components/OurProduct";
// import SingleProductPage from "./Components/SingleProductPage"
import { Suspense } from "react";
// import ProductPages from "./ProductPages/page";
import Gallery from "./Components/Gallery";
// skeltone components create ui 
import { Skeleton } from "@/components/ui/skeleton" 
// import ProductList from "./Components/ProductList";




export default function Home() {
  return (
   <>
    <Hero/>
    <CompanyLogo/>
     <Suspense
      fallback = {<div> <Skeleton className="w-[100px] h-[20px] rounded-full" /></div>}>
 <FeatureProduct/>
      </Suspense>
      
 <Suspense
      fallback = {<div className="flex justify-center"><Skeleton className="w-[100px] h-[20px] rounded-full" />
      loading.....]</div>}>
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
   
  </>

  );
}
