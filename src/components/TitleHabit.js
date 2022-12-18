import styled from "styled-components"

const TitleHabit = styled.div`
    margin-top: ${props => props.margin};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    margin-left: 17px;
    h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    }
    button{
        cursor: pointer;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default TitleHabit