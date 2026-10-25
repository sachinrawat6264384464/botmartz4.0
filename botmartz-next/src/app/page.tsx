import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Strip from "@/components/Strip";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import EngineeringSection from "@/components/EngineeringSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import IndustriesSection from "@/components/IndustriesSection";
import GallerySection from "@/components/GallerySection";
import InsightsSection from "@/components/InsightsSection";
import DeliveryProcessSection from "@/components/DeliveryProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <Strip />
        <ProblemSection />
        <SolutionsSection />
        <EngineeringSection />
        <PrinciplesSection />
        <IndustriesSection />
        <GallerySection />
        <InsightsSection />
        <DeliveryProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
