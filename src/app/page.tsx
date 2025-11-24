import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* <Header /> */}
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
