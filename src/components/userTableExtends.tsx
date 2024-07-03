import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StyledTableCell, StyledTableRow } from "./styles";
import { User } from "../UserModel";

interface UserTableProps {
  data: User[];
  deleteUser: (email: string) => void;
  Editar: (data: User) => void;
  selectedColumns: string[];
}

const UserTable = ({
  data,
  deleteUser,
  Editar,
  selectedColumns,
}: UserTableProps) => {
  const columnMap: { [key: string]: (user: User) => React.ReactNode } = {
    Genero: (user) => user.gender,
    Titulo: (user) => user.name.title,
    Nombre: (user) => `${user.name.first} ${user.name.last}`,
    Pais: (user) => user.location.country,
    Estado: (user) => user.location.state,
    Ciudad: (user) => user.location.city,
    Calle: (user) =>
      `${user.location.street.name} - ${user.location.street.number}`,
    "Codigo Postal": (user) => user.location.postcode,
    Correo: (user) => user.email,
    Telefono: (user) => user.phone,
    Celular: (user) => user.cell,
    Foto: (user) => (
      <img src={user.picture.medium} alt="Profile" width="50" height="50" />
    ),
  };

  // Estado para controlar la página actual y cantidad de filas por página
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Cantidad de filas por página

  // Calcula el índice de inicio y fin de los datos mostrados en la página actual
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Datos a mostrar en la página actual
  const paginatedData = data.slice(startIndex, endIndex);

  // Funciones para cambiar la página y la cantidad de filas por página
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Volver a la primera página cuando se cambia la cantidad de filas por página
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {selectedColumns.map((column) => (
              <StyledTableCell key={column} align="center">
                {column}
              </StyledTableCell>
            ))}
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((user: User) => (
            <StyledTableRow key={user.login.uuid}>
              {selectedColumns.map((column) => (
                <TableCell key={column} align="left">
                  {columnMap[column](user)}
                </TableCell>
              ))}
              <TableCell align="center">
                <Button onClick={() => Editar(user)}>
                  <EditIcon color="warning" />
                </Button>
                <Button
                  onClick={() => {
                    if (window.confirm("¿Está seguro que desea borrar?")) {
                      deleteUser(user.login.uuid);
                    }
                  }}
                >
                  <DeleteIcon color="error" />
                </Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Opciones de cantidad de filas por página
        component="div"
        count={data.length} // Total de elementos en la lista completa
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página"
      />
    </TableContainer>
  );
};

export default UserTable;
