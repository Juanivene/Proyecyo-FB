import Grid from "../Components/Grid/grid";
import PayCardInfo from "../Components/Pay/PayCardInfo";
import ConfirmCardDataClient from "../Components/Confirmation/ConfirmCardDataClient";
import ConfirmCardFlight from "../Components/Confirmation/ConfirmCardFlight";
import { Link } from "react-router-dom";
import FormDataPay from "../Components/Confirmation/FormDataPay";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import Error404 from "../Components/Confirmation/Error404";

const ConfirmationView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idCustomerSelected = urlParams.get("customer");
  const customersInLs = JSON.parse(localStorage.getItem("customers"));

  const customerSelected = customersInLs.find((customer) => {
    return customer.id === idCustomerSelected;
  });

  const [isClose, setIsClose] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const modal = useRef();

  const handleExit = () => {
    modal.current.close();
    Swal.fire({
      icon: "info",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "No, cancelar",
      confirmButtonText: "Si, salir",
      text: "Seguro que quiere cancelar el pago?",
    }).then((res) => {
      if (res.isConfirmed) {
        modal.current.close();
        setIsClose(true);
      } else {
        modal.current.showModal();
      }
    });
  };

  if (!customerSelected) {
    return <Error404 />;
  }
  return (
    <Grid container gap={3} className={`m-10`}>
      <Grid item xs={12} sm={12} md={12} lg={7}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold ">Tu reserva</h1>
          <p>Revisá que los vuelos sean los correctos</p>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={7} className={`space-y-3`}>
        <ConfirmCardFlight customerSelected={customerSelected} />
        <ConfirmCardDataClient customerSelected={customerSelected} />
        <div className={`flex sm:justify-between justify-center`}>
          <Link
            to={`/pay?&origin=${customerSelected.flightSelected.origin}&flight=${customerSelected.flightSelected.id}&customer=${customerSelected.id}`}
            className="link link-warning hidden sm:block"
          >
            Volver a Datos personales
          </Link>
          <button
            className="btn btn-wide hidden lg:block"
            onClick={() => modal.current.showModal()}
          >
            ¡Ir al pago!
          </button>
          {!isSubmit ? (
            <dialog ref={modal} className={`modal`}>
              <div className="modal-box">
                <button
                  onClick={handleExit}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
                <FormDataPay
                  customerSelected={customerSelected}
                  isClose={isClose}
                  isSubmit={isSubmit}
                  setIsSubmit={setIsSubmit}
                />
              </div>
            </dialog>
          ) : (
            ""
          )}
        </div>
      </Grid>

      <Grid item xs={12} xl={5} className={`sticky top-20 text-center`}>
        <PayCardInfo id={customerSelected.flightSelected.id} />
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-wide block lg:hidden"
            onClick={() => modal.current.showModal()}
          >
            ¡Ir al pago!
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ConfirmationView;
