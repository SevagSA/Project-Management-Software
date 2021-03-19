import styles from './Styles';

export default function ProfileCard({ member }) {
    return (
        <styles.Wrapper>

            <styles.PictureAndActionHolder>
                <styles.ProfilePic src={`${process.env.PUBLIC_URL}/assets/images/profile_page.png`} />
                <styles.ActionBtn>Chat</styles.ActionBtn>
            </styles.PictureAndActionHolder>

            <styles.ProfileInfoHolder>
                <styles.ProfileOverviewHolder>
                    <styles.Name>{member.name}</styles.Name>
                    <styles.Role>{member.role}</styles.Role>

                    <styles.TextInfo>Email: justin@org.com</styles.TextInfo>
                    <styles.TextInfo>Phone Number: (828) 234-5365</styles.TextInfo>

                </styles.ProfileOverviewHolder>
                <styles.ProfileNumbersHolder>
                    <styles.ProfileNumberHolder>
                        <styles.NumberTitle>Active Projects</styles.NumberTitle>
                        <styles.NumberTxt>1</styles.NumberTxt>
                    </styles.ProfileNumberHolder>

                    <styles.ProfileNumberHolder>
                        <styles.NumberTitle>Active Projects</styles.NumberTitle>
                        <styles.NumberTxt>2</styles.NumberTxt>
                    </styles.ProfileNumberHolder>

                    <styles.ProfileNumberHolder>
                        <styles.NumberTitle>Active Projects</styles.NumberTitle>
                        <styles.NumberTxt>3</styles.NumberTxt>
                    </styles.ProfileNumberHolder>
                </styles.ProfileNumbersHolder>
            </styles.ProfileInfoHolder>

        </styles.Wrapper>
    )
}
