import FormSearchReservation from "../Components/Reservation/FormSearchReservation";
import ContentReservation from "../Components/Reservation/ContentReservation";

const ReservationView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idBooking = urlParams.get("customer");

  

  if (!idBooking) {
    return <FormSearchReservation />;
  }

  return <ContentReservation idBooking={idBooking} />;
};

export default ReservationView;
