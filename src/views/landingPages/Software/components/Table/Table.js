import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";

function Table({ title, summaryData, headersKey, headersValue }) {
  const theme = useTheme();
  const columns = [
    { field: "key", headerName: headersKey, width: 600 },
    {
      field: "value",
      headerName: headersValue,
      width: 300,
      editable: false,
    },
  ];

  const rows = Object.entries(summaryData).map(([key, value]) => ({
    id: uuidv4(),
    key,
    value,
  }));

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: "center" }}>
        <h2>{title}</h2>
      </Box>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={5}
        headerHeight={0}
      />
    </Box>
  );
}

export default Table;
