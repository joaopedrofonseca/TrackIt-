import styled from "styled-components";

const AlignInputs = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    padding-left: 36px;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 11px;
        margin-bottom: 6px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        ::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
    button{
        opacity: ${props => props.loading &&  '0.7'};
        cursor: pointer;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        font-family: 'Lexend Deca', sans-serif;
        border: none;
    }
    p{
        cursor: pointer;
        margin-top: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`
export default AlignInputs