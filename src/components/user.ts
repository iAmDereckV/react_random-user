import { useEffect, useState } from "react";
import axios from "../axios";
// import { Person, PersonRequest } from "./"

const user = () => {
  const [userData, setUserData] = useState<[]>([]);

  const getUser = async () => {
    try {
      const response = await axios.get("?results=5");
      setUserData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      // Handle the error
      // console.log(error.message);
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
