import PropTypes from "prop-types";

const RadioF = (props) => {
  const { value, label, register } = props;
  return (
    <div className="flex items-center gap-2">
      <label>{label}</label>
      <input
        type="radio"
        name="radio-6"
        className="radio radio-warning"
        value={value}
        
      />
    </div>
  );
};

export default RadioF;
RadioF.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
