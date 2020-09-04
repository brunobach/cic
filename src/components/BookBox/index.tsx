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
}

const BookBox: React.FC<Props> = ({variant, title, author, publishing, stars, id}) => {
  const history = useHistory()
  return (
  <Container onClick={() => history.push(`/book/${id}`)} className={variant}>
      <BookCover className={variant}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/91MbLmqat8L._SL1500_.jpg" />
      </BookCover>
      <Info>
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
          <span> Editora {publishing}</span>
          </DetailInfo>
      </Info>
  </Container>
  );
}

export default BookBox;