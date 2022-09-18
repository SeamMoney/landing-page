import React from "react";
import {dapps} from "./dapp_data.ts";
import Hero from './components/Hero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import styles from "./styles";

const defiDapps = ["Tsunami","Aries","Laminar","hippo","Econia",]

function Protocol(dapp){
    return(
    <div className="w-30 h-12 rounded-2xl">
        <p>{dapp.name}</p>
        <img src={`../dapps/${dapp.image}`} alt={dapp.name} className="w-20 h-20" />
      
    </div>
    );
}

const ProtocolIntegrations = () => {
    const dappData = dapps.filter(d => defiDapps.includes(d.name));
    console.log(dappData)

    return(
        <div className="flex flex-row justify-center m-5 p-2">
            {dappData.map((dapp) => {

                return(
                    <Protocol {...dapp}/>
                );
            } )}
        </div>
    );
}

function App() {
    Aos.init({
        duration: 800,
        offset: 0,
    });

    return (
        <div className=" bg-gradient-to-r from-[#000000] via-[#0085CC] to-[#005DA2] w-full overflow-hidden">
        <Navbar />
            <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
            </div>
            </div>
            {/* <Products /> */}
        </div>
    );
}
export default App;