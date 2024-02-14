import { IStep } from "@/types";
import { data } from "@/constants";
import Image from "next/image";
import styles from "./listOfSteps.module.scss";

const ListOfSteps = () => {
  return (
    <section className={styles["steps"]}>
      <ul className={styles.list}>
        {data.map((step: IStep, i: number) =>
          i == 1 ? (
            <li key={step.id} className={styles["list-item"]}>
              <div className={styles["list-item_info"]}>
                <h2 className={styles["title-steps"]}>Step {i + 1}</h2>
                <h2 className={styles["title"]}>{step.name}</h2>
                <p className={styles["list-item_text"]}>{step.description}</p>
              </div>
              <Image
                src={step.linkToImg}
                alt={step.name}
                width={0}
                height={0}
                className={styles["list-item_img-revert"]}
              />
            </li>
          ) : (
            <li key={step.id} className={styles["list-item"]}>
              <Image
                src={step.linkToImg}
                alt={step.name}
                width={0}
                height={0}
                className={styles["list-item_img"]}
              />
              <div className={styles["list-item_info"]}>
                <h2 className={styles["title-steps"]}>Step {i + 1}</h2>
                <h2 className={styles["title"]}>{step.name}</h2>
                <p className={styles["list-item_text"]}>{step.description}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default ListOfSteps;
