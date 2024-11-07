import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import { useLoading } from "../../Store/useLoading";
import Loader from "../../Components/ui/Loader";

const RootView = () => {
  const { isLoading } = useLoading();
  return (
    <section>
      <Header />
      <main>
        {isLoading ? <Loader /> : ""}
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default RootView;
