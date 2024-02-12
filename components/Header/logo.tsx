import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt={"Logo"}
      width={125}
      height={32}
      priority
    />
  );
};

export default Logo;
