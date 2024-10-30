import PropTypes from "prop-types";
import Alert from "./Alert";

const InputF = (props) => {
  const {
    name,
    type = `text`,
    error,
    className = ``,
    register,
    maxL,
    options,
    placeHolder = "Ingrese un texto",
  } = props;
  return (
    <fieldset className={`${className}`}>
      <input
        className={`input input-bordered w-full ${error ? `is-invalid` : ``}`}
        id={`${name}-input`}
        placeholder={placeHolder}
        type={type}
        {...register(name, options)}
        maxLength={maxL}
      />
      {error ? <Alert error={error.message} /> : ""}
    </fieldset>
  );
};

export default InputF;
InputF.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,

  error: PropTypes.shape({ message: PropTypes.string }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeHolder: PropTypes.string,
  maxL: PropTypes.number,
};
