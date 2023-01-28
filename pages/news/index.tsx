import News from "@/types/news";

function NewsArticals({ articles }:any) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((el: News) => {
        return (
          <div key={el.id}>
            <h2>{el.category}</h2>
          </div>
        );
      })}
    </>
  );
}
export default NewsArticals;

export async function getServerSideProps() {
  const respone = await fetch("http://localhost:8080/news");
  const data = await respone.json();
  return {
    props: {
      articles: data,
    },
  };
}
