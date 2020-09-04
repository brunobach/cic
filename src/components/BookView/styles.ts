import styled from 'styled-components';

export const Container = styled.div`


> button {
    background-color: transparent;
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 60px;
    border: 0;
    margin-left: 40%;
    overflow: hidden;
    cursor: pointer;
    > svg {
        transform: rotate(180deg);
        position: relative;
        animation-name: arrowUp;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
    }
    
    @keyframes arrowUp {
        from {top: 50px;}
        to {top: 0px;}
    }
    
}

p {
    margin-top: 5%;
    font-size: 1.8rem;
    font-family: Roboto;
    font-weight: 700;
    color: #fff !important;
    
    -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 
}

`;

export const ContentBook = styled.div`
    display: flex;
    justify-content: center;
`
export const ContentBrowse = styled.div`

    display: flex;
    justify-content: space-between;
    > button {
    background-color: transparent;
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 60px;
    border: 0;
    margin-left: 45%;
    margin-top: 200px;
    overflow: hidden;
    cursor: pointer;
    > svg {
        position: relative;
        animation-name: arrow;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
    }
    
    @keyframes arrow {
        from {top: 0px;}
        to {top: 50px;}
    }
    
}
`

export const TopPublishingHouse = styled.div`
width: calc(100px + ((100vw - 1440px) / 2));
margin-left: 20px;
margin-right: 5%;
p{
    margin-left: 20%;
    margin-top: -30px;
}

`
export const PublishingHouse = styled.div`
margin-bottom: 5px;
border-radius: 15px;
background: linear-gradient(145deg, #273047, #20293b);
box-shadow:  5px 5px 9px #1f2739, 
             -5px -5px 9px #29334b;
height: 5vh;

p{
    margin: 10px;
    font-size: 15px;
}

`