import styled from "styled-components";

export const HabitContainer = styled.div`
    margin-top: 98px;
    box-sizing: border-box;
    padding: 0px 18px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 29px;
    }
`
export const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 18px;
    position: relative;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    }
    div{
        position: absolute;
    }
    .cancel{
        position: absolute;
        top: 137px;
        right: 123px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
        border: none;
        background-color: #FFFFFF;
    }
    .save{
        opacity: ${props => props.loading && '0.7'};
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 130px;
        right: 16px;
        cursor: pointer;
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: white;
        border: none;
        background-color: #52B6FF;
        border-radius: 5px;
        margin-left: 23px;
    }
`
export const SavedHabit = styled.div`
    width: 340px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom:10px;
    padding: 15px;
    box-sizing: border-box;
    div{
        display: flex;
        justify-content: space-between;
    }
    img{
        cursor: pointer;
        width: 15px;
        height: 20px;
        color: #666666;
    }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
`