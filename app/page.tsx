import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Photography from "@/components/Photography";
import GraphicDesign from "@/components/GraphicDesign";
import WebProjects from "@/components/WebProjects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import CopyProtection from "@/components/CopyProtection";

export default function Home() {
  return (
    <main>
      <CopyProtection />
      <Spotlight />
      <Navbar />
      <Hero />
      <WebProjects />
      <About />
      <GraphicDesign />
      <Photography />
      <Footer />
    </main>
  );
}
