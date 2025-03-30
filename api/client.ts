import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
	baseURL: "https://fms.nelfundjobs.com.ng/api",
});

api.interceptors.request.use(async (config) => {
	const token = await SecureStore.getItemAsync("userToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401) {
			// Token expired or invalid
			const { signOut } = require("@/contexts/AuthContext").useAuth();
			await signOut();
		}
		return Promise.reject(error);
	}
);

export default api;
