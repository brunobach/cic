import React from 'react';
import StarRating from 'react-star-ratings'
import { useHistory } from 'react-router-dom'
import { Container, BookCover, Info, TitleInfo, DetailInfo } from './styles';

interface Props {
    variant: 'box' | 'none' | 'Page'
    title: string
    author: string
    publishing: string
    stars?: number
    id?: number
    url?: string
    numRatings?: number
    numPages?: number
    date?: string
}

const BookBox: React.FC<Props> = ({variant, title, author, publishing, stars, id, url, numRatings, numPages, date}) => {
  const history = useHistory()
  return (
  <Container onClick={() => history.push(`/book/${id}`)} className={variant}>
      <BookCover className={variant}>
          <img src={url || 'https://developerplus.com.br/wp-content/uploads/2019/05/clean-code-642x1024.png'} alt="Cover Livro"/>
      </BookCover>
      <Info className={variant}>
          <TitleInfo className={variant}>
              <p>{title}</p>
              <span>{author}</span>
              
          </TitleInfo>
          {variant === 'box' || variant === 'Page' ? <StarRating
                rating={stars}
                starDimension="25px"
                starRatedColor="yellow"
                starSpacing="5px" /> : <StarRating
                rating={stars }
                starDimension="10px"
                starRatedColor="yellow"
                starSpacing="5px" />}
          <DetailInfo className={variant}>
          {numRatings ? <> <span>Avaliado por {numRatings} pessoas </span>
          <span>N. de Páginas {numPages} </span>
          <span>Publicado em {date} </span> </> : ''}
          <span> Editora {publishing}</span>
          </DetailInfo>
      </Info>
  </Container>
  );
}

export default BookBox;