"use client";

import useIsSmallScreen from "@/hooks/hooks";
import Image from "next/image";
import styles from "../header.module.scss";
import NavBlock from "./navBlock";
import { useState } from "react";
import { createPortal } from "react-dom";
import { menu } from "@/constants";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSmallDevice } = useIsSmallScreen();
  //TODO MobileMenu!!!
  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {isSmallDevice ? (
        isMobileMenuOpen ? (
          createPortal(
            <div
              style={{
                position: "absolute",
                display: "block",
                top: 0,
                right: 0,
                height: "100hv",
              }}
            >
              <button onClick={closeMenu}>x</button>
              <ul>
                {menu.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>,
            document.body
          )
        ) : (
          <Image
            src={"/assets/menu.svg"}
            alt={"Menu"}
            width={19}
            height={19}
            className={styles["menu-mobile"]}
            onClick={openMenu}
          />
        )
      ) : (
        <NavBlock />
      )}
    </>
  );
};

export default Navigation;
