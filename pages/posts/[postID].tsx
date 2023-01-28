import Link from "next/link";
import { useRouter } from "next/router";
type Post = {
  userid: number;
  id: number;
  title: string;
  body: string;
};
function Post({ postData }: { postData: Post }) {
//***FallBack true***///
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading data...</div>;
  }
  return (
    <>
      <h1>Post Details</h1>
      <div>
        {postData.id}: {postData.title}
      </div>
      <br />
      <div>{postData.body}</div>
      <Link href="/posts">← Back to Posts</Link>
    </>
  );
}
export default Post;
export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   const paths: any[] = [];
//   data.slice(0, 10).forEach((el: Post) => {
//     paths.push({ params: { postID: el.id.toString() } });
//   });
  return {
    paths: [{ params: { postID:'1' } }],
    fallback: true,
    // fallback: 'blocking',
  };
}
export async function getStaticProps(context: any) {
  let { params } = context;
  console.log('Regenerating Productlist '+ params.postID)

  const response = await fetch(
    `http://localhost:8080/posts/${params.postID}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { postData: data },
    revalidate: 1
  };
}
