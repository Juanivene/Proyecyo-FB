const Hero = () => {
  return (
    <div
      className="h-[300px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Información para tu Viaje
            </h1>
            <p className="text-xl opacity-90">
              Todo lo que necesitas saber para volar con nosotros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
