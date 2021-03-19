import styled from "styled-components";

const ParentWrapper = styled.div`
    height: 97vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 20px;
`;

const RegisterInfoHolder = styled.div`
    width: 70%;
    flex: 0.20;
`;

const RegisterTitle = styled.h3`
    text-align: center;
`;

const RegisterDescription = styled.p`
    text-align: center;
`;

const RegisterFormHolder = styled.div`
    width: 100%;
    flex: 0.80;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const RegisterForm = styled.form`
    text-align: center;
`;

const RegisterFormFieldHolder = styled.div`
    text-align: left;
    margin-bottom: 10px;
`;

const RegisterFormSubmitInput = styled.input`
    border: none;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    width: 70%;
    background-color: #1727b3;
    cursor: pointer;
    color: white;
`;

const RegisterFormLabel = styled.label`
    color: #1727b3
`;

const RegisterFormInput = styled.input`
    margin: 5px 0px 20px 0px;
    height: 30px;
    width: 430px;
    border: 1px solid #1727b3;
    border-radius: 5px;
    font-size: 16px;
    color: #1727b3;
`;


const styles = {
    ParentWrapper,
    Wrapper,
    RegisterInfoHolder,
    RegisterTitle,
    RegisterDescription,
    RegisterFormHolder,
    RegisterForm,
    RegisterFormFieldHolder,
    RegisterFormSubmitInput,
    RegisterFormLabel,
    RegisterFormInput
};

export default styles;