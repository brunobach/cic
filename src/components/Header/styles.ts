import styled from 'styled-components';

export const Container = styled.div`

  height: 60px;
  background: #242D42;
  margin-top: 30px;

  >img {
    cursor: pointer;
    margin-left: 30px;
    width: auto;
    max-width: 65px;
  }
`;

export const SearchInput = styled.input`
&.search-activated{
    border: 1px 1px 0 1px solid #dfe1e5;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
background: #2D3850;
color: #aaa;
padding: 8px;
margin-top: -55px;
display: flex;
justify-content: center;
border: 1px solid #2D3850;
box-shadow: none;
border-radius: 3px;
height: 50px;
box-shadow: 0 19px 10px 0 rgba(32, 33, 36, .28);
width: 30%;
    :hover{
        
    }
`
export const SearchContent = styled.div`
width: 30%;
margin-left: 35vw;
background: #2D3850;
position: relative;
z-index: 99;
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

`
export const SearchItem = styled.li`
color: black;
list-style-type: none;
padding: 8px;
color: #aaa;
&:hover{
    Cursor: pointer;
    background-color:  #242D42;
    :last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
}


`