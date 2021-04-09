import styles from "./Style";
import { Link, useHistory } from "react-router-dom";
import { axiosInstance, normalizeStr } from "../../axiosInstance";

export default function Login() {

    let history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axiosInstance.
            post("account/token/", {
                email: normalizeStr(e.target.email.value),
                password: e.target.password.value,
            })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("access_token", response.data.access);
                    localStorage.setItem("refresh_token", response.data.refresh);
                    history.push("/");
                }
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }

    return (
        <styles.ParentWrapper>
            <styles.Wrapper>
                <styles.AuthFormInfoHolder>
                    <styles.AuthFormTitle>Login</styles.AuthFormTitle>
                </styles.AuthFormInfoHolder>
                <styles.AuthFormHolder>

                    <styles.AuthForm method="POST" onSubmit={handleFormSubmit}>
                        <styles.AuthFormFieldHolder>
                            <styles.AuthFormLabel htmlFor="email">Email</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="email" id="email" required />
                            <br />
                            <styles.AuthFormLabel htmlFor="password">Password</styles.AuthFormLabel>
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
