import Image from "next/image";
import Button from "../components/buttons/Button";
import Style from "../../styles/dark/Home.module.css";
import ExplorerImage from "../../public/dapps/image.png";
export default function SectionUsers() {
  const colors =
    "linear-gradient(188.08deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 93.79%), #181818";

  return (
    <section className="relative">
      <div
        className={Style.tools}
        style={{
          background: "#1B1C28",
        }}
      >
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
        <span className={Style.dots}></span>
      </div>
      <div
        className={`grid col-2 align-center ${Style.window}`}
        style={{
          padding: "80px 0 80px 80px",
          background: colors,
          overflowX: "hidden",
        }}
      >
        <div className="flex flex-col space-36 z-1">
          <div className="flex flex-col space-16">
            <span className="overline text-gray-1000">
              Create Strategies & Simulate transactions{" "}
            </span>
            <h2 className="text-heading">
              Explore & interact with Move smart contracts deployed on Aptos.
            </h2>
          </div>
          <span className="text-gray-1000 text-medium">
            Use the transaction explorer to create highly customized DeFi strategies, explore risk curves on positions across different protocols, and execute batch transactions
          </span>
          <div className="flex space-36 wrap">
            <a href="https://app.seam.money/explorer">
              <Button text="Explorer" type="primary" />
            </a>
            <a href="https://docs.seam.money">
              <Button text="Documentation" type="secondary" />
            </a>
          </div>
        </div>

        <div className={`relative hidden z-0  ${Style.user_img}`}>
          <span className={`absolute`} style={{ top: -180, right: 10 }}>
            <Image
              src={ExplorerImage}
              alt="bg-users"
              layout="fixed"
              objectFit="fill"
              height={300}
              width={500}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
