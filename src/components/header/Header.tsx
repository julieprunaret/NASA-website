import Image from "../image/Image";
import logo from "../../assets/logo.png";
import "./header.scss";
import LinkCustom from "../Link/Link";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <Link to="./" title="to home">
        <Image url={logo as string} alt="logo" size="image-m" />
      </Link>

      <div>
        <LinkCustom label="Photos marsiennes" path="/marsian-pictures" />
        <LinkCustom label="Image du jour" path="/image-of-the-day" />
      </div>
    </header>
  );
}

export default Header;
