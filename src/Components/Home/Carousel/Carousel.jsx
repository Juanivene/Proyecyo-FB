import { urlsImages } from "../../utilities";
import ImageCarousel from "./ImageCarousel";

const Carousel = () => {
  return (
    <div className="carousel w-full ">
      {urlsImages.map((url, i) => {
        const prevId = `slide${
          (i - 1 + urlsImages.length) % urlsImages.length
        }`;
        const nextId = `slide${(i + 1) % urlsImages.length}`;
        return (
          <ImageCarousel
            id={`slide${i}`}
            key={i}
            url={url}
            prevId={prevId}
            nextId={nextId}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
