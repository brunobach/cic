import React,  {useState, useEffect, ChangeEvent} from 'react';
import data from '../../data/data'


import { Container, SearchYear, SearchInput, SearchItem } from './styles';

interface Info {
    _id: string
    title: string
    authors: string
    avgRatings: number
    numRatings: number
    numPages: number
    publicationDate: string
    publisher: string
}

const Header: React.FC = () => {

    const [dataInfo, setDataInfo] = useState<Info[]>([])
    const [resultInfo, setResultInfo] = useState<Info[]>([])
    const [resultNone, setResultNone] = useState(false)
    
    useEffect(() => {
        setDataInfo(data);
    }, [])

    useEffect(() => {
        console.log("user")
        setResultInfo([]);
        setResultNone(false)
    }, [resultNone])
    
    function filterRecord(record: string){
        console.log(record.length)
        if(record.length === 0) {
          console.log("entrei")  
          return setResultNone(true)
        }
        const filteredText = record.toUpperCase()
        let results = dataInfo.filter((entry) => {
            return entry.title.toUpperCase().indexOf(filteredText) !== -1
        })
        let resultsFiltered = results.filter((val, index) => {
            if (index <= 5) return val 
        })
        setResultInfo(resultsFiltered)
    }
    return (
        <Container>
            <SearchYear />
            <SearchInput onChange={(e) => filterRecord(e.target.value)} placeholder="Pesquisar" />
            {resultInfo.map((val) => (
                <SearchItem key={val._id}>
                    {val.title}
                </SearchItem>
            ))}
        </Container>)
        ;
}

export default Header;