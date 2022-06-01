import { useEffect, useState } from "react";

import { API_URL } from "@lib/constants";
import { iUser } from "@lib/types";

const useUser = (email: string) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${API_URL}/user/${email}`);
      const json = await resp.json();
      setUser(json.user);
    };
    fetchUser();
  }, []);

  return user as unknown as iUser;
};

export default useUser;
