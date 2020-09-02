import styled from 'styled-components';

export const Container = styled.div`
p {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 1.5rem;
    font-family: Poppins;
    font-weight: 500;
    color: #aaa;
}
`;

export const ContentBook = styled.div`
    display: flex;
    justify-content: center;
`
export const ContentBrowse = styled.div`
    display: flex;
`

export const TopPublishingHouse = styled.div`
width: calc(100px + ((100vw - 1440px) / 2));
margin-left: 20px;
margin-right: 5%;
p{
    margin-left: 30%;
    margin-top: -30px;
}
`
export const PublishingHouse = styled.div`
margin-bottom: 5px;
background-color: #aaa;
height: 5vh;
`