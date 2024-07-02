import user from "./user";
import UserTable from "./userTable";

const UserLayout = () => {
  const { userData } = user();
  return (
    <>
      <UserTable data={userData} />
    </>
  );
};
export default UserLayout;
