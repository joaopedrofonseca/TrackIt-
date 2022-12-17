import styled from "styled-components";

const PhoneScreen = styled.div`
    background-color: ${props => props.color};
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-bottom: 120px;
    align-items: ${props => props.align ? 'start' : 'center'};
`

export default PhoneScreen