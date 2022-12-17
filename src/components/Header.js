import styled from "styled-components";

const Header = styled.div`
    position: fixed;
    background-color: #126BA5;
    width: 375px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 10px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
    }

`
export default Header