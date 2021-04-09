import axios from "axios"

const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem("access_token")
            ? "JWT " + localStorage.getItem("access_token")
            : null,
        "Content-Type": "application/json",
        accept: "application/json",
    }
});

/**
 * Takes a String and trims it. The function also
 * removes any extra whitespaces between 2 words.
 * @param {String} e The Sring that will be normalized.
 */
const normalizeStr = (e) => {
    return e.trim().replace(/\s+/g, " ");
}

export { axiosInstance, normalizeStr };