import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    max-width: 220px;
    margin: 10px auto auto 10px;
    border-radius: 10px;
    background-color: #e3e3e3;
    ${({ sent }) => sent && `
        background-color: #1e6bd6;
        color: white;
        justify-content: flex-end;
        margin-left: auto;
        margin-right: 10px;
    `}
`;

const styles = {
    Wrapper,
}

export default styles;