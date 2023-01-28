import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";

export default function Design(props: any) {
  let routeName = useRouter();
  return (
    <Layout home>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {props.postData.title} ({routeName.query.id})
        </h1>
        <div className={utilStyles.lightText}>
          <Date dateString={props.postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </article>
      <br />
      <Link href="/">← Back to home</Link>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
