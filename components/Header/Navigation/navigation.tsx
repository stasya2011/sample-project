//"use client";
//import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";

const Navigation = () => {
  // FIXME Need to create custom hook
  //const isSmallDevice = useMediaQuery("only screen and (max-width : 1150px)");
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
