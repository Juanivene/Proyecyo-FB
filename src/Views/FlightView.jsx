import ContentFlight from "../Components/Flight/ContentFlight";
import HeaderFlight from "../Components/Flight/HeaderFlight";

const FlightView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const origin = urlParams.get("origen");
  const destination = urlParams.get("destino");
  const date = urlParams.get("fecha");

  return (
    <>
      <HeaderFlight origin={origin} destination={destination} />
      <ContentFlight origin={origin} destination={destination} date={date} />
    </>
  );
};

export default FlightView;
