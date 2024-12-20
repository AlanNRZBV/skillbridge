import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import { BENEFITS_CARDS, COURSES_CARDS, Lorem } from '../constants';
import BenefitCard from '../components/Cards/BenefitCard.tsx';
import CourseCard from '../components/Cards/CourseCard.tsx';

const HomePage = () => {
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
        testimonials cards
      </Section>
    </div>
  );
};

export default HomePage;
