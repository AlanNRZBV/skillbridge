import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import {
  BENEFITS_CARDS,
  COURSES_CARDS,
  Lorem,
  TESTIMONIALS_CARDS,
} from '../constants';
import BenefitCard from '../components/Cards/BenefitCard.tsx';
import CourseCard from '../components/Cards/CourseCard.tsx';
import TestimonialCard from '../components/Cards/TestimonialCard.tsx';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const pricingPlans = useLoaderData() as IPricingPlan[];
  const pricingPlanChange = () => {
    setIsMonthly((prevState) => !prevState);
  };
  console.log('=>(HomePage.tsx:22) ', pricingPlans);
  return (
    <div className="h-full">
      <Hero />
      <Section title="benefits" description={Lorem} link="#">
        <div className="grid grid-cols-1 gap-[1.875em] sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS_CARDS.map((item, index) => (
            <BenefitCard
              key={index}
              number={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Section>
      <Section title="our courses" description={Lorem} link="#">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {COURSES_CARDS.map((item) => (
            <CourseCard
              key={item._id}
              _id={item._id}
              img={item.img}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              length={item.length}
              author={item.author}
            />
          ))}
        </div>
      </Section>
      <Section title="our testimonials" description={Lorem} link="#">
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS_CARDS.map((item) => (
            <TestimonialCard
              key={item._id}
              _id={item._id}
              img={item.img}
              author={item.author}
              content={item.content}
            />
          ))}
        </div>
      </Section>
      <Section
        title="Our Pricing"
        description={Lorem}
        link="#"
        controls
        isMonthly={isMonthly}
        onClick={pricingPlanChange}
      >
        <div className="">pricing cards</div>
      </Section>
    </div>
  );
};

export default HomePage;
