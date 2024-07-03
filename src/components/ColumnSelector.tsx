import React from "react";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";

interface ColumnSelectorProps {
  columns: string[];
  selectedColumns: string[];
  onColumnChange: (selected: string[]) => void;
}

const ColumnSelector: React.FC<ColumnSelectorProps> = ({
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
  );
};

export default ColumnSelector;
