import styles from "./Style";

export default function Registration({ isAdmin }) {
    return (
        <styles.ParentWrapper>
            <styles.Wrapper>
                <styles.RegisterInfoHolder>
                    <styles.RegisterTitle>
                        {isAdmin ? "Register as Admin" : "Register a Staff"}
                    </styles.RegisterTitle>
                    <styles.RegisterDescription>
                        {isAdmin ?
                            "Registering as Admin will give you full access to the dashboard " +
                            "and will allow you to create your organization and add your staff " +
                            "to it."
                            :
                            "As Admin, you can register your staff members into the system to give " +
                            "them access to all of tasks that they're responsible for and to allow them to " +
                            "communicate with other memebers of your organization. After registering them " +
                            "an account, the staff member will receive an email with instructions on how to " +
                            "login."
                        }
                    </styles.RegisterDescription>
                </styles.RegisterInfoHolder>
                <styles.RegisterFormHolder>

                    <styles.RegisterForm>

                        <styles.RegisterFormFieldHolder method="POST">
                            <styles.RegisterFormLabel for="fName">First Name</styles.RegisterFormLabel>
                            <br />
                            <styles.RegisterFormInput type="text" id="fName" required />
                            <br />
                            <styles.RegisterFormLabel for="lName">Last Name</styles.RegisterFormLabel>
                            <br />
                            <styles.RegisterFormInput type="text" id="lName" required />
                            <br />
                            <styles.RegisterFormLabel for="email">Email</styles.RegisterFormLabel>
                            <br />
                            <styles.RegisterFormInput type="email" id="email" required />
                            <br />
                            <styles.RegisterFormLabel for="phoneNum">Phone Number</styles.RegisterFormLabel>
                            <br />
                            <styles.RegisterFormInput type="text" id="phoneNum" required />
                            <br />
                            {isAdmin ?
                                <>
                                    <styles.RegisterFormLabel for="orgName">Organization Name</styles.RegisterFormLabel>
                                    <br />
                                    <styles.RegisterFormInput type="text" id="orgName" required />
                                    <br />
                                </>
                                :
                                <>
                                    <styles.RegisterFormLabel for="role">Staff Role</styles.RegisterFormLabel>
                                    <br />
                                    <styles.RegisterFormInput type="text" id="role" required />
                                    <br />
                                </>
                            }
                        </styles.RegisterFormFieldHolder>
                        {isAdmin ?
                            <styles.RegisterFormSubmitInput type="submit" value="Register as Admin" />
                            :
                            <styles.RegisterFormSubmitInput type="submit" value="Register a Staff member" />
                        }
                    </styles.RegisterForm>

                </styles.RegisterFormHolder>
            </styles.Wrapper>
        </styles.ParentWrapper>
    )
}
