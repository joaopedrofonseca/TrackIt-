import styled from "styled-components";

const SavedBtn = styled.button`
        width: 30px;
        height: 30px;
        margin-right: 2px;
        border: ${props => props.grey ? '1px solid #CFCFCF' : '1px solid #D5D5D5'};
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color:  ${props => props.grey? "white":"#DBDBDB"};
        background-color: ${props => !props.grey? "white":"#CFCFCF"}
`

export default SavedBtn;