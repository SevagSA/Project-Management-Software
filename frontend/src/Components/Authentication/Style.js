import styled from "styled-components";

const ParentWrapper = styled.div`
    height: 92vh;
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

const AuthFormInfoHolder = styled.div`
    max-width: 960px;
    flex: 0.20;
`;

const AuthFormTitle = styled.h3`
    text-align: center;
`;

const AuthFormDescription = styled.p`
    text-align: center;
`;

const AuthFormHolder = styled.div`
    width: 100%;
    flex: 0.80;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const AuthForm = styled.form`
    text-align: center;
`;

const AuthFormFieldHolder = styled.div`
    text-align: left;
    margin-bottom: 10px;
`;

const AuthFormSubmitInput = styled.input`
    border: none;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    width: 70%;
    background-color: #1727b3;
    cursor: pointer;
    color: white;
    margin-bottom: 25px;
`;

const AuthFormLabel = styled.label`
    color: #1727b3
`;

const AuthFormInput = styled.input`
    margin: 5px 0px 20px 0px;
    height: 30px;
    width: 430px;
    border: 1px solid #1727b3;
    border-radius: 5px;
    font-size: 16px;
    color: #1727b3;
`;

const AuthFormSelect = styled.select`
    margin: 5px 0px 20px 0px;
    height: 45px;
    width: 430px;
    border: 1px solid #1727b3;
    border-radius: 5px;
    font-size: 16px;
    color: #1727b3;
`;

const AuthFormTextArea = styled.textarea`
    margin: 5px 0px 20px 0px;
    height: 30px;
    width: 430px;
    border: 1px solid #1727b3;
    border-radius: 5px;
    font-size: 16px;
    color: #1727b3;
    resize: vertical;
    font-family: 'Helvetica', 'Arial', sans-serif;
`;

const styles = {
    ParentWrapper,
    Wrapper,
    AuthFormInfoHolder,
    AuthFormTitle,
    AuthFormDescription,
    AuthFormHolder,
    AuthForm,
    AuthFormFieldHolder,
    AuthFormSubmitInput,
    AuthFormLabel,
    AuthFormInput,
    AuthFormSelect,
    AuthFormTextArea
};

export default styles;