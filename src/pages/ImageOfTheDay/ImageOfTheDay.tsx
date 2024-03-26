import Image from "../../components/image/Image";
import { useFetch } from "../../utils/hooks/useFetch";
import { Loader, LoaderWrapper, PageWrapper } from "../../utils/style/Layout";
import "./ImageOfTheDay.scss";
import Time from "react-time-format";

function ImageOfTheDay() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/planetary/apod?`
  );
  const dayMedia: any = data;
  console.log(dayMedia);

  if (error) {
    console.log(error);
  }

  return (
    <PageWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
          <p>Atterissage imminent</p>
        </LoaderWrapper>
      ) : (
        <div className="image-of-the-day_container">
          {dayMedia.media_type === "video" ? (
            <iframe
              width="560"
              height="315"
              src={dayMedia.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : (
            <img src={dayMedia.url} alt={dayMedia.title} />
          )}
          <div>
            <h2>{dayMedia.title}</h2>
            <h3>
              <Time value={dayMedia.date} format="DD/MM/YYYY" />
            </h3>
            <p>{dayMedia.explanation}</p>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default ImageOfTheDay;
