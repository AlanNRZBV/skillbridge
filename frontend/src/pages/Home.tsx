import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import { BENEFITS_CARDS, Lorem } from '../constants';
import BenefitCard from '../components/Cards/BenefitCard.tsx';

const Home = () => {
  return (
    <div className="h-full">
      <Hero />
      <Section
        title="benefits"
        description={Lorem}
        link="#"
        styles={'lg:grid-cols-3'}
      >
        {BENEFITS_CARDS.map((item, index) => (
          <BenefitCard
            key={index}
            number={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </Section>
      <Section title="our courses" description={Lorem} link="#">
        courses cards
      </Section>
      <Section title="our testimonials" description={Lorem} link="#">
        testimonials cards
      </Section>
    </div>
  );
};

export default Home;
