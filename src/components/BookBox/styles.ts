import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  &.box{
      :first-child {
        margin-left: 5%;
        background: linear-gradient(129deg, rgba(67,44,135,1) 0%, rgba(107,37,148,1) 98%);
        box-shadow: -3px 29px 90px -26px rgba(128,29,186,1);
      
        :hover { 
          box-shadow: -3px 29px 120px -26px rgba(128,29,186,1);
        }
      }
      :last-child {
        margin-right: 5%;
        background: linear-gradient(129deg, rgba(122,15,29,1) 0%, rgba(196,61,87,1) 98%);
       
        :hover {
          box-shadow: -3px 29px 120px -26px rgba(196,61,87,1);
        }
      }
      background: linear-gradient(129deg, rgba(84,12,70,1) 0%, rgba(180,46,120,1) 98%);
      box-shadow: -3px 29px 90px -26px rgba(135,21,113,1);
      margin-right: 10px;
      width: 40%;
      height: 30vh;
      border-radius: 15px;
   
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
    :hover {
      
      box-shadow: -3px 29px 120px -26px rgba(135,21,113,1);
      cursor: pointer;
    }
  }
  &.none{
      :first-child{
        margin-left: 5%;
      }
    
    justify-content: center;   
    width: 15%;
    height: 25vh;
    :hover {
            cursor: pointer;
            border-radius: 18px;
            background: #242D42;
            box-shadow:  20px 20px 39px #1f2739;
        }
  }

  &.Page {
    margin-top: 5%;
    width: 50%;
    height: 40vh;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    background: linear-gradient(129deg, rgba(67,44,135,1) 0%, rgba(107,37,148,1) 98%);
    box-shadow: -3px 29px 90px -26px rgba(128,29,186,1);
  }
`;

export const BookCover = styled.div`
    &.none {
        > img {
        border-radius: 10px;
        width: auto;
        max-width: 80px;
        min-width: 10px;
        
        }
        cursor: pointer;
        width: 50%;
        height: 70%;
    }
    width: auto;
    max-width: 160px;
    min-width: 100px;
    &.box {
      > img {
      box-shadow: -3px 29px 70px -22px rgba(5,5,5,1);
      border-radius: 10px;
      max-width: 100%;
     height: auto;
    }
    }

    &.Page {
      > img {
      box-shadow: -3px 29px 70px -22px rgba(5,5,5,1);
      border-radius: 10px;
      max-width: 100%;
     height: auto;
    }
    }

    margin-top: 5%;
    margin-left: 5%;
    border-radius: 10px;
    
`
export const Info = styled.div`
    margin-top: 10px;
    margin-left: 10px;
`
export const TitleInfo = styled.div`
&.none { 
  p {
    color: red;
    font-size: 0.8rem;
}
span {
  color: #aaa;
  font-size: 0.7rem;
}
}
&.box {
  p {
    color: #ffff;
    font-size: 1.5rem;
    font-weight: 300;
  }
span {
  color: #aaa;
}
}

`

export const DetailInfo = styled.div`
span{
  font-family: Poppins;
  color: #ffff;
}

&.none { 
  span {
    color: #fff;
    font-size: 0.7rem;
}
}
`