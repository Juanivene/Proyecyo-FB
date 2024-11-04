import Grid from "../Components/Grid/grid";

const ReservationView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idCustomerSelected = urlParams.get("customer");

  

  return (
    <Grid container>
      <Grid item xs={6}>
        <div className="bg-current">Hola</div>
      </Grid>
    </Grid>
  );
};

export default ReservationView;
