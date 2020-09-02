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
&.search-activated{
    border: 1px 1px 0 1px solid #dfe1e5;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
margin-top: -40px;
background: #fff;
padding: 8px;
display: flex;
justify-content: center;
border: 1px solid #dfe1e5;
box-shadow: none;
border-radius: 24px;
height: 44px;

width: 30%;
    :hover{
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    }
`
export const SearchContent = styled.div`
width: 30%;
margin-left: 35vw;
background: #fff;
position: relative;
z-index: 99;
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;

`
export const SearchItem = styled.li`
color: black;
list-style-type: none;
padding: 8px;
&:hover{
    Cursor: pointer;
    background-color: #f5f5f5;
    :last-child {
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
    }
}


`