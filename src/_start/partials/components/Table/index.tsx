import React, { FC, HTMLAttributes, ReactElement, useMemo } from "react";

// common
import { generateArrayOfNumbers } from "../../../helpers";

type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
type TableCellProps = HTMLAttributes<HTMLTableCellElement>;

interface Column {
  title: string;
  cells: ReactElement[];
}

interface Props {
  id: string;
  columns: Column[];
  emptyMessage: string;
  title?: string;
  footer?: ReactElement;
  tableRowProps?: TableRowProps;
  tableHeaderProps?: TableCellProps;
  cardClassName?: string;
  connectionLength?: number;
  hideButton?: boolean;
  hideCount?: boolean;
}

// TODO: Add use of react tables to manage table by hooks
const Table: FC<Props> = ({
  columns,
  id,
  title = "",
  emptyMessage,
  tableRowProps,
  tableHeaderProps,
  cardClassName = "",
  connectionLength = 0,
  hideButton,
  hideCount
}) => {
  // constants
  const cellsCount = useMemo(() => columns?.[0]?.cells?.length ?? 0, [columns]);
  const rows = useMemo(
    () =>
      generateArrayOfNumbers(cellsCount)?.reduce<ReactElement[][]>(
        (acc, _, index) => {
          const row = columns.map((column) => column.cells[index]);

          return [...acc, row];
        },
        []
      ),
    [cellsCount, columns]
  );
  const hasRows = Boolean(rows.length);
  const entityCount = connectionLength || rows.length;

  return (
    <div className={`card ${cardClassName}`}>
      {/* begin::Header */}
      {
        !hideCount &&
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            {title ? (
              <span className="card-label fw-bolder text-dark">{title}</span>
            ) : null}
            <span className="text-muted mt-3 fw-bold fs-7">
              {`${entityCount} elementos registrados`}
            </span>
          </h3>
          {
            !hideButton &&
            <div className="card-toolbar">
              <a className="btn btn-primary fw-bolder fs-7 disabled" href="#">
                Subir Archivo
              </a>
            </div>  
          }
        </div>
      }
      {/* end::Header*/}
      <div className="card-body py-0">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr className="text-start text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1">
                {columns?.map(({ title }, index) => (
                  <th key={`table-header-${id}-${index}`} {...tableHeaderProps}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows?.map((row, index) => (
                <tr key={`table-row-${id}-${index}`} {...tableRowProps}>
                  {row.map((content, index) => (
                    <td key={`table-cell-${id}-${index}`}>{content}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {!hasRows ? (
            <div className="d-flex flex-center flex-row">
              <span>{emptyMessage}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Table;
