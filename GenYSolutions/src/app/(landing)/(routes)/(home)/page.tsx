import LandingAbout from "@/components/landing-about";
import LandingClients from "@/components/landing-clients";
import LandingFaq from "@/components/landing-faq";
import LandingFooter from "@/components/landing-footer";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import LandingServices from "@/components/landing-services";
import LandingWork from "@/components/landing-work";

export default function Home() {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <div className="bg-[#0D0B0E] pb-40">
        <LandingAbout />
      </div>
      <LandingWork />
      <LandingServices/>
      <LandingClients/>
      <LandingFaq/>
      <LandingFooter/>
    </div>
  );
}
