import Carousel from "../Components/Home/Carousel";
// import CardDestination from "../Components/Home/Destination/CardDestination";
import FormDestination from "../Components/Home/Destination/FormDestination";

const HomeView = () => {
  return (
    <section className="bg-yellow-100">
      <Carousel />
      <FormDestination />
      {/* <CardDestination /> */}
    </section>
  );
};

export default HomeView;
