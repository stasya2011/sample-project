import Form from "@/components/form/form";
import ListOfSteps from "@/components/listOfSteps/listOfSteps";
import styles from "./chromeExtension.module.scss";

const ChromeExtension = () => {
  async function submite() {
    "use server";

    if (process.env.REACT_APP_BIN_ID && process.env.NEXT_PUBLICK_KEY) {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${process.env.REACT_APP_BIN_ID}`,
        {
          headers: {
            "X-Master-Key": process.env.NEXT_PUBLICK_KEY,
          },
        }
      );

      const data = await response.json();
      return data.record;
    }
  }

  return (
    <section>
      <div className={styles.wrapper}>
        <Form submite={submite} />
        <ListOfSteps />
      </div>
    </section>
  );
};

export default ChromeExtension;
