import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface TableViewSelectorProps {
  view: "compact" | "extended";
  onViewChange: (view: "compact" | "extended") => void;
}

const TableViewSelector: React.FC<TableViewSelectorProps> = ({
  view,
  onViewChange,
}) => (
  <ToggleButtonGroup
    value={view}
    exclusive
    onChange={(_, newView) => newView && onViewChange(newView)}
  >
    <ToggleButton value="compact">Vista Compacta</ToggleButton>
    <ToggleButton value="extended">Vista Extendida</ToggleButton>
  </ToggleButtonGroup>
);

export default TableViewSelector;
