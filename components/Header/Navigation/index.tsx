//FIXME import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./NavBlock";

const Navigation = () => {
  // FIXME
  //const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");
  const isSmallDevice = false;

  return (
    <>
      {isSmallDevice ? (
        <Image
          src={"/assets/menu.svg"}
          alt={"Menu"}
          width={19}
          height={19}
          className={styles["menu-mobile"]}
        />
      ) : (
        <NavBlock />
      )}
    </>
  );
};

export default Navigation;
