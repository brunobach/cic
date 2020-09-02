import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: #ffff;
`;

export const SearchYear = styled.div`
    width: 100px;
    height: 30px;
    background-color: green;
`
export const SearchInput = styled.input`
background: #fff;
display: flex;
justify-content: center;
border: 1px solid #dfe1e5;
box-shadow: none;
border-radius: 24px;
z-index: 3;
height: 44px;
margin: 0 auto;
width: 482px;
    :hover{
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    }
`
export const SearchItem = styled.li`
color: black;

`