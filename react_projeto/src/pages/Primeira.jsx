import React, { useMemo, useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useTable, useGlobalFilter, useFilters } from "react-table";
import LinkSegunda from "../components/LinkSegunda";
import LinkTerceira from "../components/LinkTerceira";
import LinkQuarta from "../components/LinkQuarta";

// Dados fictícios de estações meteorológicas
const data = [
    { estacao: "Estação Central", data: "2023-11-01", horario: "09:00", chuva: "Sim" },
    { estacao: "Estação Norte", data: "2023-11-01", horario: "10:30", chuva: "Não" },
    { estacao: "Estação Sul", data: "2023-11-01", horario: "11:15", chuva: "Sim" },
    { estacao: "Estação Leste", data: "2023-11-01", horario: "12:45", chuva: "Não" },
    { estacao: "Estação Oeste", data: "2023-11-01", horario: "13:20", chuva: "Não" },
    { estacao: "Estação A", data: "2023-11-02", horario: "14:10", chuva: "Sim" },
    { estacao: "Estação B", data: "2023-11-02", horario: "15:30", chuva: "Não" },
    { estacao: "Estação C", data: "2023-11-02", horario: "16:45", chuva: "Sim" },
    { estacao: "Estação D", data: "2023-11-02", horario: "17:30", chuva: "Não" },
    { estacao: "Estação E", data: "2023-11-02", horario: "18:15", chuva: "Não" },
    { estacao: "Estação F", data: "2023-11-03", horario: "19:50", chuva: "Sim" },
    { estacao: "Estação G", data: "2023-11-03", horario: "20:30", chuva: "Sim" },
    { estacao: "Estação H", data: "2023-11-03", horario: "21:25", chuva: "Não" },
    { estacao: "Estação I", data: "2023-11-03", horario: "22:15", chuva: "Não" },
    { estacao: "Estação J", data: "2023-11-03", horario: "23:05", chuva: "Sim" },
    { estacao: "Estação K", data: "2023-11-04", horario: "09:00", chuva: "Sim" },
    { estacao: "Estação L", data: "2023-11-04", horario: "10:30", chuva: "Não" },
    { estacao: "Estação M", data: "2023-11-04", horario: "11:15", chuva: "Sim" },
    { estacao: "Estacao N", data: "2023-11-04", horario: "12:45", chuva: "Não" },
    { estacao: "Estação O", data: "2023-11-04", horario: "13:20", chuva: "Não" },
    { estacao: "Estação P", data: "2023-11-05", horario: "14:10", chuva: "Sim" },
    { estacao: "Estação Q", data: "2023-11-05", horario: "15:30", chuva: "Não" },
    { estacao: "Estação R", data: "2023-11-05", horario: "16:45", chuva: "Sim" },
    { estacao: "Estação S", data: "2023-11-05", horario: "17:30", chuva: "Não" },
    { estacao: "Estação T", data: "2023-11-05", horario: "18:15", chuva: "Não" },
    { estacao: "Estação U", data: "2023-11-06", horario: "19:50", chuva: "Sim" },
    { estacao: "Estação V", data: "2023-11-06", horario: "20:30", chuva: "Sim" },
    { estacao: "Estação W", data: "2023-11-06", horario: "21:25", chuva: "Não" },
    { estacao: "Estação X", data: "2023-11-06", horario: "22:15", chuva: "Não" },
    { estacao: "Estação Y", data: "2023-11-06", horario: "23:05", chuva: "Sim" },
    { estacao: "Estação Z", data: "2023-11-07", horario: "09:00", chuva: "Sim" },
    { estacao: "Estação Alpha", data: "2023-11-07", horario: "10:30", chuva: "Não" },
    { estacao: "Estação Beta", data: "2023-11-07", horario: "11:15", chuva: "Sim" },
    { estacao: "Estação Gamma", data: "2023-11-07", horario: "12:45", chuva: "Não" },
    { estacao: "Estação Delta", data: "2023-11-07", horario: "13:20", chuva: "Não" },
    { estacao: "Estação Epsilon", data: "2023-11-08", horario: "14:10", chuva: "Sim" },
    { estacao: "Estação Theta", data: "2023-11-08", horario: "15:30", chuva: "Não" },
    { estacao: "Estação Omega", data: "2023-11-08", horario: "16:45", chuva: "Sim" },
    { estacao: "Estação Sigma", data: "2023-11-08", horario: "17:30", chuva: "Não" },
    { estacao: "Estação Zeta", data: "2023-11-08", horario: "18:15", chuva: "Não" },
    { estacao: "Estação Kappa", data: "2023-11-09", horario: "19:50", chuva: "Sim" },
    { estacao: "Estação Phi", data: "2023-11-09", horario: "20:30", chuva: "Sim" },
    { estacao: "Estação Upsilon", data: "2023-11-09", horario: "21:00", chuva: "Sim"},  
  ];
  
  
  const columns = [
    { Header: "Estação Meteorológica", accessor: "estacao" },
    { Header: "Data", accessor: "data" },
    { Header: "Horário de Leitura", accessor: "horario" },
    { Header: "Chuva", accessor: "chuva" },
  ];
  

const Primeira = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allFilteredData, setAllFilteredData] = useState(data);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const applyDateFilter = () => {
    if (startDate && endDate) {
      const filteredData = data.filter((row) => {
        const rowDate = new Date(row.data);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return rowDate >= start && rowDate <= end;
      });

      setAllFilteredData(filteredData);
    }
  };

  const resetFilters = () => {
    setStartDate(""); // Limpar data de início
    setEndDate("");   // Limpar data de término
    setAllFilteredData(data); // Restaurar os dados originais
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: allFilteredData, // Use allFilteredData aqui em vez de "data"
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div>
      <header>
        <div id="barra_escolhas">
          <LinkSegunda />
          <LinkTerceira />
          <LinkQuarta />
        </div>
      </header>

      <h1 id="nome_pag">Histórico de Dados - Tabela</h1>

      <div>
      <Grid container spacing={2}>
      <Grid item xs={1.2}>
      <TextField id="outlined-basic" label="Filtrar..." variant="outlined" value={globalFilter || ""} onChange={(e) => setGlobalFilter(e.target.value)}/>
      </Grid>
      <Grid item xs={1}>
        <label>Data de Início: </label>
        </Grid>
        <Grid item xs={1}>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        </Grid>
        <Grid item xs={1}>
        <label>Data de Término: </label>
        </Grid>
        <Grid item xs={1}>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        </Grid>
        <Grid item xs={1.3}>
        <Button variant="contained" onClick={applyDateFilter}>Filtrar por Data</Button>
        </Grid>
        <Grid item xs={1.5}>
        <Button variant="contained" onClick={resetFilters}>Limpar Filtros</Button>
        </Grid>
        </Grid>
      </div>
      <table {...getTableProps()} style={{ width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Primeira;
