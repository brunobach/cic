import React, {useState, useEffect} from 'react';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import  BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, {numberFilter} from 'react-bootstrap-table2-filter'

 import { Container } from './styles';

interface IData {
  id: number,
  valor: number,
  name: string,
  books: []
}

interface Props {
  data: any
}

const PublisherTable: React.FC<Props> = ({data}) => {

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
    sort: true
}, {
    dataField: 'valor',
    text: 'Média de Avaliaçao',
    sort: true
}, {
    dataField: 'books',
    text: 'Media de avaliaçao',
    sort: true
    
}]
const defaultSorted: any = [{
  dataField: 'books',
  order: 'desc'
}];



  return (
    <Container>
        <BootstrapTable classes="w-75 bordered mx-auto table-borderless table-dark shadow-lg p-3" defaultSorted={ defaultSorted }  bootstrap4 striped hover condensed keyField='id' data={tableData} columns={columns} />
    </Container>
  );
}

export default PublisherTable;