import userSWR from "swr";
const fetcher = async () => {
  const response = await fetch("http://localhost:8080/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = userSWR("dashboard", fetcher);
  if (error) {
    return 'An Error has occured'
  }
  if (!data) {
    return 'Loading...'
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <br />
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Followers: {data.followers}</h2>
      <h2>Following: {data.following}</h2>
    </div>
  );
}
export default DashboardSWR;
