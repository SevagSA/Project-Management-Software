import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 97vh;
    display: flex;
    flex-direction: column;
`;

const SearchDiv = styled.div`
    display: flex;
    flex: 0.10;
    align-items: center;
    justify-content: stretch;
    padding: 0px 10px;
    background-color: #95a6f5;
    color: white;
`;

const SearchQueryInput = styled.input`
    height: 30px;
    width: 200px;
    margin: 10px;
`;

const SearchFilterBy = styled.select`
    height: 30px;
    width: 200px;
    margin: 10px;
`;

const ResultCountHolder = styled.div`
    flex: 0.60;
`;

const ResultCount = styled.p`
    font-size: 30px;
`;

const SearchFieldHolder = styled.div`
    flex: 0.40;
    display: flex;
    justify-content: flex-end;
`;

const ResultDiv = styled.div`
    flex: 0.90;
    margin-top: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

const styles = {
    Wrapper,
    SearchDiv,
    SearchQueryInput,
    SearchFilterBy,
    ResultDiv,
    ResultCountHolder,
    ResultCount,
    SearchFieldHolder
}

export default styles;