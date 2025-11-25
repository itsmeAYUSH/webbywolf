import Header from "@/app/components/ui/Header/Header";
import Hero from "@/app/components/ui/Hero/Hero";
import Footer from "@/app/components/ui/Footer/Footer";
import FAQ from "@/app/components/ui/FAQ/FAQ";
import Quote from "@/app/components/ui/Quote/Quote";
import Tools from "@/app/components/ui/Tools/Tools";
import Background1 from "@/app/components/ui/Background1/Background1";
import Background2 from "@/app/components/ui/Background2/Background2";
import Logos from "@/app/components/ui/Logos/Logos";
import Cards from "@/app/components/ui/Cards/Cards";
import Story from "@/app/components/ui/Story/Story";
import NoLimits from "@/app/components/ui/NoLimits/NoLimits";
import Download from "@/app/components/ui/Download/Download";
import Contact from "@/app/components/ui/Contact/Contact";  
import Note from "@/app/components/ui/Note/Note";
import Meet from "@/app/components/ui/Meet/Meet";
import Features from "@/app/components/ui/Features/Features";
import Feedback from "@/app/components/ui/Feedback/Feedback";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Contact/>
      <Features />
      <Background1 />
      <Logos />
      <Cards />
      <Background2 />
      <Quote />
      <Download />
      <NoLimits />
      <Meet/>
      <Feedback/>
      <Tools />
      <Note />
      <Story />
      <FAQ />
      <Footer />
    </main>
  );
}
