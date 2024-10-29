import PropTypes from "prop-types";
import Grid from "../Grid/grid";
import DataClient from "./DataClient";
import PayCardInfo from "./PayCardInfo";
import FormDataClient from "./FormDataClient";

const PayContent = (props) => {
  const { price } = props;
  return (
    <Grid container gap={3} className={`m-10`}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <div className="text-center">
          <h1 className="font-mono text-lg ">¿Quién viaja?</h1>
          <p>
            Necesitamos tus datos y el de todos los pasajeros para gestionar la
            reserva
          </p>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={8} >
        <FormDataClient/>
      </Grid>
      <Grid item xs={10} sm={10} md={8} lg={4} className={`sticky top-20`}>
        <PayCardInfo />
      </Grid>
    </Grid>
  );
};

export default PayContent;
PayContent.propTypes = {
  price: PropTypes.string.isRequired,
};
