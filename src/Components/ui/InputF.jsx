import PropTypes from "prop-types";

const InputF = (props) => {
  const {
    name,
    type = `text`,
    error,
    className = ``,
    register,

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
      />
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
};
