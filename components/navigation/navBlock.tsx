"use client";

import { usePathname } from "next/navigation";
import { menu } from "@/constants";
import Link from "next/link";
import classNames from "classnames";
import styles from "../header.module.scss";

const NavBlock = () => {
  const pathName = usePathname();

  return (
    <nav className={styles.nav}>
      {menu.map((elem) => (
        <Link
          href={elem.href}
          className={classNames(pathName === elem.href ? styles.active : "")}
          key={elem.id}
        >
          {elem.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBlock;
