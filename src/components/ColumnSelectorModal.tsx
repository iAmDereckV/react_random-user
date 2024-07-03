import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

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
    <Dialog open={open} onClose={onClose}>
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
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={onClose} color="primary">
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ColumnSelectorModal;
