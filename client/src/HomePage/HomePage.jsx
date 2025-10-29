import SectionOne from "./Section-1/SectionOne";
import Hotels from "./Section-2/Hotels";
import FeaturedHotels from "./Section-4/FeaturedHotels";
import Guides from "./Section-6/Guides";
import Footer from "./Footer/Footer";
import PromomoSection from "../Reusable/PromoSection";
export default function HomePage() {
  return (
    <main className="container mx-auto mt-10">
      <SectionOne />

      {/*Section 2*/}
      <Hotels />

      {/*Section 3*/}
      <PromomoSection title={"Try Hosting With Us"} text={"Earn extra just by renting your property..."} btnText={"Become A Host"} />
      
      {/*Section 4*/}
      <FeaturedHotels />
      
      {/*Section 5*/}
      <PromomoSection title={"Browse For More Properties"} text={"Explore properties by their categories/types..."} btnText={"Find A Property"}/>
      
      {/*Section 6*/}
      <Guides />
      <Footer />
    </main>
  );
}