import "./Header.css";
import Logo from "../assets/Netflix_Logo_RGB.png";
import User from "../assets/user.png";
import Search from "../assets/search_icon.svg";

function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="Netflix" />
        </a>
      </div>
      <div className="header--search">
        <img src={Search} alt="Search" className="search-icon" />
      </div>
      <div className="header--user">
        <a href="/">
          <img src={User} alt="Usuário" />
        </a>
      </div>
    </header>
  );
}
export default Header;
