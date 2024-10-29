import PropTypes from "prop-types";

import CardFlight from "./CardsContent/CardFlight";
import CardInfoFlight from "./CardsContent/CardInfoFlight";
import Grid from "../Grid/grid";
import FooterInfoFlight from "./FooterInfoFlight";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./CardsContent/Skeleton";
import { useFlights } from "../../Store/useFlight";
import { Link } from "react-router-dom";
import NewError from "./NewError";
import Swal from "sweetalert2";
import NoFlights from "./NoFlights";
import { getFlightFn } from "../../api/flight";

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

  const handleContinue = () => {
    if (flightSelected.price === "") {
      Swal.fire({
        title: "Atencion",
        icon: "info",
        html: "Debes seleccionar un vuelo para continuar <b>✈</b>",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      window.location.href = `http://localhost:5173/pay?price=${flightSelected.price}`;
    }
  };

  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return <NewError />;
  }

  const flightsDay = flights.filter((flight) => {
    return (
      flight.origin === origin &&
      flight.destination === destination &&
      flight.date === date
    );
  });
  if (flightsDay && flightsDay.length === 0) {
    return <NoFlights />;
  }

  return (
    <Grid container gap={8} className="my-">
      <Grid item xs={12} lg={8}>
        <div className="mb-2">
          <h1 className="text-2xl font-bold px-3 py-2">{dateString}</h1>
        </div>
        <div className="space-y-4 mx-10 mb-2">
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
            <Link to="/" className="link link-warning hidden md:block">
              Cambiar fecha
            </Link>
            <button
              onClick={handleContinue}
              className="btn btn-active btn-wide "
            >
              Continuar
            </button>
          </div>
        </div>
        <div className="mx-10 mb-7">
          <FooterInfoFlight />
        </div>
      </Grid>
      <Grid item xs={1} md={1} lg={1}>
        <div className="hidden md:block my-14">
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
