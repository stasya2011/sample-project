import Form from "@/components/Form";
import ListOfSteps from "@/components/ListOfSteps";
import styles from "./chromeExtension.module.scss";

const ChromeExtension = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <Form />
        <ListOfSteps />
      </div>
    </section>
  );
};

export default ChromeExtension;
