import { useEffect, useState } from "react";
import axios from "../axios";
import { User } from "./../UserModel";

const user = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getUser = async () => {
    try {
      const response = await axios.get("?results=5");
      setUserData(response.data.results);
    } catch (error) {
      // Handle the error
    }
  };
  const deleteUser = async (email: string) => {
    try {
      setUserData((prevData) =>
        prevData.filter((user) => user.email !== email)
      );
    } catch (error) {
      // Handle the error
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return {
    userData,
    deleteUser,
  };
};

export default user;
