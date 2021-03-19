import styles from "./Style";
import { Link } from "react-router-dom";

export default function Registration({ isAdmin }) {
    return (
        <styles.ParentWrapper>
            <styles.Wrapper>
                <styles.AuthFormInfoHolder>
                    <styles.AuthFormTitle>
                        {isAdmin ? "Register as Admin" : "Register a Staff"}
                    </styles.AuthFormTitle>
                    <styles.AuthFormDescription>
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
                    </styles.AuthFormDescription>
                </styles.AuthFormInfoHolder>
                <styles.AuthFormHolder>

                    <styles.AuthForm method="POST">
                        <styles.AuthFormFieldHolder>
                            <styles.AuthFormLabel for="name">Full Name</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="text" id="name" required />
                            <br />
                            <styles.AuthFormLabel for="password">Password</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="password" id="password" required />
                            <br />
                            <styles.AuthFormLabel for="email">Email</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="email" id="email" required />
                            <br />
                            <styles.AuthFormLabel for="phoneNum">Phone Number</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="text" id="phoneNum" required />
                            <br />
                            {isAdmin ?
                                <>
                                    <styles.AuthFormLabel for="orgName">Organization Name</styles.AuthFormLabel>
                                    <br />
                                    <styles.AuthFormInput type="text" id="orgName" required />
                                    <br />
                                </>
                                :
                                <>
                                    <styles.AuthFormLabel for="role">Staff Role</styles.AuthFormLabel>
                                    <br />
                                    <styles.AuthFormInput type="text" id="role" required />
                                    <br />
                                </>
                            }
                        </styles.AuthFormFieldHolder>
                        {isAdmin ?
                            <styles.AuthFormSubmitInput type="submit" value="Register as Admin" />
                            :
                            <styles.AuthFormSubmitInput type="submit" value="Register a Staff member" />
                        }
                    </styles.AuthForm>
                    <Link exact to="/login" >Have an account? Login here</Link>
                </styles.AuthFormHolder>
            </styles.Wrapper>
        </styles.ParentWrapper>
    )
}
