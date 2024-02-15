"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ReferralLink from "./referralLink";
import styles from "./form.module.scss";
import email from "../../public/assets/email.svg";

const errorMessage = { status: "Error State", img: "" };

const Form = ({
  getEmail,
  submitNewEmail,
}: {
  getEmail: () => Promise<{ email: string } | undefined>;
  submitNewEmail: (str: string) => Promise<any>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  const manageSendingLinks = async () => {
    if (inputRef.current && inputRef.current.value) {
      try {
        await submitNewEmail(inputRef.current.value);

        const res = await getEmail();
        if (res && res.email) {
          setIsEmailConfirmed(true);
        } else {
          setIsEmailConfirmed(false);
          setIsError(true);
        }
      } catch (err) {
        console.error("+++// Error //+++", err);
        setIsError(true);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles["wrapper-inner"]}>
        <div>
          <h2 className={styles.title}>REFER FRIENDS AND GET REWARDS</h2>
          <p className={styles.text}>
            Refer your friends to us and earn hotel booking vouchers. We`ll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          {isEmailConfirmed ? (
            <ReferralLink reflink={"https://ratepunk.com/referral"} />
          ) : (
            <form
              className={styles["form-wrapper"]}
              action={manageSendingLinks}
            >
              {isError && (
                <h4 className={styles.error}>{errorMessage.status}</h4>
              )}
              <Image
                className={styles["email-img"]}
                alt="email"
                src={email}
                width={20}
                height={16}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                ref={inputRef}
              />
              <button type="submit" className={styles.btn}>
                Get Referral Link
              </button>
            </form>
          )}
        </div>

        <span className={styles["clarification"]}>
          Limits on max rewards apply.
        </span>
      </div>
    </section>
  );
};

export default Form;
