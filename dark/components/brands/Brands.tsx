import Image from "next/image";
import Style from "../../../styles/dark/Home.module.css";
import Aries from '../../../public/dapps/aries.jpg';
import Tsunami from '../../../public/dapps/tsunami.png';
import Laminar from '../../../public/dapps/laminar.svg';
import Econia from '../../../public/dapps/econia.jpg';
import BlueMove from '../../../public/dapps/blueMove.png';
import Thala from '../../../public/dapps/thala.png';
import SeamLogo from "../../../public/images/favicon.png"
import Vial from "../../../public/dapps/vial.png"


const Brands = () => {
  const lists = [
    {
      id: 1,
      logo: Laminar,
    },
    {
      id: 2,
      logo: Tsunami,
    },
    {
      id: 3,
      logo: Vial,
    },
    {
      id: 4,
      logo: Thala,
    },
    {
      id: 5,
      logo: Econia,
    },
  ];
  return (
    <div
      className={`grid col-5 content-center space-36 z-2 ${Style.brands} p-16`}
    >
      {lists.map((brand) => (
        <span className={`relative align-center ${Style.brand_item}`} key={brand.id}>
          <Image
            src={brand.logo}
            objectFit="contain"
            layout="fill"
          />
        </span>
      ))}
    </div>
  );
};

export default Brands;
