import React from 'react';
import StarRating from 'react-star-ratings'
import { Container, BookCover, Info, TitleInfo, DetailInfo } from './styles';

interface Props {
    variant: 'box' | 'none'
    title: string
    author: string
    publishing: string
    stars?: number
}

const BookBox: React.FC<Props> = ({variant, title, author, publishing, stars}) => {
  return (
  <Container className={variant}>
      <BookCover className={variant}></BookCover>
      <Info>
          <TitleInfo>
              <p>{title}</p>
              <span>{author}</span>
              
          </TitleInfo>
          <StarRating
                rating={stars}
                starDimension="25px"
                starSpacing="5px" />
          <DetailInfo>
          <span> {publishing}</span>
          </DetailInfo>
      </Info>
  </Container>
  );
}

export default BookBox;