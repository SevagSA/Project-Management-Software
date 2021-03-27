import styled from "styled-components";

const Wrapper = styled.form`
    flex: 0.90;
`;

const SearchInput = styled.input`
    height: 30px;
    width: 300px;
    margin-right: 10px;
`;

const SubmitInput = styled.input`
    height: 30px;
    background-color: #1735bd;
    color: white;
    border: none;
    border-radius: 5px;
    width: 70px;
`;

const styles = {
    Wrapper,
    SearchInput,
    SubmitInput
};

export default styles;