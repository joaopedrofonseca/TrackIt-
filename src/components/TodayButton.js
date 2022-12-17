import styled from "styled-components";

const TodayButton = styled.button`
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border:none;
        border-radius: 50px;
        position: fixed;
        top: 566px;
        left:${props => props.left && '142px'};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
        z-index: 1000;
`
export default TodayButton