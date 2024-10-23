const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-amber-300">
      <div className="flex items-center justify-between py-2">
        {/* Botón de hamburguesa visible solo en dispositivos móviles */}
        <div className="flex-none lg:hidden ">
          <details className="dropdown">
            <summary className="btn m-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/360px-Hamburger_icon.svg.png"
                alt="burgerbutton"
                className="w-8"
              />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>

        {/* Título visible en todos los tamaños */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img
              className="w-20"
              src="https://assets.turismocity.com/cdn-cgi/image/format=auto/img/landing-airlines/logos/FO.png"
              alt="flybondibutton"
            />
          </a>
        </div>

        {/* Enlaces visibles solo en pantallas grandes */}
        <nav className="hidden lg:flex space-x-4">
          <a href="#" className="btn btn-ghost ">
            Mi reserva
          </a>
          <a href="#" className="btn btn-ghost">
            Destinos
          </a>
          <a href="#" className="btn btn-ghost">
            Informacion
          </a>
        </nav>
      </div>

      {/* Menú desplegable en dispositivos móviles */}
    </header>
  );
};

export default Header;
