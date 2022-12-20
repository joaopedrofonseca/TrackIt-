import styled from "styled-components";

export const TitleToday = styled.div`
    margin-top:100px ;
    margin-left: 17px;
    margin-bottom: 28px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        color: ${props => props.checkHabits.length !== 0 && '#8FC549'};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        color: ${props => props.color}
    }
`
export const CheckHabit = styled.div`
    width: 340px;
    min-height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 18px;
    margin-bottom: 10px;
    padding: 13px 13px;
    box-sizing: border-box;
    position: relative;
    h1{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
    p{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    div{
        cursor: pointer;
        position: absolute;
        top: 13px;
        right: 13px;
        width: 69px;
        height: 69px;
        background: ${props => !props.done ? '#EBEBEB' : '#8FC549'};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .current{
        color: ${props => props.done ? '#8FC549' : '#666666'}
    }
    .record{
        color : ${props => props.record ? '#8FC549' : '#666666'}
    }
`