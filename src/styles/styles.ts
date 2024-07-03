import { styled } from "@mui/material/styles";
import { TableRow, TableCell, ToggleButtonGroup, Dialog } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  fontWeight: "bold",
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:hover": {
    backgroundColor: "#E3F2FD",
  },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    marginBottom: theme.spacing(2), // Ejemplo de espaciado inferior
    "& .MuiToggleButton-root": {
      borderRadius: 0, // Ejemplo de borde sin redondear
      padding: "8px 16px", // Ejemplo de ajuste de espaciado interno
      textTransform: "uppercase", // Ejemplo de transformación de texto
    },
    "& .Mui-selected": {
      backgroundColor: theme.palette.success.main, // Ejemplo de color de fondo cuando seleccionado
      color: theme.palette.success.contrastText, // Ejemplo de color de texto cuando seleccionado
    },
  })
);

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    backgroundColor: "#6d1b7b", // Ejemplo de color de fondo para el título del diálogo
    color: theme.palette.success.contrastText, // Ejemplo de color de texto para el título del diálogo
  },
  "& .MuiDialogContent-root": {
    paddingTop: theme.spacing(2), // Ejemplo de espacio superior en el contenido del diálogo
  },
  "& .MuiDialogActions-root": {
    justifyContent: "flex-end", // Ejemplo de alineación de acciones del diálogo
    padding: theme.spacing(2), // Ejemplo de espacio alrededor de las acciones del diálogo
  },
  "& .MuiFormGroup-root": {
    marginTop: theme.spacing(2), // Ejemplo de espacio superior para el grupo de formularios
  },
  "& .MuiFormControlLabel-root": {
    marginBottom: theme.spacing(1), // Ejemplo de espacio inferior para etiquetas de formularios
  },
  "& .MuiCheckbox-root": {
    color: "#6d1b7b", // Ejemplo de color de borde del checkbox
  },
}));
