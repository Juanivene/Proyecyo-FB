import Grid from "../Components/Grid/grid";
import PayCardInfo from "../Components/Pay/PayCardInfo";
import ConfirmCardDataClient from "../Components/Confirmation/ConfirmCardDataClient";
import ConfirmCardFlight from "../Components/Confirmation/ConfirmCardFlight";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ConfirmationView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idCustomerSelected = urlParams.get("customer");
  const customersInLs = JSON.parse(localStorage.getItem("customers"));

  const customerSelected = customersInLs.find((customer) => {
    return customer.id === idCustomerSelected;
  });

  const responsive = useMediaQuery({ maxWidth: 850, maxHeight: 641 });

  return (
    <Grid container gap={3} className={`m-10`}>
      <Grid item xs={12} sm={12} md={12} lg={7}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold ">Tu reserva</h1>
          <p>Revisá que los vuelos sean los correctos</p>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={7} xl={7} className={`space-y-3`}>
        <ConfirmCardFlight customerSelcted={customerSelected} />
        <ConfirmCardDataClient customerSelcted={customerSelected} />
      </Grid>
      {!responsive ? (
        <Grid item xs={12} sm={12} md={12} lg={5} className={`sticky top-20`}>
          <PayCardInfo id={customerSelected.flightSelected.id} />
        </Grid>
      ) : (
        ""
      )}
      <Grid item xs={7} className={`flex justify-between`}>
        <Link to="/pay" className="link link-warning hidden md:block">
          Datos personales
        </Link>
        <button  className="btn btn-active btn-wide ">
          Continuar
        </button>
      </Grid>
    </Grid>
  );
};

export default ConfirmationView;
