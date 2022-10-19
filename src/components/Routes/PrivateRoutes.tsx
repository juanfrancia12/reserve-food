import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
