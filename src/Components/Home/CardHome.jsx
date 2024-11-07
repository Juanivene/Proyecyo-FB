import PropTypes from "prop-types";

const CardHome = (props) => {
  const { image, title, description } = props;
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-auto object-cover "
          src={image}
          alt={`${title}Image`}
        />
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardHome;
CardHome.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
