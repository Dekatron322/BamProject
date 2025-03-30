import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

interface AuthData {
	token: string | null;
	isLoading: boolean;
	user: any | null;
}

interface AuthContextType extends AuthData {
	signIn: (token: string, userData?: any) => Promise<void>;
	signOut: () => Promise<void>;
	updateUser: (userData: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [authData, setAuthData] = useState<AuthData>({
		token: null,
		isLoading: true,
		user: null,
	});

	useEffect(() => {
		const loadAuthData = async () => {
			try {
				const [token, user] = await Promise.all([
					SecureStore.getItemAsync("userToken"),
					SecureStore.getItemAsync("userData").then((data) =>
						data ? JSON.parse(data) : null
					),
				]);

				setAuthData({
					token,
					user,
					isLoading: false,
				});
			} catch (error) {
				console.error("Error loading auth data:", error);
				setAuthData({
					token: null,
					user: null,
					isLoading: false,
				});
			}
		};

		loadAuthData();
	}, []);

	const signIn = async (token: string, userData?: any) => {
		try {
			await Promise.all([
				SecureStore.setItemAsync("userToken", token),
				userData &&
					SecureStore.setItemAsync("userData", JSON.stringify(userData)),
			]);

			setAuthData({
				token,
				user: userData || null,
				isLoading: false,
			});
		} catch (error) {
			console.error("Error signing in:", error);
			throw error;
		}
	};

	const signOut = async () => {
		try {
			await Promise.all([
				SecureStore.deleteItemAsync("userToken"),
				SecureStore.deleteItemAsync("userData"),
			]);

			setAuthData({
				token: null,
				user: null,
				isLoading: false,
			});
			router.replace("/(routes)/login");
		} catch (error) {
			console.error("Error signing out:", error);
			throw error;
		}
	};

	const updateUser = (userData: any) => {
		SecureStore.setItemAsync("userData", JSON.stringify(userData));
		setAuthData((prev) => ({
			...prev,
			user: userData,
		}));
	};

	return (
		<AuthContext.Provider
			value={{
				...authData,
				signIn,
				signOut,
				updateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
