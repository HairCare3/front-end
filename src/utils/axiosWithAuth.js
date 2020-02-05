import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token)
    return axios.create({
        baseURL: "https://haircare-api-3.herokuapp.com/api",
        headers: {
            authorization: token 
        }
    });
};

export default axiosWithAuth;