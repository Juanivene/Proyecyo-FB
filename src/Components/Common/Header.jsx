import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-gradient-to-r bg-amber-300 ">
      <div className="flex items-center justify-between py-2">
        {/* hamburguesa */}
        <div className="flex-none md:hidden ">
          <div className="dropdown ml-3">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-amber-200	border-0	"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/360px-Hamburger_icon.svg.png"
                alt="burgerbutton"
                className="w-8"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ml-3"
            >
              <li>
                <Link to="/reservation" className="btn btn-ghost ">
                  Mi reserva
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="btn btn-ghost">
                  Destinos
                </Link>
              </li>
              <li>
                <Link to="/info" className="btn btn-ghost">
                  Informacion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 mx-2">
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="w-20"
              src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/landing-airlines/logos/FO.png"
              alt="flybondibutton"
            />
          </Link>
        </div>

        {/* Enlaces visibles solo en pantallas grandes */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/reservation" className="btn btn-ghost ">
            Mi reserva
          </Link>
          <Link to="/destinations" className="btn btn-ghost">
            Destinos
          </Link>
          <Link to="/info" className="btn btn-ghost">
            Informacion
          </Link>
        </nav>
      </div>

  
    </header>
  );
};

export default Header;
