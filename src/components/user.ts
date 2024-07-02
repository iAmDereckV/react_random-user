import { useEffect, useState } from "react";
import axios from "../axios";
import { User } from "./../UserModel";

const user = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const response = await axios.get("?results=5");
      setUserData(response.data.results);
    } catch (error) {
      // Handle the error
    }
  };
  const deleteUser = async (id: string) => {
    try {
      setUserData((prevData) =>
        prevData.filter((user) => user.login.uuid !== id)
      );
    } catch (error) {
      // Handle the error
    }
  };
  const Editar = (user: User) => {
    setEditUser(user);
  };

  // Función para manejar el guardado de los cambios
  const guardaredit = (updatedUser: User) => {
    setUserData((prevData) =>
      prevData.map((user) =>
        user.login.uuid === updatedUser.login.uuid ? updatedUser : user
      )
    );
    setEditUser(null);
  };
  useEffect(() => {
    getUser();
  }, []);
  return {
    userData,
    deleteUser,
    editUser,
    Editar,
    guardaredit,
    setEditUser,
  };
};

export default user;
