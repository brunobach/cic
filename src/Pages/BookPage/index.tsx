import React, {useState, useEffect}  from 'react';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import  BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, {numberFilter, dateFilter, Comparator, textFilter} from 'react-bootstrap-table2-filter'
import { useParams, useHistory } from 'react-router-dom';

import { Container, BookViewer } from './styles';
import Header from '../../components/Header'

import data from '../../data/data'


interface book {
    _id: string;
    title: string;
    authors: string;
    avgRatings: number;
    numRatings: number;
    numPages: number;
    publicationDate: string;
    publisher: string;
}

const columns = [{
    dataField: '_id',
    text: 'ID',
    sort: true
}, {
    dataField: 'title',
    text: 'Nome',
    sort: true, 
    filter: textFilter()
}, {
    dataField: 'authors',
    text: 'Autor (a)',
    filter: textFilter()
}, {
    dataField: 'avgRatings',
    text: 'Media de avaliaçao',
    sort: true,
    filter: numberFilter({defaultValue: {number: 4}})
}, {
    dataField: 'publicationDate',
    text: 'Data de Publicaçao',
    sort: true,
    filter: dateFilter({ defaultValue: {date: new Date(2020, 0, 1), comparator: Comparator.LT}})
}]

const BookPage: React.FC = () => {
    const history = useHistory()
    const { id } = useParams()
    const [book, setBook] = useState<book[]>([])
    const [dataTable, setDatable] = useState<book[]>([])
    useEffect(() => {
        const localData = localStorage.getItem('BooksViews')
        
        if(localData === null){
            localStorage.setItem('BooksViews', [id].toString())
        }else if(localData.length < 14) {
            const splitLength = localData.split(',')
            if(splitLength.length < 5){
                localStorage.setItem('BooksViews', `${localData},${id}`)
            }
            
        }else {
            const splitLengthRemove = localData.split(',')
            splitLengthRemove.shift()
            localStorage.setItem('BooksViews', `${splitLengthRemove},${id}`)
        }

        const result = data.filter((val) => val._id === id)
        setBook(result)
        setDatable(data)
        
            
    }, [id])
    
    const tableRowEvents = {
        onClick: (e: any, row: book, rowIndex: any) => {
            history.push(`/book/${row._id}`)
        },
        
      }

  return (
    <Container>
        <Header />
        <BookViewer>
            {id === 'all' ? <BootstrapTable classes="tb-bootstrap w-75 center mx-auto table-borderless table-dark shadow p-3" bootstrap4 striped hover condensed rowEvents={tableRowEvents} keyField='_id' data={dataTable} columns={columns} filter={filterFactory()} /> : book.map((val) => (
                <p key={val._id}>{val.title}</p>
            ))}
        </BookViewer>
    </Container>
);
}

export default BookPage;