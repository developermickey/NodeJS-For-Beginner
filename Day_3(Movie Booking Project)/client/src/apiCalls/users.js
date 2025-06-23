import { axiosInstance } from "./index";

export const RegisterUser = async (values) => {
const response = await axiosInstance.post("/api/users/register", values);
console.log(response.data);
return response.data;
};
