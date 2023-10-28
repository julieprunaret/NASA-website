import "./image.scss";

type Props = {
  url: string;
  alt: string;
  size: string;
};

function Image({ url, alt, size }: Props) {
  return <img src={url} alt={alt} className={size} />;
}

export default Image;
