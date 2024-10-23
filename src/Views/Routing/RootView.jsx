import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

const RootView = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootView;
