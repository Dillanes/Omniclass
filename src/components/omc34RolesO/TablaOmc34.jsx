import React,{useMemo} from 'react'
import GlobalFilter from '../GlobalFilter'
import {
    useTable,
    usePagination,
    useGlobalFilter,
    useSortBy,
    useExpanded
  } from "react-table";

function TablaOmc34(props) {
    

      //ESTILOS CSS PARA SELECCIONAR FILA
  function cleanTr() {
    document.querySelectorAll(".row-selected").forEach(function (index) {
      index.classList.remove("row-selected");
    });
  }

  const selectRow = (e) => {
    const selectRowTag = e.currentTarget;
    if (selectRowTag.classList.contains("row-selected")) {
    } else {
      cleanTr();
      selectRowTag.classList.add("row-selected");
    }
  };

    const data = useMemo(()=>[...props.datamap],[props.datamap])

   const columns = useMemo(()=>[
    {
        Header: "No",
        accessor: "",
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
        style: {
          textAlign: "center",
        },
      },
        {
            Header:'Codigo',
            accessor:'Codigo',
            style:{
                minWidth:'100px'
            }
        },
        {
            Header:'Descripción en Inglés',
            accessor:'descriEng'
        },{
            Header:'Descripción en Español',
            accessor:'descriSpa'
        },{
            Header:'Definición en Inglés',
            accessor:'definicionEng'
        },{
            Header:'Definición en Español',
            accessor:'definicionSpa'
        }
   ],[])

   
   const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Editar",
        Cell: ({ row }) => (
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginTop: "20%" }}
            onClick={() => props.nextNivel(row.values,props.nivel)}
          >
            {" "}
            Nivel{props.nivel+1}
          </button>
        ),
      },
    ]);
  };


   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    prepareRow,
    state: { pageIndex, pageSize },
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    tableHooks
  );

  const { globalFilter } = state;


  return (
    <div className="containerTable">
      <div className="headerTable">
        <div className="col-md-7 col-sm-5">
          <h2 className="mt-3 textTable">OMC34 Nivel 1</h2>
        </div>
        <div className="col-md-5 col-sm-7">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div className="table-responsive shadow-lg">
        <table {...getTableProps()} className="table table-hover mt-1">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    style={{ color: "black" }}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa-solid fa-angle-down"></i>
                      ) : (
                        <i className="fa-solid fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr
                  style={{ fontSize: "12px", fontFamily: "arial" }}
                  {...row.getRowProps()}
                  onClick={(e) => selectRow(e)
                  }
                >
                  {row.cells.map((cell, idx) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cell.column.className,
                            style: cell.column.style,
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="footerTable">
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={() => previousPage()}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => nextPage()}
        >
          Next
        </button>
        <br />
        <span>
          <strong>
            Página {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  )
}

export default TablaOmc34
