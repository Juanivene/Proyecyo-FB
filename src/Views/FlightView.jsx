import { useQuery } from "@tanstack/react-query";
import ContentFlight from "../Components/Flight/ContentFlight";
import HeaderFlight from "../Components/Flight/HeaderFlight";
import { getFlightFn } from "../api/flight";

const FlightView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const origin = urlParams.get("origen");
  const destination = urlParams.get("destino");
  const date = urlParams.get("fecha");

  const { isError } = useQuery({
    queryKey: ["flights"],
    queryFn: getFlightFn,
  });

  return (
    <>
      <HeaderFlight
        isError={isError}
        origin={origin}
        destination={destination}
      />
      <ContentFlight origin={origin} destination={destination} date={date} />
    </>
  );
};

export default FlightView;
