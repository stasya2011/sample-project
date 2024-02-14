import { menu } from "@/constants";
import Image from "next/image";
import styles from "./mobileMenu.module.scss";

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className={styles.wrapper} style={{ width: window.innerWidth }}>
      <button onClick={closeMenu}>
        <Image
          src={"/assets/close.svg"}
          alt="Close mobile menu."
          width={16}
          height={16}
        />
      </button>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
