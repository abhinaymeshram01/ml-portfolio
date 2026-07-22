import Container from "@/components/layout/Container";
import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";
import SocialSidebar from "@/components/hero/SocialSidebar";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020817] pt-24"
    >
      <HeroBackground />

      <SocialSidebar />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
      
      <ScrollIndicator />

    </section>
  );
}