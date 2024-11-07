import Grid from "../Grid/Grid";
import CardHome from "./CardHome";
import FormDetailFlight from "./FormDetailFlight";
import { infoCardsHome } from "./InfoCardsHome";

const ContentHome = () => {
  return (
    <>
      <FormDetailFlight />

      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
        {infoCardsHome.map((e, i) => {
          return (
            <CardHome
              key={i}
              title={e.title}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContentHome;
