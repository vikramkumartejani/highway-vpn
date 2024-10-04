import DirectGameserverConnections from "@/components/DirectGameserverConnections";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <Pricing/>
      <FAQ/>
      <DirectGameserverConnections/>
      <Footer/>
    </div>
  );
}
