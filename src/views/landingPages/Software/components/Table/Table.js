import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";

function Table({ title, summaryData, headersKey, headersValue }) {
  const columnsPhone = [
    { field: "key", headerName: headersKey, minWidth: 300 },
    {
      field: "value",
      headerName: headersValue,
      editable: false,
    },
  ];
  const columns = [
    { field: "key", headerName: headersKey, minWidth: 400 },
    {
      field: "value",
      headerName: headersValue,
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
          width: "100%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
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
        sx={{ display: { xs: "none", md: "flex" } }}
      />
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columnsPhone}
        pageSize={5}
        headerHeight={0}
        sx={{ display: { xs: "flex", md: "none" } }}
      />
    </Box>
  );
}

export default Table;
