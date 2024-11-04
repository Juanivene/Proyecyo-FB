import { useQuery } from "@tanstack/react-query";
import { getCustomerSelectedFn } from "../../api/customer";
import SkeletonReservation from "./SkeletonReservation";
import NewError from "../Flight/NewError";
import PropTypes from "prop-types";
import ConfirmCardDataClient from "../Confirmation/ConfirmCardDataClient";
import Grid from "../Grid/grid";
import ConfirmCardFlight from "../Confirmation/ConfirmCardFlight";
import FooterInfoFlight from "../Flight/FooterInfoFlight";
import PayCardInfo from "../Pay/PayCardInfo";

const ContentReservation = (props) => {
  const { idBooking } = props;
  const {
    data: booking,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`customers-${idBooking}`],
    queryFn: () => getCustomerSelectedFn(idBooking),
  });

  if (isLoading) {
    return <SkeletonReservation />;
  }
  if (isError) {
    return <NewError />;
  }
  return (
    <Grid container gap={4} className="m-3">
      <Grid item xs={12} lg={7} className="space-y-4">
        <ConfirmCardFlight customerSelected={booking} />
        <ConfirmCardDataClient customerSelected={booking} isBooking={true} />
      </Grid>
      <Grid item xs={12} lg={5}>
        <PayCardInfo id={booking.flightSelected.id} />
      </Grid>
      <Grid item xs={12} lg={12}>
        <FooterInfoFlight origin={booking.flightSelected.origin} />
      </Grid>
    </Grid>
  );
};

export default ContentReservation;
ContentReservation.propTypes = {
  idBooking: PropTypes.string.isRequired,
};
