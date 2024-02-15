import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt={"Logo"} width={125} height={32} priority />
    </Link>
  );
};

export default Logo;
