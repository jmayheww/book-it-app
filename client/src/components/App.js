import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";

const AsyncHome = React.lazy(() => import("../pages/Home"));
const AsyncMyAccount = React.lazy(() => import("../pages/MyAccount"));
const AsyncLogin = React.lazy(() => import("../pages/Login"));
const AsyncHotelsPage = React.lazy(() => import("../pages/HotelsPage"));
const AsyncLogout = React.lazy(() => import("../pages/Logout"));

function App() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        nav("/login");
      }
    });

    fetch("/api/hotels")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, [nav]);

  return (
    <div className="App">
      {user && <NavBar user={user} setUser={setUser} />}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<AsyncHome />} />
            <Route exact path="/home" element={<AsyncHome user={user} />} />
            <Route exact path="/myaccount" element={<AsyncMyAccount />} />
            <Route exact path="/hotels" element={<AsyncHotelsPage />} />
            <Route exact path="/logout" element={<AsyncLogout />} />
            <Route path="*" element={<Navigate to="/home" />} />

            {!user && (
              <Route
                exact
                path="/login"
                element={<AsyncLogin onLogin={setUser} />}
              />
            )}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
