import React, { useState, useEffect } from 'react';

import { Container, ContentBook, ContentBrowse, TopPublishingHouse, PublishingHouse } from './styles';
import data from '../../data/data'
import publisher from '../../data/publisher'
import BookBox from '../BookBox'
import PublisherTable from '../PublisherTable'

const BookView: React.FC = () => {

    const [info, setInfo] = useState([0, 0, 0])
    const [topPublisher, setTopPublisher] = useState<string[]>([])
    const [tableData, setTableData] = useState([])
    const [viewTable, setViewTable] = useState(false)


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
        let counts = data.reduce((prev, curr) => {
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

        setTopPublisher(topResult)
    }, [])


    useEffect(() => {
        // @ts-ignore 
        const grouped = data.reduce((a, e) => {
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
            data.filter((book) => {
                if (Number(book.publisher) === index) {
                    return bks.push(`${book.title} `)
                }

            })
            let item = {
                id: index,
                valor: val.toFixed(2),
                name: publisher[index].name,
                books: bks
            }

            publisherTops.push(item)
        })
        setTableData(publisherTops)
    }, [])
    const tableRowEvents = {
        onClick: (e: any, row: any, rowIndex: any) => {
            console.log(`clicked on row with index: ${rowIndex}`);
        },
        onMouseEnter: (e: any, row: any, rowIndex: any) => {
            console.log(`enter on row with index: ${rowIndex}`);
        }
    }
    function handleClickView(bol : boolean) {
        setViewTable(bol)
    }
    return (
        <Container>
            <p className="ml-5">Recomendacoes</p>
            <ContentBook>
                <BookBox title={data[info[0]].title} stars={data[info[0]].avgRatings} author={data[info[0]].authors} publishing={publisher[Number(data[info[0]].publisher)].name} variant="box"></BookBox>
                <BookBox title={data[info[1]].title} stars={data[info[1]].avgRatings} author={data[info[1]].authors} publishing={publisher[Number(data[info[1]].publisher)].name} variant="box"></BookBox>
                <BookBox title={data[info[2]].title} stars={data[info[2]].avgRatings} author={data[info[2]].authors} publishing={publisher[Number(data[info[2]].publisher)].name} variant="box"></BookBox>
            </ContentBook>
            <div className="ml-5 btn-group">
                <p onClick={() => handleClickView(false)}className={`btn btn-outline-light ${viewTable ? 'actived' : 'disabled'}`}>Browse</p>
                <p onClick={() => handleClickView(true)} className={`btn btn-outline-light ${viewTable ? 'disabled' : 'actived'}`}>Editoras</p>
            </div>

            {viewTable ? <PublisherTable data={tableData} /> :

                <ContentBrowse>
                    <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
                    <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
                    <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
                    <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
                    <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
                    <TopPublishingHouse>
                        <p>Top Editoras</p>

                        {
                            topPublisher.map((val) => (
                                <PublishingHouse> {publisher[Number(val)].name} </PublishingHouse>
                            ))
                        }

                    </TopPublishingHouse>

                </ContentBrowse>

            }

        </Container>
    );
}

export default BookView;