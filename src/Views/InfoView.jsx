import ContactBanner from "../Components/Info/ContactBanner";
import FeaturedBox from "../Components/Info/FeaturedBox";
import Hero from "../Components/Info/Hero";
import InfoCard from "../Components/Info/InfoCard";
import { infoCards } from "../Components/Info/InfoCards.js";

const InfoView = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <FeaturedBox />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <ContactBanner />
      </div>
    </div>
  );
};

export default InfoView;
