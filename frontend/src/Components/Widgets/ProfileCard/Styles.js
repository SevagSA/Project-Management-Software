import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #e6e8ff;
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: center;
    padding: 40px 0px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const PictureAndActionHolder = styled.div`
    flex: 0.30;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProfilePic = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
`;

const ActionBtn = styled.button`
    background-color: #1727b3;
    border: none;
    color: white;
    padding: 5px;
    right: 5px;
    cursor: pointer;
    font-size: 18px;
    height: 35px;
    width: 150px;
    margin-top: 15px;
    border-radius: 5px;
`;

const ProfileInfoHolder = styled.div`
    flex: 0.70;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const ProfileOverviewHolder = styled.div`
    flex: 0.70;
    border-bottom: 1px solid;
`;

const Name = styled.h2`
    margin-bottom: 0px;
`;

const Role = styled.p`
    margin: 0px 0px 10px 0px;
    text-decoration: underline;
`;

const TextInfo = styled.p`
    color: #1727b3;
    margin: 0px;
`;

const ProfileNumbersHolder = styled.div`
    flex: 0.30;
    display: flex;
    justify-content: start;
`;

const ProfileNumberHolder = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const NumberTitle = styled.p`
    color: #1727b3;
`;

const NumberTxt = styled.p`
    font-size: 40px;
    margin: 0px;
`;


const styles = {
    Wrapper,
    PictureAndActionHolder,
    ProfilePic,
    ActionBtn,
    ProfileInfoHolder,
    ProfileOverviewHolder,
    Name,
    Role,
    TextInfo,
    ProfileNumbersHolder,
    ProfileNumberHolder,
    NumberTitle,
    NumberTxt,
}

export default styles;