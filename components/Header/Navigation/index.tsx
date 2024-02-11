"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import styles from "../header.module.scss";

const Navigation = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");
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
        <nav className={styles.nav}>
          <Link href={"/chrome-extension"}>Chrome Extension</Link>
          <Link href={"/price-comparison"}>Price Comparison</Link>
          <Link href={"/blog"}>Blog</Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
