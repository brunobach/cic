import React,  {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import data from '../../data/data'

import { Container, SearchYear, SearchInput, SearchContent, SearchItem } from './styles';

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
    const history = useHistory()
    const [dataInfo, setDataInfo] = useState<Info[]>([])
    const [resultInfo, setResultInfo] = useState<Info[]>([])
    const [resultNone, setResultNone] = useState(false)
    const [searchText, setSerchText] = useState('')
    
    useEffect(() => {
        setDataInfo(data);
    }, [])

    useEffect(() => {
        setResultInfo([]);
        setResultNone(false)
    }, [resultNone])
    
    useEffect(() => {
        filterRecord(searchText)
    }, [searchText])


    function filterRecord(record: string){
        console.log(record.length)
        if(record.length === 0) {
          return setResultNone(true)
        }
        const filteredText = record.toUpperCase()
        let results = dataInfo.filter((entry) => {
            return entry.title.toUpperCase().indexOf(filteredText) !== -1
        })
        let resultsFiltered = results.filter((val, index) => {
            if (index <= 5) { return val } 
        })
        setResultInfo(resultsFiltered)
    }
    function handleClickedSearch(id: string) {
        history.push(`/book/${id}`)
        setSerchText('')

    }
    return (
        <Container className="shadow-sm p-5">
            <SearchYear />
            <SearchInput  value={searchText} className={resultInfo.length > 1 ? 'search-activated mx-auto' : 'search-off mx-auto'} onChange={(e) => setSerchText(e.target.value)} placeholder="Pesquisar" />
            <SearchContent className="mx-auto">
            {resultInfo.map((val, index) => (
                
                <SearchItem onClick={() => handleClickedSearch(val._id)} key={val._id} className={index === 0 ? 'first-li' : 'last-li' }>
                    {val.title}
                </SearchItem>
               
            ))}
             </SearchContent>
        </Container>)
        ;
}

export default Header;