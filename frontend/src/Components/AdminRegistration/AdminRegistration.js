import styles from "./Style";

export default function AdminRegistration() {
    return (
        <styles.ParentWrapper>
            <styles.Wrapper>
                <styles.RegisterInfoHolder>
                <styles.RegisterTitle>Register as Admin</styles.RegisterTitle>
                <styles.RegisterDescription>
                    Registering as Admin will give you full access to the dashboard
                    and will allow you to create your organization and add your staff
                    to it.
                </styles.RegisterDescription>
            </styles.RegisterInfoHolder>
                <styles.RegisterFormHolder>

                <styles.RegisterForm>

                    <styles.RegisterFormFieldHolder method="POST">
                        <styles.RegisterFormLabel for="fName">First Name</styles.RegisterFormLabel>
                        <br />
                        <styles.RegisterFormInput type="text" id="fName" required/>
                        <br />
                        <styles.RegisterFormLabel for="lName">Last Name</styles.RegisterFormLabel>
                        <br />
                        <styles.RegisterFormInput type="text" id="lName" required/>
                        <br />
                        <styles.RegisterFormLabel for="email">Email</styles.RegisterFormLabel>
                        <br />
                        <styles.RegisterFormInput type="email" id="email" required/>
                        <br />
                        <styles.RegisterFormLabel for="phoneNum">Phone Number</styles.RegisterFormLabel>
                        <br />
                        <styles.RegisterFormInput type="text" id="phoneNum" required/>
                        <br />
                        <styles.RegisterFormLabel for="orgName">Organization Name</styles.RegisterFormLabel>
                        <br />
                        <styles.RegisterFormInput type="text" id="orgName" required/>
                        <br />
                    </styles.RegisterFormFieldHolder>
                    <styles.RegisterFormSubmitInput type="submit" value="Register"/>
                </styles.RegisterForm>

            </styles.RegisterFormHolder>
            </styles.Wrapper>
        </styles.ParentWrapper>
    )
}
