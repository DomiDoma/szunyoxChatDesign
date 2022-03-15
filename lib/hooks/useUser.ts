import { useEffect, useState } from "react";

import { API_URL } from "@lib/constants";

//@TODO: user interface
const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/user/[id]`);
      const json = await resp.json();
      setUser(json);
    };
    fetchUser();
  }, []);

  return user;
};

export default useUser;
