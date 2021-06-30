import React, { useEffect, useState } from "react";
import FullLayout from "./full/FullLayout";
import AuthLayout from "./auth/AuthLayout";

const IndexLayout = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // setAuthentication(token ? true : false);
    setAuthentication(true);
  }, [isAuthenticated]);

  return <div>{isAuthenticated ? <FullLayout /> : <AuthLayout />}</div>;
}

export default IndexLayout;
