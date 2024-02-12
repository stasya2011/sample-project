import Image from "next/image";

const Logo = () => {
  return (
    <h1>
      <Image
        src={"/assets/logo.svg"}
        alt={"Logo"}
        width={125}
        height={32}
        priority
      />
    </h1>
  );
};

export default Logo;
