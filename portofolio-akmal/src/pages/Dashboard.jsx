import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="card">
    <section className="dashboard">
      <h2>Dashboard</h2>
      <p>Selamat datang kembali, {user.name}!</p>
      <p>Ini adalah halaman khusus yang hanya bisa diakses setelah login.</p>
    </section>
    </div>
  );
}

export default Dashboard;