import React, {useState, useEffect} from 'react';

import { Container, ContentBook, ContentBrowse, TopPublishingHouse, PublishingHouse } from './styles';
import data from '../../data/data'
import publisher from '../../data/publisher'
import BookBox from '../BookBox'

const BookView: React.FC = () => {

const [info, setInfo] = useState([0,0,0])


function randomNumber() {
    const maxNumber: number = 45
    const minNumber: number = 1
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) 
}

useEffect(() => {
function handleInfos(){
        const inf = [randomNumber(), randomNumber(), randomNumber()]
    
        setInfo(inf)
        console.log(data[info[2]].title)
    }

handleInfos()
}, [])


    return (
        <Container>
            <p>Recomendacoes</p>
            <ContentBook>
                <BookBox title={data[info[0]].title } author={data[info[0]].authors} publishing={publisher[Number(data[info[0]].publisher)].name} variant="box"></BookBox>
                <BookBox title={data[info[1]].title } author={data[info[1]].authors} publishing={publisher[Number(data[info[1]].publisher)].name} variant="box"></BookBox>
                <BookBox title={data[info[2]].title } author={data[info[2]].authors} publishing={publisher[Number(data[info[2]].publisher)].name} variant="box"></BookBox>
            </ContentBook>
            <p>Browse</p>
            <ContentBrowse>
            <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
            <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
            <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
            <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
            <BookBox title="Titulo" author="Bruno" publishing="Editora" variant="none"></BookBox>
            <TopPublishingHouse>
            <p>Top Editoras</p>
                <PublishingHouse />
                <PublishingHouse />
                <PublishingHouse />
                <PublishingHouse />
                <PublishingHouse />
            </TopPublishingHouse>
            </ContentBrowse>
            
        </Container>
    );
}

export default BookView;