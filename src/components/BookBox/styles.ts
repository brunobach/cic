import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  &.box{
      :first-child {
        margin-left: 5%;
        background: linear-gradient(155deg, rgba(151,215,255,1) 0%, rgba(197,233,255,1) 96%);
      }
      :last-child {
        margin-right: 5%;

        background: linear-gradient(153deg, rgba(255,204,207,1) 0%, rgba(251,172,182,1) 96%);
      }
      background: linear-gradient(155deg, rgba(212,204,255,1) 0%, rgba(188,175,255,1) 96%);
      margin-right: 10px;
      justify-content: space-between;
      width: 40%;
      height: 30vh;
      border-radius: 15px;
      -webkit-box-shadow: 0px 3px 19px -4px #000000; 
      box-shadow: 0px 3px 9px -4px #000000;
   
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  
  @-webkit-keyframes bounceInRight {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(3000px, 0, 0);
  transform: translate3d(3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(-25px, 0, 0);
  transform: translate3d(-25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(-5px, 0, 0);
  transform: translate3d(-5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes bounceInRight {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(3000px, 0, 0);
  transform: translate3d(3000px, 0, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(-25px, 0, 0);
  transform: translate3d(-25px, 0, 0);
  }
  75% {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
  }
  90% {
  -webkit-transform: translate3d(-5px, 0, 0);
  transform: translate3d(-5px, 0, 0);
  }
  100% {
  -webkit-transform: none;
  transform: none;
  }
  }
    
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
    
    &.box {
      min-width: 150px;
    }

    background-color: #000f;
    
    height: 80%;
    margin-top: 6%;
    margin-left: 8%;
    border-radius: 10px;

`
export const Info = styled.div`
    margin-top: 10px;
`
export const TitleInfo = styled.div`
p {
    color: #ffff;
    font-size: 1.5rem;
    font-weight: 300;
  }
span {
  color: #aaa;
  margin-left:10px;
}
`

export const DetailInfo = styled.div`

span{
  margin-left: 10px;
  color: #000;
}
`