import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GraphicDesign from "@/components/GraphicDesign";
import WebProjects from "@/components/WebProjects";
import Photography from "@/components/Photography";
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
      <GraphicDesign />
      <WebProjects />
      <Photography />
      <About />
      <Footer />
    </main>
  );
}
