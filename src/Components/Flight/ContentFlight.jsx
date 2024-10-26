import PropTypes from "prop-types";

import CardFlight from "./CardsContent/CardFlight";
import CardInfoFlight from "./CardsContent/CardInfoFlight";
import Grid from "../Grid/grid";
import FooterInfoFlight from "./FooterInfoFlight";

const ContentFlight = (props) => {
  const { origin, destination, date } = props;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };
  const dateString = formatDate(date);

  return (
    <Grid container gap={8} className="py-10">
      <Grid item xs={12} lg={8} className="space-y-4">
        <div className="mb-2">
          <h1 className="text-2xl font-bold px-3 py-2">{dateString}</h1>
        </div>
        <div className="space-y-4 mx-10">
          <CardFlight origin={origin} destination={destination} date={date} />
          <CardFlight origin={origin} destination={destination} date={date} />

          <div className="flex justify-center md:justify-between ">
            <button className="btn btn-wide hidden md:block">
              Seleccionar otra fecha
            </button>
            <button className="btn btn-active btn-wide ">Continuar</button>
          </div>
        </div>
        <div className="mx-10">
          <FooterInfoFlight />
        </div>
      </Grid>
      <Grid item>
        <div className="hidden md:block ">
          <CardInfoFlight
            origin={origin}
            destination={destination}
            date={date}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ContentFlight;
ContentFlight.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
