import News from "@/types/news";

function ArticalListByCategory({ articles, category }:{articles: News[], category: string}) {
  return (
    <>
      <h1>
        Showing news for catagory <i> {category}</i>
      </h1>
      {articles.map((el: News) => {
        return (
          <div key={el.id}>
            <h2>
              {el.id} {el.body}
            </h2>
            <br />
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default ArticalListByCategory;
export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context
  console.log(req.headers.cookie, query)
  res.setHeader('Set-Cookie', ['name=Kismat'])
  const { category }: { category: string } = params;
  const respone = await fetch(
    `http://localhost:8080/news?category=${category}`
  );
  const data = await respone.json();
  let props = {
    articles: data,
    category: category,
  };
  return {
    props,
  };
}
