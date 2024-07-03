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
}

const userTableCompact = ({ data, deleteUser, Editar }: UserTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Pais</TableCell>
            <TableCell align="center">Correo</TableCell>
            <TableCell align="center">Foto</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user: any) => (
            <TableRow
              key={user.login.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
                <Button
                  // variant="contained"
                  // color="default"
                  onClick={() => Editar(user)}
                >
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default userTableCompact;
