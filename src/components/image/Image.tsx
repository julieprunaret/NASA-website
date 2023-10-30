import "./image.scss";

type Props = {
  url: string;
  alt: string;
  size: string;
  key?: string;
};

function Image({ url, alt, size, key }: Props) {
  return <img src={url} alt={alt} className={size} key={key} />;
}

export default Image;
