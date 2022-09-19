import React from 'react';
import HeroImage from  './HeroImage.png';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from "../styles"
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[20px] px-4 bg-discount-gradient rounded-[10px]">
        </div>

        <div className="flex flex-row justify-between items-center w-full pt-28">
          <h1 className="flex-1 font-poppins font-semibold text-[42px] text-white ss:leading-[100.8px] leading-[50px]">
            Hyper-Composable<br className="sm:block hidden" />{" "}
            <span className="text-gradient">DeFi Strategy Vaults</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-[42px] text-white ss:leading-[100.8px] leading-[50px] w-full">
          on Aptos.
        </h1>
        <p className={`${styles.paragraph} max-w-[400px] mt-10`}>
        Create strategies with any combination of AMM LPing, simple borrowing, and exotic options on multiple assets across Aptos
        </p>
        <div className="flex flex-row space-x-4 mt-10">
                            <a href="https://app.seam.money/staking">
                            <button className="seam-button px-4 py-2 rounded-full">Vaults</button>
                            </a>
                            <a href="https://docs.seam.money">
                            <button className="seam-button flex flex-shrink-0 items-center px-6 py-2 rounded-full space-x-2">
                                <span>Docs</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                          </a>
                        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={HeroImage} alt="billing" className="pt-20 w-[100%] h-[100%] relative z-[99] overflow-hidden" />
        

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

    </section>
  );
};
export default Hero;