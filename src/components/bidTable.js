import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const BidTable = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'Bid No',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Item Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Qty',
      },
      {
        accessorKey: 'city',
        header: 'Organization Name',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data}
  enableStickyHeader
  muiTablePaginationProps={{
    rowsPerPageOptions: [10, 20, 50],
    showFirstButton: false,
    showLastButton: false,
  }}
  renderTopToolbarCustomActions={({ table }) => (<Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
    <Fab color="primary" size="small" aria-label="add">
        <AddIcon />
      </Fab>
  </Box>)}/>;
};

export default BidTable;
