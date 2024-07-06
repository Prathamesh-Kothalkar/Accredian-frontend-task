import React from 'react';
import { styled } from '@mui/system';
import TablePagination from '@mui/material/TablePagination';
import Refer from './Refer';

export default function Courses() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Sample data
  const rows = [
    createData('Professional Certificate in DSA', 7000, 9000),
    createData('Advanced Certificate in AI', 8000, 10000),
    createData('Certificate in Web Development', 6000, 8000),
    createData('Certificate in Data Science', 7500, 9500),
    createData('Certificate in Cloud Computing', 7800, 9800),
    createData('Certificate in Cybersecurity', 7900, 9900),
    createData('Certificate in Blockchain', 7600, 9600),
  ];

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mt-5">
      <div>
        <p className="text-center text-xl font-bold">
          What are the <span className="text-blue-500">Referral Benefits ?</span>
        </p>
      </div>
      <div className='flex justify-center'>
        <Root sx={{ maxWidth: '100%', width: 500 }}>
          <table aria-label="custom pagination table" className="mt-4">
            <thead>
              <tr>
                <th>Programs</th>
                <th>Referrer Bonus</th>
                <th>Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td style={{ width: 160 }} align="right">
                    {row.calories}
                  </td>
                  <td style={{ width: 160 }} align="right">
                    {row.fat}
                  </td>
                </tr>
              ))}
              {emptyRows > 0 && (
                <tr style={{ height: 41 * emptyRows }}>
                  <td colSpan={3} aria-hidden />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <CustomTablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  showFirstButton
                  showLastButton
                />
              </tr>
            </tfoot>
          </table>
        </Root>
      </div>
      <div className="flex justify-center mt-3">
        <Refer/>
      </div>
    </div>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${grey[200]};
    border-radius: 2px;
    text-align: left;
    padding: 12px;
  }

  th {
    background-color: #7facfa;
    color: #0542ab;
  }
`,
);

const CustomTablePagination = styled(TablePagination)`
  & .MuiToolbar-root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePagination-selectLabel {
    margin: 0;
  }

  & .MuiTablePagination-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePagination-spacer {
    display: none;
  }

  & .MuiTablePagination-actions {
    display: flex;
    gap: 0.25rem;
  }
`;
