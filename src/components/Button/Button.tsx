import "./button.scss";

type Props = {
  label: string;
};

function Button({ label }: Props) {
  return <button className="button">{label}</button>;
}

export default Button;
