import React from 'react';

import { Container, BookCover, Info, TitleInfo, DetailInfo } from './styles';

interface Props {
    variant: 'box' | 'none'
    title: string
    author: string
    publishing: string
}

const BookBox: React.FC<Props> = ({variant, title, author, publishing}) => {
  return (
  <Container className={variant}>
      <BookCover className={variant}></BookCover>
      <Info>
          <TitleInfo>
              <p>{title}</p>
              <span>{author}</span>
          </TitleInfo>
          <DetailInfo>
          <span> {publishing}</span>
          </DetailInfo>
      </Info>
  </Container>
  );
}

export default BookBox;