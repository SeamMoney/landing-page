import React from "react";
import styles from "../styles"
import HeroImage from  './HeroImage.png';

const Products = () => {
    return (
        <section className='mb-12 lg:mb-24 sm:px-16 px-16 sm:py-2 py-4'>
      <div className='container mx-auto '>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* images */}
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'
            >
              <img src={HeroImage} alt='' />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src={HeroImage} alt='' />
            </div>
          </div>
          {/* text */}
          <div
            className='flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[60px]'>
              Strategy Vaults
            </h2>
            <br/>
            <p className={`${styles.paragraph} max-w-[400px]`}>
        Users can create simple to complex strategies, allowing any combination of perpetuals, AMM LPing, simple borrowing, leverage borrowing, and exotic options on multiple assets across Aptos
        </p>
            <br/>
            <button className='seam-button flex flex-shrink-0 items-center px-6 py-2 rounded-full space-x-2 mt-10'>Vaults</button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Products;