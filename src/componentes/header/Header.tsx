import Link from "../link/link";
import "./Header.css";
// import Link from './../link/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src="./public/logo-barbie.png"
          // alt="Logo da Barbie"
          className="logo-img"
        />
        <span className="logo-text">ㅤ</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link texto="Home" />
            <Link texto="imagenes" />
          </li>
          <li>
            <Link texto="Sobre" />
          </li>
          <li>
            <Link texto="Contacto" />
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
