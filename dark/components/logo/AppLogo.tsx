import Link from "next/link";
import Logo from "./../../../public/logo.png";
import { useRouter } from "next/router";
import Image from 'next/image';

const AppLogo = () => {
  const { pathname } = useRouter();
  const color = pathname.includes("/dark") ? "#FFFFFF" : "#181818";
  return (
    <Link href="/">
      <a>
      <Image height={45} width={150} src={Logo} />
      </a>
    </Link>
  );
};
export default AppLogo;
