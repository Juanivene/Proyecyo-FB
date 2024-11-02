import PropTypes from "prop-types";
import Grid from "../Grid/grid";

const ConfirmCardFlight = (props) => {
  const { customerSelected } = props;
  const { flightSelected } = customerSelected;

  function getDay(fechaStr) {
    const fecha = new Date(fechaStr + "T00:00:00");
    const diasDeLaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const dia = fecha.getDay();
    return diasDeLaSemana[dia];
  }
  const dayDate = getDay(flightSelected.date);

  return (
    <Grid
      container
      gap={3}
      className="bg-white border border-gray-200 shadow-lg rounded p-2"
    >
      <Grid item xs={12} className="flex items-center space-x-2">
        <div>
          <img
            src="https://img.icons8.com/?size=30&id=59723&format=png"
            alt="iconplane"
          />
        </div>
        <div>
          <p className="font-semibold ">VUELO DE IDA</p>
          <p className="font-semibold text-gray-700">
            {flightSelected.origin} a {flightSelected.destination}
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={9} className={`mx-10 `}>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{flightSelected.date}</p>
            <p>{dayDate}</p>
          </div>
          <div>
            <div className="flex items-center  space-x-3">
              <p className="font-semibold">{flightSelected.hour[0]}</p>
              <img
                className="w-5"
                src="https://www.shareicon.net/data/2015/08/16/85904_airplane_512x512.png"
                alt=""
              />
              <p className="font-semibold">{flightSelected.hour[1]}</p>
            </div>
            <div className="flex justify-between">
              <p>{flightSelected.aitaCode[0]}</p>
              <p>{flightSelected.aitaCode[1]}</p>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={8}>
        <p className="font-semibold">
          Vuelo {flightSelected.id} - Duracion {flightSelected.duration}
        </p>
        <div>
          <p className="">
            <span className="font-semibold text-gray-700">
              {flightSelected.aitaCode[0]}
            </span>{" "}
            {flightSelected.airport[0]}
          </p>
          <p className="">
            <span className="font-semibold text-gray-700">
              {flightSelected.aitaCode[1]}
            </span>{" "}
            {flightSelected.airport[1]}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default ConfirmCardFlight;
ConfirmCardFlight.propTypes = {
  customerSelected: PropTypes.object.isRequired,
};
