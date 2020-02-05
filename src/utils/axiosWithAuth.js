import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseUrl: "https://haircare-api-3.herokuapp.com/api",
        headers: {
            Authorization: token 
        }
    });
};

export default axiosWithAuth;