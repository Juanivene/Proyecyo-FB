import PropTypes from "prop-types";
import Grid from "../Grid/grid";
import { Link } from "react-router-dom";

const ConfirmCardDataClient = (props) => {
  const { customerSelected } = props;

  return (
    <Grid
      container
      gap={3}
      className="bg-white border border-gray-200 shadow-lg rounded p-2"
    >
      <Grid item xs={12} className="flex items-center space-x-2">
        <p className="font-semibold text-gray-700">
          {customerSelected.name} {customerSelected.lastname}
        </p>
      </Grid>
      <Grid item xs={12} className={`mt-2`}>
        <p>
          Documento:{" "}
          <span className="font-bold text-gray-700">
            {customerSelected.dni}
          </span>
        </p>
        <p>
          Telefono:{" "}
          <span className="font-bold text-gray-700">
            {customerSelected.phonenumber}
          </span>
        </p>
        <p>
          Email:{" "}
          <span className="font-bold text-gray-700">
            {customerSelected.email}
          </span>
        </p>
      </Grid>
      <Grid item xs={12}>
        <Link
          to={`/pay?&origin=${customerSelected.flightSelected.origin}&flight=${customerSelected.flightSelected.id}&customer=${customerSelected.id}`}
          className="link link-warning"
        >
          Modifica tus datos
        </Link>
      </Grid>
    </Grid>
  );
};

export default ConfirmCardDataClient;
ConfirmCardDataClient.propTypes = {
  customerSelected: PropTypes.object,
};
