
import toast from "react-hot-toast";
import axios from "axios";

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL


export const login = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, credentials);

        if (response.status === 200) {
            toast.success('Login successful');
            return response.data;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            toast.error(errorMessage);
            throw errorMessage;
        }

        // Handle non-Axios errors
        toast.error('Login failed');
        throw 'Login failed';
    }
};





export const signup = async (userData: { name: string; email: string; password: string }) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        toast.success("Signup successful");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || "Signup failed";
            toast.error(errorMessage);
            throw errorMessage;
        }
        toast.error("Signup failed");
        throw "Signup failed";
    }
};
