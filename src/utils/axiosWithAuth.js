import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.createa({
        baseUrl: "https://haircare-api-3.herokuapp.com/api",
        headers: {
            authorization: token 
        }
    });
};