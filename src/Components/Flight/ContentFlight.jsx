import PropTypes from "prop-types";

import CardFlight from "./CardsContent/CardFlight";
import CardInfoFlight from "./CardsContent/CardInfoFlight";
import Grid from "../Grid/grid";
import FooterInfoFlight from "./FooterInfoFlight";
import { useQuery } from "@tanstack/react-query";
import { getFlightFn } from "../../api/flight";
import Skeleton from "./CardsContent/Skeleton";
import { useFlights } from "../../Store/useFlight";
import { Link } from "react-router-dom";

const ContentFlight = (props) => {
  const { origin, destination, date } = props;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };
  const dateString = formatDate(date);

  const {
    data: flights,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["flights"],
    queryFn: getFlightFn,
  });

  const { flightSelected, changeCard } = useFlights();

 

  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return <div className="alert-danger">Error al leer las entradas</div>;
  }
  if (flights && flights.length === 0) {
    return <div className="alert-danger">no hay entradas</div>;
  }
  const flightsDay = flights.filter((flight) => {
    return (
      flight.origin === origin &&
      flight.destination === destination &&
      flight.date === date
    );
  });

  return (
    <Grid container gap={8} className="py-10">
      <Grid item xs={12} lg={8}>
        <div className="mb-2">
          <h1 className="text-2xl font-bold px-3 py-2">{dateString}</h1>
        </div>
        <div className="space-y-4 mx-10 mb-10">
          {flightsDay.map((flight) => {
            return (
              <CardFlight
                key={flight.id}
                flightsDay={flight}
                dateString={dateString}
                changeCard={changeCard}
              />
            );
          })}

          <div className="flex justify-center md:justify-between ">
            <Link to="/" className="link link-warning">
              Cambiar fecha
            </Link>
            <Link to="/pay" className="btn btn-active btn-wide ">
              Continuar
            </Link>
          </div>
        </div>
        <div className="mx-10">
          <FooterInfoFlight />
        </div>
      </Grid>
      <Grid item>
        <div className="hidden md:block">
          <CardInfoFlight
            flightSelected={flightSelected}
            dateString={dateString}
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
