import Navbar from "./Navbar";
import { Routes, Route, useParams, Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Yoga",
  },
  {
    id: 2,
    name: "Hendra",
  },
  {
    id: 3,
    name: "Pratama",
  },
];

function UserDetail() {
  const params = useParams();

  return (
    <div>
      <div>ID: {params.id}</div>
      <div>Nama: {users[params.id - 1].name}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<h3>Beranda</h3>} />
        <Route path="data">
          <Route path="about" element={<h3>Tentang</h3>} />
          <Route path="contact" element={<h3>Kontak Kami</h3>} />
          <Route path="user">
            <Route
              path=""
              element={
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nama</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                          <Link to={`/data/user/${user.id}`}>Detail</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            />
            <Route path=":id" element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
