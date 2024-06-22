import Card from "@/components/atoms/Card";
import CardGrid from "@/components/molecules/CardGrid";
import About from "@/components/organisms/About";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Projects from "@/components/organisms/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
