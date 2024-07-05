import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 'none',
      borderRadius: '0 !important',
      '--DataGrid-rowBorderColor': theme.palette.info.main,
    }),
    row: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    cell: ({ theme }) => ({
      padding: 0,
      color: theme.palette.primary.darker,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 500,

      '&:hover': {
        cursor: 'pointer',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    columnHeader: {
      border: 0,
      padding: 0,
      height: '3rem !important',
      '&:focus-within': {
        outline: 'none !important',
      },
    },
    columnHeaderTitle: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: `${theme.typography.caption.fontWeight} !important`,
    }),
  },
};

export default DataGrid;
