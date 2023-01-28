import { useState, useEffect } from "react";
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    posts: "",
    likes: "",
    followers: "",
    following: "",
  });

  useEffect(() => {
    async function fetchDashboardData() {
      console.log("Client Side Dashboard fetch");
      const response = await fetch("http://localhost:8080/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <br />
      <h2>Posts: {dashboardData.posts}</h2>
      <h2>Likes: {dashboardData.likes}</h2>
      <h2>Followers: {dashboardData.followers}</h2>
      <h2>Following: {dashboardData.following}</h2>
    </div>
  );
}
export default Dashboard;
