"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";

const Navigation = () => {
  const isSmallDevice = useMediaQuery({
    query: "(max-width : 1150px)",
  });

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
