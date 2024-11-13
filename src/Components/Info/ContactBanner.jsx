import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        ¿Necesitás ayuda adicional?
      </h3>
      <p className="text-white mb-6">
        Nuestro equipo de atención al cliente está disponible para asistirte
      </p>
      <Link
        to="https://wa.me/543813538206?text=Hola%20me%20gustaría%20obtener%20más%20información"
        className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
      >
        Contactanos
      </Link>
    </div>
  );
};

export default ContactBanner;
