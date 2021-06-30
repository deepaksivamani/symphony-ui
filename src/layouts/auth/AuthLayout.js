import React from "react";
import AuthRoutes from "./AuthRoutes";

const AuthLayout = () => {
  return (
    <div>
      <div className="main-content h-100 container-fluid">
        <AuthRoutes />
      </div>
    </div>
  );
}

export default AuthLayout;
