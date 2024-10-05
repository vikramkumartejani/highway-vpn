import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import GameServerSlider from "../components/GameServerSlider";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <GameServerSlider />
      <Footer />
    </div>
  );
}
