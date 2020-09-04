import styled from 'styled-components';

export const Container = styled.div`

`;

export const BookViewer = styled.div`
color: black;

.tb-bootstrap{
    cursor: pointer;
    border-radius: 20px;
    margin-top: 50px;
}
`


export const BookContent = styled.div`
`
export const BookAll = styled.div`

display: flex;
justify-content: center;
margin-top: 150px;
margin-left: 40vw;
font-family: Poppins;
border-radius: 10px;
color: #fff;
font-size: 20px;
width: 20%;
background: linear-gradient(145deg, #273047, #20293b);
box-shadow:  21px 21px 46px #1d2435, 
             -21px -21px 46px #2b364f;
cursor: pointer;

:hover {
    color: #aaa;
    box-shadow:  21px 10px 46px #1d2435, 
             -21px -21px 46px #2b364f;
}

`
export const BookInfo = styled.div``