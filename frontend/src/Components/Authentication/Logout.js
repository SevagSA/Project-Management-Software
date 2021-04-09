import { useEffect, } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";

export default function Logout() {
    const history = useHistory();

    useEffect(() => {
        axiosInstance.post("account/logout/blacklist/", {
            refresh_token: localStorage.getItem("refresh_token"),
        });
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;
        history.push("/login");
    });
    return null;
}