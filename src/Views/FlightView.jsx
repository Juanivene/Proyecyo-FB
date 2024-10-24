const FlightView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const origin = urlParams.get("origen");
  const destination = urlParams.get("destino");
  const fecha = urlParams.get("fecha");


  return (
    <section className="mt-16">
      <h1>{origin}</h1>
      <h1>{fecha}</h1>
      <h1>{destination}</h1>
    </section>
  );
};

export default FlightView;
