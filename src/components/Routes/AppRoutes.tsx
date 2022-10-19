import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Loading from "../Elements/Loading";

type Status = "checking" | "authenticated" | "no-authenticated";

let status: Status = "checking";

export const AppRoutes = () => {
  if (status === "checking") return <Loading />;

  return (
    <Router>
      <div className="">
        <div className="">
          <Routes>
            {status === "authenticated" ? (
              <Route path="/*" element={<PrivateRoutes />} />
            ) : (
              <Route path="/*" element={<PublicRoutes />} />
            )}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
