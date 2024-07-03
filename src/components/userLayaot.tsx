import React, { useState } from "react";
import user from "./user";
import UserTableCompact from "./userTableCompact";
import UserTableExtended from "./userTableExtends";
import EditUserForm from "./EditUserForm";
import FilterModal from "./FilterModal";
import ColumnSelectorModal from "./ColumnSelectorModal";
import TableViewSelector from "./TableViewSelector";
import { User } from "../UserModel";
import { Button, Box } from "@mui/material";

const UserLayout = () => {
  const { userData, deleteUser, editUser, Editar, guardaredit, setEditUser } =
    user();
  const [filters, setFilters] = useState({});
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [view, setView] = useState<"compact" | "extended">("compact");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [columnSelectorModalOpen, setColumnSelectorModalOpen] = useState(false);

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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TableViewSelector view={view} onViewChange={setView} />
        <Box>
          <Button
            onClick={() => setFilterModalOpen(true)}
            variant="contained"
            color="primary"
          >
            Filtrar Usuarios
          </Button>
          {view === "extended" && (
            <Button
              onClick={() => setColumnSelectorModalOpen(true)}
              variant="contained"
              color="secondary"
              sx={{ ml: 2 }}
            >
              Seleccionar Columnas
            </Button>
          )}
        </Box>
      </Box>

      <FilterModal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onFilter={setFilters}
      />

      {view === "extended" && (
        <ColumnSelectorModal
          open={columnSelectorModalOpen}
          onClose={() => setColumnSelectorModalOpen(false)}
          columns={allColumns}
          selectedColumns={selectedColumns}
          onColumnChange={setSelectedColumns}
        />
      )}

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
