import Image from "../../components/image/Image";
import { useFetch } from "../../utils/hooks/useFetch";
import { PageWrapper } from "../../utils/style/Layout";
import "./ImageOfTheDay.scss";

function ImageOfTheDay() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo`
  );
  const dayImage: any = data;

  console.log(dayImage);

  return (
    <PageWrapper>
      <Image
        url={dayImage.url}
        alt={`image de ${dayImage.copyright}`}
        size="image-l"
      />
      <h2>
        Image of the day : {dayImage.date} by {dayImage.copyright}
      </h2>
      <p>{dayImage.explanation}</p>
    </PageWrapper>
  );
}

export default ImageOfTheDay;
