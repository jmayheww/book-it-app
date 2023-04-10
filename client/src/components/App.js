import React, { Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserContext from "../context/userAuth";
import BookingModal from "./BookingModal";

const AsyncHome = React.lazy(() => import("../pages/Home"));
const AsyncMyAccount = React.lazy(() => import("../pages/MyAccount"));
const AsyncLogin = React.lazy(() => import("../pages/Login"));
const AsyncHotelsList = React.lazy(() => import("../pages/HotelsList"));
const AsyncViewHotelPage = React.lazy(() => import("../pages/ViewHotelPage"));
const AsyncLogout = React.lazy(() => import("../pages/Logout"));

function App() {
  const { user, fetchCurrentUser } = useContext(UserContext);
  const [hotels, sethotels] = useState([]);
  const location = useLocation();
  const showBackButton = location.pathname.includes("/hotels/");

  function getHotels() {
    fetch("/api/hotels")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data: ", data);
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
      {user && <NavBar showBackButton={showBackButton} />}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<AsyncHome />} />
            <Route exact path="/home" element={<AsyncHome />} />
            <Route exact path="/myaccount" element={<AsyncMyAccount />} />
            <Route
              exact
              path="/hotels"
              element={<AsyncHotelsList hotels={hotels} />}
            />
            <Route
              path="/hotels/:hotelId"
              element={<AsyncViewHotelPage hotels={hotels} />}
            >
              <Route path="rooms/:room_id" element={<BookingModal />} />
            </Route>
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
