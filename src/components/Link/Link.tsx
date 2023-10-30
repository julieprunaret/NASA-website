import { Link } from "react-router-dom";
import "./link.scss";

type Props = {
  label: string;
  path: string;
};

function LinkCustom({ label, path }: Props) {
  return (
    <Link className="button" to={path}>
      {label}
    </Link>
  );
}

export default LinkCustom;
