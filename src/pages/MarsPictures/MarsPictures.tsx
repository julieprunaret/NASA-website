import Image from "../../components/image/Image";
import { useFetch } from "../../utils/hooks/useFetch";
import { PageWrapper } from "../../utils/style/Layout";
import "./marsPictures.scss";

function MarsPictures() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/insight_weather/?api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo&feedtype=json&ver=1.0`
  );
  const marsDatas: any = data;

  console.log(marsDatas.validity_checks);

  return (
    <PageWrapper>
      {/* <Image
        url={dayImage.url}
        alt={`image de ${dayImage.copyright}`}
        size="image-l"
      />
      <h2>
        Image of the day : {dayImage.date} by {dayImage.copyright}
      </h2>
      <p>{dayImage.explanation}</p> */}
      {/* <p>atmospheric temperature : {marsDatas.validity_checks}</p> */}
    </PageWrapper>
  );
}

export default MarsPictures;
