import { useEffect, useState } from "react";

import { API_URL } from "@lib/constants";

//@TODO: auth interface
const useAuth = () => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const fetchAuth = async () => {
      const resp = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await resp.json();
      setAuth(json);
    };
    fetchAuth();
  }, []);

  return auth;
};

export default useAuth;
