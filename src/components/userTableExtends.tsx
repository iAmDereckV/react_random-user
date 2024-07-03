import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { User } from "../UserModel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {selectedColumns.map((column) => (
              <TableCell key={column} align="center">
                {column}
              </TableCell>
            ))}
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user: User) => (
            <TableRow
              key={user.login.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {selectedColumns.map((column) => (
                <TableCell key={column} align="left">
                  {columnMap[column](user)}
                </TableCell>
              ))}
              <TableCell align="center">
                <Button onClick={() => Editar(user)}>
                  <EditIcon />
                </Button>
                <Button
                  onClick={() => {
                    confirm("Desea Borrar") && deleteUser(user.login.uuid);
                  }}
                >
                  <DeleteIcon color="primary" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
