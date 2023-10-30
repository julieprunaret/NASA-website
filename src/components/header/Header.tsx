import Image from "../image/Image";
import logo from "../../assets/logo.png";
import "./header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header-container">
      <Image url={logo as string} alt="logo" size="image-m" />

      <div>
        <Button label="Planètes" />
        <Button label="Image du jour" />
      </div>
    </header>
  );
}

export default Header;
