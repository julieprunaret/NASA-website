import LinkCustom from "../../components/Link/Link";
import Image from "../../components/image/Image";
import { useFetch } from "../../utils/hooks/useFetch";
import { PageWrapper } from "../../utils/style/Layout";
import "./marsPictures.scss";

function MarsDetail() {
  const { data, isLoading, error } = useFetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo&feed`
  );
  const marsPics: any = data;

  return (
    <PageWrapper>
      {/* <Image
        url={marsPic.img_src}
        alt={`image de ${marsPic.earth_date}`}
        size="image-s"
        key={marsPic.id}
      /> */}
    </PageWrapper>
  );
}

export default MarsDetail;
