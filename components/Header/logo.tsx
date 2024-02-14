import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/assets/logo.svg"}
        alt={"Logo"}
        width={125}
        height={32}
        priority
      />
    </Link>
  );
};

export default Logo;
