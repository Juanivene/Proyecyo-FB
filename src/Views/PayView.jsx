import PayContent from "../Components/Pay/PayContent";

const PayView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const origin = urlParams.get("origin");
  const id = urlParams.get("flight");

  return <PayContent origin={origin} id={id} />;
};

export default PayView;
