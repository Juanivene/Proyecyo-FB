import { useQuery } from "@tanstack/react-query";
import Grid from "../Components/Grid/grid";
import { getCustomerSelectedFn } from "../api/customer";
import SkeletonReservation from "../Components/Reservation/SkeletonReservation";
import NewError from "../Components/Flight/NewError";
import FormSearchReservation from "../Components/Reservation/FormSearchReservation";
import ContentReservation from "../Components/Reservation/ContentReservation";

const ReservationView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idCustomer = urlParams.get("customer");

  if (!idCustomer) {
    return <FormSearchReservation />;
  }
  const {
    data: customer,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`customers-${idCustomer}`],
    queryFn: () => getCustomerSelectedFn(idCustomer),
  });

  if (isLoading) {
    return <SkeletonReservation />;
  }
  if (isError) {
    return <NewError />;
  }
  return <ContentReservation />;
};

export default ReservationView;
