import FAQ from "../components/FAQ.tsx";
import Hero from "../components/Hero.tsx";
import Benefits from "../components/Benefits.tsx";
import Courses from "../components/Courses.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Pricing from "../components/Pricing.tsx";

const Home = () => {
  return (
    <div className="border border-red-400">
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
