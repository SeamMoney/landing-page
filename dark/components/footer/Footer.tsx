import Link from "next/link";
import Style from "../../../styles/dark/Home.module.css";

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import InputWrapper from "../input/InputWrapper";

export default function Footer() {
  return (
    <footer className={`${Style.footer} border-dark-1000`}>
      <div
        className={Style.footer_box}
        style={{ border: "1px solid #0001", borderTop: 0, borderBottom: 0 }}
      >
        <div className="flex flex-col align-center">
          <div className="flex space-24">
            <Link href="https://bit.ly/3AtYkI9" target="_blank" title="Github">
              <a className="text-gray-1000 text-lg">
                <FaGithubSquare />
              </a>
            </Link>
            <Link href="#" title="Twitter">
              <a className="text-gray-1000 text-lg">
                <FaTwitterSquare />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
