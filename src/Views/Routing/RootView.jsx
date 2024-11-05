import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

const RootView = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default RootView;
