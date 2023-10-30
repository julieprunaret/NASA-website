import LinkCustom from "../../components/Link/Link";
import Image from "../../components/image/Image";
import { useFetch } from "../../utils/hooks/useFetch";
import { Loader, LoaderWrapper, PageWrapper } from "../../utils/style/Layout";
import "./marsPictures.scss";
import { useState, useEffect } from "react";

function MarsPictures() {
  const [picture, setPicture] = useState<IPicture>({
    id: "",
    img_src: "",
    earth_date: "",
  });

  useEffect(() => {
    console.log(picture);
  }, [setPicture, picture]);

  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo&feed`
  );
  const marsPics: any = data;

  return (
    <PageWrapper className="mars-pictures_container">
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
          <p>Atterissage imminent</p>
        </LoaderWrapper>
      ) : (
        <ul>
          {marsPics.photos &&
            marsPics.photos.slice(0, 16).map((marsPic: any) => (
              <li
                key={marsPic.id}
                onClick={() =>
                  setPicture({
                    id: marsPic.id,
                    img_src: marsPic.img_src,
                    earth_date: marsPic.earth_date,
                  })
                }
                title="Voir l'image"
                className={`mars-pictures_listItems ${
                  picture.id === marsPic.id && "-selected"
                }`}
              >
                <Image
                  url={marsPic.img_src}
                  alt={`image de ${marsPic.earth_date}`}
                  size="image-s -square"
                />
              </li>
            ))}
        </ul>
      )}

      {picture.id ? (
        <div>
          <h2>{picture.earth_date}</h2>
          <Image
            url={picture.img_src}
            alt={`image de ${picture.earth_date}`}
            size="mars-pictures_image"
          />
        </div>
      ) : (
        <p>plop</p>
      )}
    </PageWrapper>
  );
}

export default MarsPictures;
