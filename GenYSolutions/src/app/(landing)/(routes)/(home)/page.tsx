import LandingAbout from "@/components/landing-about";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
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
    </div>
  );
}
