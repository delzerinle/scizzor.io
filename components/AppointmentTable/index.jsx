import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const AppointmentTable = ({ data, columns, className = '' }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table
      className={`mx-2 table-fixed w-full mt-6 border border-alt-2 rounded shadow-custom-light ${className}`}
      {...getTableProps()}
    >
      <thead className="bg-gray-100">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              const cellWidth = column.Header === '' ? 'w-1/2' : 'w-1/4';
              return (
                <th
                  className={`px-4 py-3 text-sm text-secondary font-medium text-left ${cellWidth}`}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="border-t border-alt-2" {...row.getRowProps()}>
              {row.cells.map(cell => {
                const { column } = cell;
                const textAlignment =
                  column.Header === '' ? 'text-right' : 'text-left';

                return (
                  <td
                    className={`px-4 py-3 text-sm font-light ${textAlignment}`}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

AppointmentTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AppointmentTable;
