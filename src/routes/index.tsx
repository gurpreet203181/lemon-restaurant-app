import { Routes, Route } from "react-router-dom";
import { HomePage, ReservationsPage } from "../pages";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
    </Routes>
  );
};

export default RootRoute;
