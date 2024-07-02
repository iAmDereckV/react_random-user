import user from "./user";
import UserTable from "./userTable";
import EditUserModal from "./userFormEdit";

const UserLayout = () => {
  const { userData, deleteUser, editUser, Editar, guardaredit, setEditUser } =
    user();
  return (
    <>
      <UserTable data={userData} deleteUser={deleteUser} Editar={Editar} />
      {editUser && (
        <EditUserModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onSave={guardaredit}
        />
      )}
    </>
  );
};
export default UserLayout;
