import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GraphicDesign from "@/components/GraphicDesign";
import WebProjects from "@/components/WebProjects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main>
      <Spotlight />
      <Navbar />
      <Hero />
      <GraphicDesign />
      <WebProjects />
      <About />
      <Footer />
    </main>
  );
}
