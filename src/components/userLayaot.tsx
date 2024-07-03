import React, { useState } from "react";
import user from "./user";
import UserTableCompact from "./userTableCompact";
import UserTableExtended from "./userTableExtends";
import EditUserForm from "./EditUserForm";
import FilterForm from "./FilterForm";
import ColumnSelector from "./ColumnSelector";
import TableViewSelector from "./TableViewSelector";
import { User } from "../UserModel";

const UserLayout = () => {
  const { userData, deleteUser, editUser, Editar, guardaredit, setEditUser } =
    user();
  const [filters, setFilters] = useState({});
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [view, setView] = useState<"compact" | "extended">("compact");

  const applyFilters = (users: User[]) => {
    return users.filter((user) => {
      return (
        (!filters.gender || user.gender.includes(filters.gender)) &&
        (!filters.name ||
          `${user.name.first} ${user.name.last}`.includes(filters.name)) &&
        (!filters.email || user.email.includes(filters.email)) &&
        (!filters.country || user.location.country.includes(filters.country))
      );
    });
  };

  const filteredData = applyFilters(userData);

  const allColumns = [
    "Genero",
    "Titulo",
    "Nombre",
    "Pais",
    "Estado",
    "Ciudad",
    "Calle",
    "Codigo Postal",
    "Correo",
    "Telefono",
    "Celular",
    "Foto",
  ];

  return (
    <>
      <TableViewSelector view={view} onViewChange={setView} />
      <FilterForm onFilter={setFilters} />
      <ColumnSelector
        columns={allColumns}
        selectedColumns={selectedColumns}
        onColumnChange={setSelectedColumns}
      />

      {view === "compact" ? (
        <UserTableCompact
          data={filteredData}
          deleteUser={deleteUser}
          Editar={Editar}
        />
      ) : (
        <UserTableExtended
          data={filteredData}
          deleteUser={deleteUser}
          Editar={Editar}
          selectedColumns={selectedColumns}
        />
      )}

      {editUser && (
        <EditUserForm
          user={editUser}
          onClose={() => setEditUser(null)}
          onSave={guardaredit}
        />
      )}
    </>
  );
};

export default UserLayout;
