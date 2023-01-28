import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/dashbard/dashboard.module.scss";
import Link from "next/link";
import Date from "../components/date";
import User from "../components/user";
const inter = Inter({ subsets: ["latin"] });
import { getSortedPostsData } from "../lib/posts";

export default function Home(props: any) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Alert type="error">File not found!</Alert>
        <User users={props.users} />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {props.allPostsData.map(
              ({
                id,
                date,
                title,
              }: {
                id: string;
                date: Date;
                title: string;
              }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/design/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              )
            )}
          </ul>
        </section>
        <Link href={`/posts`} className={styles.highlightscss}>
          Posts
        </Link>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  return {
    props: {
      allPostsData,
      users: userData,
    },
  };
}
