import { Suspense } from "react";
import Form from "@/components/form/form";
import ListOfSteps from "@/components/listOfSteps/listOfSteps";
import styles from "./chromeExtension.module.scss";

const ChromeExtension = () => {
  async function submitNewEmail(str: string) {
    "use server";

    if (process.env.REACT_APP_BIN_ID && process.env.NEXT_PUBLICK_KEY) {
      const body = JSON.stringify({ email: str });
      const headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("X-Master-Key", process.env.NEXT_PUBLICK_KEY);
      const a = await fetch(
        `https://api.jsonbin.io/v3/b/${process.env.REACT_APP_BIN_ID}`,
        { method: "PUT", body, headers }
      );

      if (a.status !== 200) {
        throw new Error(`${a.status} ${a.statusText}`);
      }

      const res = await a.json();
      return res;
    }
  }
  async function getEmail(): Promise<{ email: string } | undefined> {
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
    <section className={styles.wrapper}>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Form getEmail={getEmail} submitNewEmail={submitNewEmail} />
        <ListOfSteps />
      </Suspense>
    </section>
  );
};

export default ChromeExtension;
