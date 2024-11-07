import DestinationCard from "../Destinations/DestinationCard";
import destinations from "../Destinations/destinations";
import CardHome from "./Cards/CardHome";
import FormDetailFlight from "./FormDetailFlight";
import { infoCardsHome, infoCardsLowCost } from "./Cards/InfoCardsHome";
import ContentCardsHome from "./Cards/ContentCardsHome";

const ContentHome = () => {
  return (
    <>
      <FormDetailFlight />

      <ContentCardsHome />
    </>
  );
};

export default ContentHome;
