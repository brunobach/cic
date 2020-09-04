import React, {useState, useEffect}  from 'react';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import  BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, {numberFilter, dateFilter, Comparator, textFilter} from 'react-bootstrap-table2-filter'
import { useParams, useHistory } from 'react-router-dom';

import { Container, BookViewer, BookContent, BookAll, BookInfo } from './styles';
import Header from '../../components/Header'

import publisher from '../../data/publisher'
import {url} from '../../data/url'
import BookBox from '../../components/BookBox'

import api from '../../services/api'

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
/* eslint-disable */
const BookPage: React.FC = () => {
    const history = useHistory()
    const { id } = useParams()
    const [book, setBook] = useState<book[]>([])
    const [booksData, setBooksData] = useState<book[]>([])
    const [idReal, setIdReal] = useState(0)

    useEffect(() => {
        async function loadData() {
            const response = await api.get("books.json")
            setBooksData(response.data); 
        }
        loadData();
    }, [])

    useEffect(() => {
        
        const localData = localStorage.getItem('BooksViews')
        let idData
        booksData.filter((book, index) => {
            if(book._id === id){
                setIdReal(index)
                return idData = index
            }  
        })
        if(localData === null && idData !== undefined){
            console.log('Aqui')
            localStorage.setItem('BooksViews', idData)
        }else if(localData && localData.length < 30 && idData !== undefined) {
            const splitLength = localData?.split(',')
            if(splitLength.length < 5){
                console.log("lengt")
                localStorage.setItem('BooksViews', `${localData},${idData}`)
            }else {
                console.log("Aqui")
                const splitLengthRemove = localData.split(',')
                splitLengthRemove.shift()
                localStorage.setItem('BooksViews', `${splitLengthRemove},${idData}`)
            }
            
        }

        const result = booksData.filter((val) => val._id === id)
        setBook(result)
            
    }, [booksData, id])

    
    const tableRowEvents = {
        onClick: (e: any, row: book, rowIndex: any) => {
            history.push(`/book/${row._id}`)
        },
        
      }

  return (
    <Container>
        <Header />
        {booksData.length > 1 ? <BookViewer>
            {id === 'all' ? <BootstrapTable classes="tb-bootstrap w-75 center mx-auto table-borderless table-dark shadow p-3" bootstrap4 striped hover condensed rowEvents={tableRowEvents} keyField='_id' data={booksData} columns={columns} filter={filterFactory()} /> : book.map((val) => (
                <BookContent>
                    <BookInfo>
                    <BookBox title={book[0].title} date={book[0].publicationDate} numRatings={book[0].numRatings} numPages={book[0].numPages} url={url[idReal]} id={id} stars={book[0].avgRatings} author={book[0].authors} publishing={publisher[Number(book[0].publisher)].name} variant="Page" ></BookBox> 
                    </BookInfo>
                    <BookAll onClick={() => history.push(`/book/all`)} > Ver todos os livros </BookAll>
                </BookContent>
            ))}
        </BookViewer> : <div className="ml-5 spinner-grow text-success"> </div>}
    </Container>
);
}

export default BookPage;