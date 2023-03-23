import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    fetch("/api/hotels")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
