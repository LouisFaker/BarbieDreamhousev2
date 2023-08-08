import Link from "../link/link";
import "./Header.css";
// import Link from './../link/link';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link texto="Home" />
            <Link texto="Home" />
          </li>
          <li>
            <Link texto="Home" />
          </li>
          <li>
            <Link texto="Home" />
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
