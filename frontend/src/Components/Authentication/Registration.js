import styles from "./Style";
import { Link, useHistory } from "react-router-dom";
import { axiosInstance, normalizeStr } from "../../axiosInstance";
import { useState, useEffect } from "react";

export default function Registration({ isAdmin }) {
    let history = useHistory();
    const [staffRoles, setStaffRoles] = useState([])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let endpoint = "account/register-" + (isAdmin ? "administrator/" : "staff/")
        let body = {
            member: {
                email: normalizeStr(e.target.email.value),
                first_name: normalizeStr(e.target.fName.value),
                last_name: normalizeStr(e.target.lName.value),
                phone_number: e.target.phoneNum.value,
            },
            password: e.target.password.value,
            password2: e.target.password2.value
        }

        if (endpoint === "account/register-staff/") {
            body["role"] = normalizeStr(e.target.role.value)
            body["member"]["organization"] = {
                // TODO: the staff will always bne registered by an admin.
                // The staff's org will be the admin's org
                "organization_name": "The current admin's org"
            }
        } else {
            body["member"]["organization"] = {
                "organization_name": normalizeStr(e.target.orgName.value)
            }
        }

        axiosInstance.
            post(endpoint, body)
            .then(response => {
                console.log("response:", response)
                if (response.status === 201) {
                    alert("Your account has been created.")
                    history.push("/login")
                }
                return response.data
            })
            .then(data => {
                console.log("data:", data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    useEffect(() => {
        if (!isAdmin) {
            axiosInstance.
                get("account/staff-role-choices/")
                .then(response => {
                    setStaffRoles(response.data.roles)
                })
        }
    }, [setStaffRoles, isAdmin])

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
                            "them access to all of projects and tasks that they're responsible for and to allow them to " +
                            "communicate with other memebers of your organization. After registering them " +
                            "an account, the staff member will receive an email with instructions on how to " +
                            "login."
                        }
                    </styles.AuthFormDescription>
                </styles.AuthFormInfoHolder>
                <styles.AuthFormHolder>
                    {/* TODO: make this form shorter. */}
                    <styles.AuthForm method="POST" onSubmit={handleFormSubmit}>
                        <styles.AuthFormFieldHolder>
                            <styles.AuthFormLabel htmlFor="fName">First Name</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="text" id="fName" required />
                            <br />

                            <styles.AuthFormLabel htmlFor="lName">Last Name</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="text" id="lName" required />
                            <br />
                            <styles.AuthFormLabel htmlFor="email">Email</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="email" id="email" required />
                            <br />
                            <styles.AuthFormLabel htmlFor="phoneNum">Phone Number</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="text" id="phoneNum" required />
                            <br />
                            {isAdmin ?
                                <>
                                    <styles.AuthFormLabel htmlFor="orgName">Organization Name</styles.AuthFormLabel>
                                    <br />
                                    <styles.AuthFormInput type="text" id="orgName" required />
                                    <br />
                                </>
                                :
                                <>
                                    <styles.AuthFormLabel htmlFor="role">Staff Role</styles.AuthFormLabel>
                                    <br />
                                    <styles.AuthFormSelect id="role">
                                        {staffRoles.map(e => {
                                            return (
                                                <option value={e[0]}>{e[0]}</option>
                                            )
                                        })}
                                    </styles.AuthFormSelect>

                                    <br />
                                </>
                            }
                            <styles.AuthFormLabel htmlFor="password">Password</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="password" id="password" required />
                            <br />

                            <styles.AuthFormLabel htmlFor="password2">Password Confirmation</styles.AuthFormLabel>
                            <br />
                            <styles.AuthFormInput type="password" id="password2" required />
                            <br />
                        </styles.AuthFormFieldHolder>
                        {isAdmin ?
                            <styles.AuthFormSubmitInput type="submit" value="Register as Admin" />
                            :
                            <styles.AuthFormSubmitInput type="submit" value="Register a Staff member" />
                        }
                    </styles.AuthForm>
                    <Link exact to="/login" >Have an account? Login here.</Link>
                    {isAdmin ? <Link exact to="/staff-registration" >Registering your staff? Do so here.</Link>
                        : <Link exact to="/admin-registration" >Not a staff member? Register as an admin here.</Link>}
                </styles.AuthFormHolder>
            </styles.Wrapper>
        </styles.ParentWrapper>
    )
}
