import CTA from "./components/cta";
import Destinations from "./components/Destinations";
import Features from "./components/features";
import Hero from "./components/hero";
import Newsletter from "./components/Newsletter";
import Packages from "./components/package";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Features />
      <Packages />
      <Testimonials />
      <CTA />
      <Newsletter />
    </>
  );
}
