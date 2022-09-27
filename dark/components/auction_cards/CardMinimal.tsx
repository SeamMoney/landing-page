import Image from "next/image";
import { CSSProperties, FC } from "react";
import Style from "../../../styles/dark/nft_card/NftCard.module.css";
const CardMinimal: FC<PropsType> = (props) => {
  const {
    poster,
    title,
    price,
    risk,
    total_bid,
    deadline,
    liked,
    renderType = "x",
    css,
    truncateTitle,
  } = props;

  return (
    <div
      className={`flex overflow-hidden ${
        renderType === "x" ? "flex-col" : "flex-row space-16 align-center"
      } ${Style.NFT_card_wrapper}`}
      style={css ? { ...css, width: "100%" } : { width: "100%" }}
    >
      <div
        className={`relative overflow-hidden`}
        style={
          renderType === "y"
            ? { maxWidth: 100, minWidth: 100, borderRadius: 20 }
            : { borderRadius: 20 }
        }
      >
        <Image
          src={poster}
          alt="nft_poster"
          layout="responsive"
          className={Style.poster}
          objectFit="cover"
          quality={100}
          height={renderType === "x" ? 550 : 100}
          width={renderType === "x" ? 400 : 100}
          style={{ zIndex: 1 }}
        />
      </div>
      <div
        className="flex flex-col overflow-hidden"
        style={{ padding: "20px 0 0 0", width: "100%" }}
      >
        <span className={`text-heading h7 ${truncateTitle ? "truncate" : ""}`}>
          {title}
        </span>
        <div className="flex space-between" style={{ alignItems: "baseline" }}>
          <span className={`${Style.timer}`} style={{ lineHeight: 3 }}>
            {deadline}
          </span>
          <span className={`${Style.bidding_price}`}>{price} APY</span>
        </div>
        {renderType === "x" && (
          <div
            className="border-dark-500"
            style={{ height: 1, width: "100%", margin: "10px 0" }}
          ></div>
        )}
        <div className="flex space-24 space-between align-center">
          {/* Like count */}
          <span className={Style.total_bid}>{total_bid} Depositors</span>
          <span className={`${Style.risk_profile}`}>{risk} Risk</span>
        </div>
      </div>
    </div>
  );
};

interface PropsType {
  poster: string;
  title: string;
  price: string;
  risk: string;
  deadline: string;
  total_bid: number;
  liked?: boolean;
  renderType?: "x" | "y";
  css?: CSSProperties;
  truncateTitle?: boolean;
}

export default CardMinimal;
