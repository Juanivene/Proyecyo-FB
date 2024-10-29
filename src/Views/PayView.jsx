import PayContent from "../Components/Pay/PayContent";

const PayView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const price = urlParams.get("price");
  return <PayContent price={price} />;
};

export default PayView;
