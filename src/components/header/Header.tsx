import Image from "../image/Image";
type Props = {
  logo: string;
};

function Header({ logo }: Props) {
  return (
    <header>
      <p>Nasa</p>
      {/* <svg
        xmlns="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
        width="48"
        height="48"
        fill={fillColor}
        // class="bi bi-google"
        viewBox="0 0 16 16"
      /> */}
      <Image url={logo} alt="logo" size="image-s" />
    </header>
  );
}

export default Header;
