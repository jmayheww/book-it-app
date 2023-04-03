import React, { Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserContext from "../context/userAuth";

const AsyncHome = React.lazy(() => import("../pages/Home"));
const AsyncMyAccount = React.lazy(() => import("../pages/MyAccount"));
const AsyncLogin = React.lazy(() => import("../pages/Login"));
const AsyncHotelsPage = React.lazy(() => import("../pages/HotelsPage"));
const AsyncLogout = React.lazy(() => import("../pages/Logout"));

function App() {
  const { user, fetchCurrentUser } = useContext(UserContext);
  const [hotels, sethotels] = useState([]);

  function getHotels() {
    fetch("/api/hotels")
      .then((resp) => resp.json())
      .then((data) => {
        sethotels(data);
      });
  }

  useEffect(() => {
    fetchCurrentUser();
    getHotels();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array

  return (
    <div className="App">
      {user && <NavBar />}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<AsyncHome />} />
            <Route exact path="/home" element={<AsyncHome />} />
            <Route exact path="/myaccount" element={<AsyncMyAccount />} />
            <Route
              exact
              path="/hotels"
              element={<AsyncHotelsPage hotels={hotels} />}
            />
            <Route exact path="/logout" element={<AsyncLogout />} />

            {!user && (
              <>
                <Route exact path="/login" element={<AsyncLogin />} />
                <Route exact path="/signup" element={<AsyncLogin />} />
                {/* Redirect to /login by default */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}

            {/* Redirect to /home if user is authenticated */}
            {user && <Route path="*" element={<Navigate to="/home" />} />}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
