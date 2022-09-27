import Link from "next/link";
import { CSSProperties, FC } from "react";

const NavLink: FC<PropsType> = ({ className, style }) => {
  const lists: { label: string; url: string }[] = [
    {
      label: "Vaults",
      url: "#",
    },
    {
      label: "Explorer",
      url: "#",
    },
    {
      label: "Staking",
      url: "#",
    },
  ];
  const render = lists.map((el, index) => (
    <li
      key={index}
      style={{ ...style }}
      className={`link-underline-white text-gray-1000 font-medium text-center ${className ? className : ""}`}
    >
      <Link href={el.url}>
        <a>{el.label}</a>
      </Link>
    </li>
  ));
  return <>{render}</>;
};

interface PropsType {
  className?: string;
  style?: CSSProperties;
}

export default NavLink;
