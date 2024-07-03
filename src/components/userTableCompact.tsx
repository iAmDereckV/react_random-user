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
}

const UserTableCompact = ({ data, deleteUser, Editar }: UserTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Cantidad de filas por página

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Pais</StyledTableCell>
            <StyledTableCell align="center">Correo</StyledTableCell>
            <StyledTableCell align="center">Foto</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((user: any) => (
            <StyledTableRow key={user.login.uuid}>
              <TableCell align="left" component="th" scope="row">
                {user.name.first} {user.name.last}
              </TableCell>
              <TableCell align="left">{user.location.country}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="center">
                <img
                  src={user.picture.medium}
                  alt="Profile"
                  width="50"
                  height="50"
                />
              </TableCell>
              <TableCell align="center">
                <Button onClick={() => Editar(user)}>
                  <EditIcon color="warning" />
                </Button>
                <Button
                  onClick={() => {
                    confirm("Desea Borrar") && deleteUser(user.login.uuid);
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

export default UserTableCompact;
