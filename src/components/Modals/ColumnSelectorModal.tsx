import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { StyledDialog } from "./../../styles/styles";

interface ColumnSelectorModalProps {
  open: boolean;
  onClose: () => void;
  columns: string[];
  selectedColumns: string[];
  onColumnChange: (selected: string[]) => void;
}

const ColumnSelectorModal: React.FC<ColumnSelectorModalProps> = ({
  open,
  onClose,
  columns,
  selectedColumns,
  onColumnChange,
}) => {
  const handleCheckboxChange = (column: string) => {
    const newSelectedColumns = selectedColumns.includes(column)
      ? selectedColumns.filter((col) => col !== column)
      : [...selectedColumns, column];
    onColumnChange(newSelectedColumns);
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle>Seleccionar Columnas</DialogTitle>
      <DialogContent>
        <FormGroup>
          {columns.map((column) => (
            <FormControlLabel
              key={column}
              control={
                <Checkbox
                  checked={selectedColumns.includes(column)}
                  onChange={() => handleCheckboxChange(column)}
                />
              }
              label={column}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="success">
          Aceptar
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ColumnSelectorModal;
