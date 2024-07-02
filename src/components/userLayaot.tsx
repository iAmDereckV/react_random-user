import user from "./user";
import UserTable from "./userTable";

const UserLayout = () => {
  const { userData, deleteUser } = user();
  return (
    <>
      <UserTable data={userData} deleteUser={deleteUser} />
    </>
  );
};
export default UserLayout;
