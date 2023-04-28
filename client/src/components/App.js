import React, { Suspense, useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import UserContext from "../context/userAuth";
import CreateBookingModal from "./CreateBookingModal";
import EditBookingModal from "./EditBookingModal";

const AsyncHome = React.lazy(() => import("../pages/Home"));
const AsyncMyAccount = React.lazy(() => import("../pages/MyAccount"));
const AsyncLogin = React.lazy(() => import("../pages/Login"));
const AsyncHotelsList = React.lazy(() => import("../pages/HotelsList"));
const AsyncViewHotelPage = React.lazy(() => import("../pages/ViewHotelPage"));
const AsyncAdminPage = React.lazy(() => import("../pages/Admin"));

function App() {
  const { user, fetchCurrentUser, isAdmin } = useContext(UserContext);
  const [hotels, setHotels] = useState(null);

  const location = useLocation();
  const showBackButton = location.pathname.includes("/hotels/");

  function getHotels() {
    fetch("/api/hotels")
      .then((resp) => resp.json())
      .then((data) => {
        setHotels(data);
      });
  }

  useEffect(() => {
    fetchCurrentUser();
    getHotels();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {user && <NavBar showBackButton={showBackButton} />}
      <MainContent>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<AsyncHome />} />
            <Route exact path="/home" element={<AsyncHome />} />
            <Route exact path="/myaccount" element={<AsyncMyAccount />}>
              <Route
                path="bookings/:booking_id"
                element={<EditBookingModal />}
              />
            </Route>

            <Route
              exact
              path="/hotels"
              element={<AsyncHotelsList hotels={hotels} />}
            />
            <Route
              path="/hotels/:hotelId"
              element={<AsyncViewHotelPage hotels={hotels} />}
            >
              <Route path="rooms/:room_id" element={<CreateBookingModal />} />
            </Route>

            {isAdmin && (
              <Route
                exact
                path="/admin"
                element={<AsyncAdminPage hotels={hotels} />}
              />
            )}

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
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

export default App;
