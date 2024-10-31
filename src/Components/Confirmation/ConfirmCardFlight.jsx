import PropTypes from "prop-types";

const ConfirmCardFlight = (props) => {
  const { customerSelcted } = props;
  console.log(customerSelcted);
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded">
      <div>
        <img
          src="https://img.icons8.com/?size=30&id=59723&format=png"
          alt="iconplane"
        />
      </div>
      <div>
        <p>VUELO DE IDA</p>
        <p>
          {customerSelcted.flightSelected.origin} a{" "}
          {customerSelcted.flightSelected.destination}
        </p>
      </div>
    </div>
  );
};

export default ConfirmCardFlight;
ConfirmCardFlight.propTypes = {
  customerSelcted: PropTypes.object.isRequired,
};
