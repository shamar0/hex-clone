import Footer from "@/components/footer";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import ProductOverview from "@/components/ProductOverview";
import ProductOverviewSection from "@/components/ProductOverviewSection";
import RetentionTrendChart from "@/components/RetentionTrendChart";
import TrustedByTeams from "@/components/TrustedByTeams";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main >
     <Navbar/>
     <IntroSection />
      <TrustedByTeams />
      <ProductOverview />
      {/* <RetentionTrendChart /> */}
      <ProductOverviewSection />
      <Footer/>
      </main>
    </div>
  );
}
