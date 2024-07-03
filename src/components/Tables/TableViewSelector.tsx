import React from "react";
import { ToggleButton } from "@mui/material";
import { StyledToggleButtonGroup } from "./../../styles/styles";

interface TableViewSelectorProps {
  view: "compact" | "extended";
  onViewChange: (view: "compact" | "extended") => void;
}

const TableViewSelector: React.FC<TableViewSelectorProps> = ({
  view,
  onViewChange,
}) => (
  <StyledToggleButtonGroup
    value={view}
    exclusive
    onChange={(_, newView) => newView && onViewChange(newView)}
  >
    <ToggleButton value="compact" color="success">
      Vista Compacta
    </ToggleButton>
    <ToggleButton value="extended" color="success">
      Vista Extendida
    </ToggleButton>
  </StyledToggleButtonGroup>
);

export default TableViewSelector;
