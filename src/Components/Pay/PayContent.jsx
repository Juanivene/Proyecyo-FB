import PropTypes from "prop-types";
import Grid from "../Grid/grid";
import PayCardInfo from "./PayCardInfo";
import FormDataClient from "./FormDataClient";
import FooterInfoFlight from "../Flight/FooterInfoFlight";

const PayContent = (props) => {
  const { origin, id } = props;

  return (
    <Grid container gap={3} className={`m-10`}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">¿Quién viaja?</h1>
          <p>
            Necesitamos tus datos y el de todos los pasajeros para gestionar la
            reserva
          </p>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={8}>
        <FormDataClient id={id} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={4} className={`hidden md:block`}>
        <PayCardInfo id={id} />
      </Grid>

      <Grid item xs={12}>
        <FooterInfoFlight origin={origin} />
      </Grid>
    </Grid>
  );
};

export default PayContent;
PayContent.propTypes = {
  origin: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
