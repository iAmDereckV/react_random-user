import { useEffect, useState } from "react";
import axios from "../axios";

const user = () => {
  const [userData, setUserData] = useState<[]>([]);

  const getUser = async () => {
    try {
      const response = await axios.get("?results=5");
      setUserData(response.data.results);
    } catch (error) {
      // Handle the error
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return {
    userData,
  };
};

export default user;
