import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token)
    return axios.create({
        "Content-Ttype": "application/json",
        baseURL: "https://haircare-api-3.herokuapp.com/api",
        headers: {
            Authorization: token 
        }
    });
};

export default axiosWithAuth;