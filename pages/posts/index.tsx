import type { NextApiRequest, NextApiResponse } from "next";
import Link from "next/link";
import Post from "@/types/posts";

export default function PostList({postsData}: any) {
    let posts:any[] = []
    postsData.forEach((el:Post)  => {
        posts.push(<Link href={"/posts/"+el.id} passHref key={el.id}><div>{el.id}: {el.title}<hr /></div></Link>)
    });
  return (
    <>
      <h1>List of Posts</h1>
      <div>{posts}</div>

    </>
  );
}

export async function getStaticProps() {
  console.log('Generating/ Regenerating Productlist')
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return {
    props: { postsData: data },
    revalidate: 1
  };
}

