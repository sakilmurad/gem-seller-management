import React, { useMemo, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, IconButton } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { UserAuth } from "../context/AuthContext";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
];

const BidTable = () => {
  const { user, getBids } = UserAuth();

  useEffect(() => {
    getBids();
  }, [])
  

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "Bid No",
      },
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "Due on",
      },
      {
        accessorKey: "name.lastName",
        header: "Item Name",
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Qty",
      },
      {
        accessorKey: "city",
        header: "Organization Name",
      },
      {
        accessorKey: "state",
        header: "Remarks",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableStickyHeader
      muiTablePaginationProps={{
        rowsPerPageOptions: [10, 20, 50],
        showFirstButton: false,
        showLastButton: false,
      }}
      renderTopToolbarCustomActions={({ table }) => (
        <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
          <Fab color="primary" size="small" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      )}
      muiTableContainerProps={{ sx: { maxHeight: 500 } }}
    />
  );
};

export default BidTable;
