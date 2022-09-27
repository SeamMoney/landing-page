import { RiUser3Line } from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi";
import { FaIcons } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io5";
import Stats from "../components/stats/Stats";
export default function SectionStats() {
  return (
    <div className="flex space-36 content-center wrap">
      <Stats icon={<HiOutlineCreditCard />} value={35.85} unit="M" label="TVL" />
      <Stats
        icon={<IoLogoBuffer />}
        value={24}
        label="Integrations"
      />

      <Stats icon={<RiUser3Line />} value={5} unit="K" label="Discord Members" />
    </div>
  );
}
