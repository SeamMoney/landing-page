import EthCard from "../components/eth/EthCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useEffect, useState } from "react";

type Data = Awaited<
  {
    id: number;
    poster: string;
    name: string;
  }[]
>;

export default function SectionScrollEth() {
  const [nft, setNft] = useState<Data | null>(null);
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 12.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      const nfts = [
        {"id":10,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/1kx.png","name":"1kx"},
        {"id":11,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/aptin.jpeg","name":"Aptin"},
        {"id":12,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/animeswap.png","name":"AnimeSwap"},
        {"id":13,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/aptosLend.png","name":"AptosLend"},
        {"id":14,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/argo.jpg","name":"Argo"},
        {"id":15,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/aries.jpg","name":"Aries"},
        {"id":16,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/econia.jpg","name":"Econia"},
        {"id":17,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/laminar.svg","name":"Laminar"},
        {"id":18,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/pontemNetwork.jpg","name":"LiquidSwap"},{"id":19,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/thala.png","name":"Thala"},
        {"id":20,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/tsunami.png","name":"Tsunami"},
        {"id":21,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/orion.jpg","name":"Orion"},
        {"id":22,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/aptoSwap.jpg","name":"AptoSwap"},
        {"id":23,"poster":"https://raw.githubusercontent.com/SeamMoney/seam-frontend/main/public/dapps/aptoSphere.png","name":"AptoSphere"}
      ]
      setNft(nfts);
    })();
  }, []);
  if (!nft) return null;

  const lists = nft
    .slice(1, nft.length)
    .map((eth) => <EthCard key={eth.id} {...eth} />);
  return <Slider {...settings}>{lists}</Slider>;
}
