import React,  {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { Container, SearchInput, SearchContent, SearchItem } from './styles';
import Logo from '../../assets/logo.png'
/* eslint-disable */
interface Books {
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
    const [dataInfo, setDataInfo] = useState<Books[]>([])
    const [resultInfo, setResultInfo] = useState<Books[]>([])
    const [resultNone, setResultNone] = useState(false)
    const [searchText, setSerchText] = useState('')
    
    useEffect(() => {
        async function loadData() {
            const response = await api.get("books.json")
            setDataInfo(response.data); 
        }
        loadData();
    }, [])

    useEffect(() => {
        setResultInfo([]);
        setResultNone(false)
    }, [resultNone])
    
    useEffect(() => {
        filterRecord(searchText)
    }, [searchText])


    function filterRecord(record: string){
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
        <Container >
            <img onClick={() => history.push('/')} src={Logo} />
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