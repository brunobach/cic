import React, { useState, useEffect } from 'react';

import { Container, ContentBook, ContentBrowse, TopPublishingHouse, PublishingHouse } from './styles';
import {url} from '../../data/url'
import BookBox from '../BookBox'
import PublisherTable from '../PublisherTable'
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

interface publisher {
    _id: string;
    name: string;
}

const BookView: React.FC = () => {

    const [info, setInfo] = useState([0, 0, 0])
    const [topPublisher, setTopPublisher] = useState<string[]>([])
    const [booksPublisher, setBooksPubliser] = useState({})
    const [tableData, setTableData] = useState([])
    const [viewTable, setViewTable] = useState(false)
    const [recentView, setRecentView] = useState<string[]>([])
    const [idRealData, setIdRealData] = useState([])
    const [booksData, setBooksData] = useState<book[]>([])
    const [publisherData, setPublisherData] = useState<publisher[]>([])
    useEffect(() => {
        async function loadData() {
            const response = await api.get("books.json")       
            setBooksData(response.data) 
        }
        loadData();
    }, [])

    useEffect(()=> {
        async function loadPublisher() {
            const responsePublisher = await api.get("publishers.json")
            setPublisherData(responsePublisher.data)
        }
        loadPublisher();
    }, [])


    useEffect(() => {
        const localData = localStorage.getItem('BooksViews')
        let splitedData
        if(localData != null){
           splitedData = localData.split(',')
           setRecentView(splitedData.reverse())
        

        let idData: any = []
        booksData.filter((book, index) => {
            splitedData.map((val) => {
                if(index == val){
                    return idData.push(book._id)                 
                } 
            })    
        })
        setIdRealData(idData.reverse())
    }
    }, [booksData])

    function randomNumber() {
        const maxNumber: number = 45
        const minNumber: number = 1
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    }

    useEffect(() => {
        function handleInfos() {
            const inf = [randomNumber(), randomNumber(), randomNumber()]
            setInfo(inf)
        }
        handleInfos()
    }, [])

    useEffect(() => {
        let counts = booksData.reduce((prev, curr) => {
            let name = curr.publisher

            if (!prev.hasOwnProperty(name)) {
                // @ts-ignore 
                prev[name] = 0
            }
            // @ts-ignore
            prev[name]++
            return prev
        }, {})
        let objectSort = Object.keys(counts).sort((a, b) => {
            // @ts-ignore 
            return counts[b] - counts[a]
        })

        let topResult = objectSort.filter((val, index) => {
            if (index <= 4) return val
        })
        setBooksPubliser(counts)
        setTopPublisher(topResult)
    }, [booksData])


    useEffect(() => {
        // @ts-ignore 
        const grouped = booksData.reduce((a, e) => {
            // @ts-ignore 
            if (!a[e.publisher]) {
                // @ts-ignore 
                a[e.publisher] = [];
            }
            // @ts-ignore 
            a[e.publisher].push(e.avgRatings);
            // @ts-ignore 
            return a;
        }, {});

        const avgs = Object.fromEntries(
            Object.entries(grouped).map(([k, v]) => [

                // @ts-ignore 
                k, v.reduce((a, e) => a + e, 0) / v.length

            ])
        );
        let publisherTops: any = []
        Object.values(avgs).map((val, index) => {
            let bks: any = []
            booksData.filter((book) => {
                if (Number(book.publisher) === index) {
                    return bks.push(`${book.title} `)
                }

            })
            let item = {
                id: index,
                valor: val.toFixed(2),
                name: publisherData[index].name,
                books: bks
            }

            publisherTops.push(item)
        })
        setTableData(publisherTops)
    }, [booksData])
    function handleClickView(bol : boolean) {
        setViewTable(bol)
    }
    
    return (
        <Container>
            
            {booksData.length > 1 ? <>
            <p className="ml-5">Recomendacoes</p>
            <ContentBook>
                <BookBox title={booksData[info[0]].title} id={Number(booksData[info[0]]._id)} url={url[info[0]]} stars={booksData[info[0]].avgRatings || 5} author={booksData[info[0]].authors} publishing={publisherData[Number(booksData[info[0]].publisher)].name} variant="box"></BookBox>
                <BookBox title={booksData[info[1]].title} id={Number(booksData[info[1]]._id)} url={url[info[1]]} stars={booksData[info[1]].avgRatings || 5} author={booksData[info[1]].authors} publishing={publisherData[Number(booksData[info[1]].publisher)].name} variant="box"></BookBox>
                <BookBox title={booksData[info[2]].title} id={Number(booksData[info[2]]._id)} url={url[info[2]]} stars={booksData[info[2]].avgRatings || 5} author={booksData[info[2]].authors} publishing={publisherData[Number(booksData[info[2]].publisher)].name} variant="box"></BookBox>
            </ContentBook>
            <div className="ml-5 btn-group">
                {viewTable ? <p>Todas Editoras</p> : <p>Recentes</p> }
            </div>

            {viewTable ?  <> <button onClick={() => handleClickView(false)}> 
                    <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z" fill="#FFE7AA"></path></svg>
                    </button>
                    <PublisherTable data={tableData} /> </> :

                <ContentBrowse>

                    {recentView.length > 1 ?  recentView.map((recent, index)=> (
                        <BookBox title={booksData[Number(recent)].title} url={url[recent]} id={idRealData[index]} stars={booksData[Number(recent)].avgRatings || 5} author={booksData[Number(recent)].authors} publishing={publisherData[Number(booksData[recent].publisher)].name} variant="none"></BookBox>
                    )) : <p className="mx-auto">Que Pena... Você ainda nao tem recentes</p>}
                    
                    <TopPublishingHouse>
                        <p>Top Editoras</p>

                        {
                            topPublisher.map((val) => (
                                <PublishingHouse> <p>{publisherData[Number(val)].name} com {booksPublisher[Number(val)]} livros </p></PublishingHouse>
                            ))
                        }

                    </TopPublishingHouse>
                    <button onClick={() => handleClickView(true)}> 
                    <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z" fill="#FFE7AA"></path></svg>
                    </button>
                </ContentBrowse>

            } </> : <div className="ml-5 spinner-grow text-success"> </div>}
            
        </Container>
    );
}

export default BookView;