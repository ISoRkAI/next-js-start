import Heading from "@/components/Heading";
import styles from "../styles/404.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="error massage" />
      </div>
    </div>
  );
}
