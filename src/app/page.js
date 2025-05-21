import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import ProductOverview from "@/components/ProductOverview";
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
      </main>
    </div>
  );
}
