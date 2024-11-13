import PropTypes from "prop-types";

const ImageCarousel = (props) => {
  const { url, id, prevId, nextId } = props;

  return (
    <div id={id} className="carousel-item relative w-full">
      <img
        src={url}
        className="w-full max-h-48 md:max-h-64 lg:max-h-96 object-cover"
        alt="carousel item"
      />

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#${prevId}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#${nextId}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  prevId: PropTypes.string.isRequired,
  nextId: PropTypes.string.isRequired,
};

export default ImageCarousel;
