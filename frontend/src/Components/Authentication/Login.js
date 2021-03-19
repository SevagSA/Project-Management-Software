import styles from "./Style";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <styles.ParentWrapper>
            <styles.Wrapper>
                <styles.AuthFormInfoHolder>
                    <styles.AuthFormTitle>Login</styles.AuthFormTitle>
                </styles.AuthFormInfoHolder>
                <styles.AuthFormHolder>

                    <styles.AuthForm method="POST">
                        <styles.AuthFormFieldHolder>
                            <styles.AuthFormLabel for="email">Email</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="email" id="email" required />
                            <br />
                            <styles.AuthFormLabel for="password">Password</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="password" id="password" required />
                            <br />
                        </styles.AuthFormFieldHolder>
                        <styles.AuthFormSubmitInput type="submit" value="Login" />
                    </styles.AuthForm>
                    <Link exact to="/admin-registration">Don't have an account? Register here as admin.</Link>
                    <small>
                        If you're not an admin and don't have an account, please contact your admin to register
                        one for you
                    </small>
                </styles.AuthFormHolder>
            </styles.Wrapper>
        </styles.ParentWrapper>
    )
}
