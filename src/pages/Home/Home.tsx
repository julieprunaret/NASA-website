import { useFetch } from "../../utils/hooks/useFetch";
import { PageWrapper } from "../../utils/style/Layout";

function Home() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo`
  );
  const dayImage: any = data;

  console.log(dayImage);

  return (
    <PageWrapper>
      <img src={dayImage.url} alt="image of the day" />
      <h2>
        Image of the day : {dayImage.date} by {dayImage.copyright}
      </h2>
      <p>{dayImage.explanation}</p>
    </PageWrapper>
  );
}

export default Home;
