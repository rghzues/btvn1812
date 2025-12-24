import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <h2>Dashboard</h2>
        <button>Quản lý sản phẩm</button>
        <button>Quản lý users</button>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <hr />

      <h3>Danh sách sản phẩm (fake)</h3>
      <ul>
        <li>Sản phẩm A</li>
        <li>Sản phẩm B</li>
        <li>Sản phẩm C</li>
      </ul>
    </div>
  );
}

export default Dashboard;
