import React, {useState, useEffect} from 'react';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import  BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, {numberFilter, textFilter} from 'react-bootstrap-table2-filter'


import { Container } from './styles';


interface Props {
  data: any
}

const PublisherTable: React.FC<Props> = ({data}) => {
/* eslint-disable */
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    console.log(data)
    setTableData(data);
  }, [])

  const columns = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'name',
    text: 'Nome da Editora',
    filter: textFilter(),
    sort: true
}, {
    dataField: 'valor',
    text: 'Média de Avaliaçao',
    filter: numberFilter({defaultValue: {number: 4}}),
    sort: true
}, {
    dataField: 'books',
    text: 'Livros Publicados',
    filter: textFilter(),
    sort: true
    
}]

const defaultSorted: any = [{
  dataField: 'valor',
  order: 'desc'
}];



  return (
    <Container>
        <BootstrapTable classes="shadow-lg table-dark" filter={filterFactory()} defaultSorted={ defaultSorted }  bootstrap4 striped hover condensed keyField='id' data={tableData} columns={columns} />
    </Container>
  );
}

export default PublisherTable;