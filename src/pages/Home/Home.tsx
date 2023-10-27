import { useFetch } from "../../utils/hooks/useFetch";

function Home() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/planetary/apod?api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo`
  );
  const dayImage: any = data;

  console.log(dayImage);
  return (
    <div className="Home">
      <img src={dayImage.url} />
    </div>
  );
}

export default Home;
