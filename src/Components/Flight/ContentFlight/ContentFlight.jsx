import PropTypes from "prop-types";

import CardFlight from "./CardFlight";
import CardInfoFlight from "./CardInfoFlight";
import Grid from "../../Grid/grid";

const ContentFlight = (props) => {
  const { origin, destination, date } = props;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };
  const dateString = formatDate(date);

  return (
    <Grid container className=" py-10">
      <Grid item md={10} sm={8} xs={6}>
        <h1 className="text-2xl font-bold px-3 py-2">{dateString}</h1>
        <div className="space-y-4">
          <CardFlight origin={origin} destination={destination} date={date} />
          <CardFlight origin={origin} destination={destination} date={date} />
        </div>
      </Grid>
      <Grid>
        <CardInfoFlight origin={origin} destination={destination} date={date} />
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
