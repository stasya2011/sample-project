import Link from "next/link";
import Image from "next/image";
import { IFooterBtn } from "@/types";
import styles from "./button.module.scss";

const Button = ({ link, resource, srcToImg }: IFooterBtn) => {
  return (
    <Link href={link} className={styles.wrapper} target="_blank">
      <Image src={srcToImg} width={48} height={48} alt={resource} />
      <span className={styles.info}>
        <span>available in the</span>
        <span>{resource}</span>
      </span>
    </Link>
  );
};

export default Button;
