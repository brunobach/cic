import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  &.box{
    margin-left: 5%;
    margin-right: 5%;
    justify-content: space-between;
    width: 30%;
    height: 30vh;
    border-radius: 15px;
    background: red;
  }
  &.none{
      :first-child{
        margin-left: 5%;
      }
    
    justify-content: center;   
    width: 15%;
    height: 25vh;
  }
`;

export const BookCover = styled.div`
    &.none {
        cursor: pointer;
        width: 50%;
        height: 70%;
        :hover {
            background-color: #dfe1e5;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
            border: 1px solid #dfe1e5;
        }
    }
    
    background-color: #000;
    width: 35%;
    height: 80%;
    margin-top: 6%;
    margin-left: 8%;
    border-radius: 10px;

`
export const Info = styled.div`
    margin-top: 6%;
    margin-right: 8%;
`
export const TitleInfo = styled.div`
&.box{ 
    p {
    font-size: 2rem;
    font-weight: 700;
    }
}
`

export const DetailInfo = styled.div`
margin-top: 70%;
span{
  color: #000;
}
`