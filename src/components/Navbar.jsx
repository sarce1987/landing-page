import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container-navbar">
      {/* simbolo empresarial */}
      
        <a id="nav-logo" href="">
          <img src="../src/assets/claves-newlogo.png" alt="aca va una imagen" />
        </a>
      

      {/*Logo de redes sociales */}
      <div className="icon-navbar">
        <a id="icon-navbar" href="">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a id="icon-navbar" href="">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a id="icon-navbar" href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    </nav>
  );
};
