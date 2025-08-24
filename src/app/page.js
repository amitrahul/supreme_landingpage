import ContactUs from "@/components/ContactUs";
import Crausel from "@/components/Crausel";
import CrauselText from "@/components/CrauselText";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CrauselText />
      <Crausel />
      <ContactUs />
    </>
  );
}
