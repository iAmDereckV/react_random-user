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
import { User } from "./../UserModel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface UserTableProps {
  data: User[];
  deleteUser: (email: string) => void;
}

const UserTable = ({ data, deleteUser }: UserTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Picture</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user: any) => (
            <TableRow
              key={user.email}
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
                  onClick={() => {
                    // getPersonsId(row.id);
                    // setOpenModalEdit(true);
                  }}
                >
                  <EditIcon />
                </Button>
                <Button
                  onClick={() => {
                    confirm("Desea Borrar") && deleteUser(user.email);
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
