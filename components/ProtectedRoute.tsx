import { useAuth } from "@/context/authContext";
import { Redirect } from "expo-router";

import { ActivityIndicator, View } from "react-native";

interface ProtectedRouteProps {
	children: React.ReactNode;
	redirectPath?: string;
}

export const ProtectedRoute = ({
	children,
	redirectPath = "/(routes)/login",
}: ProtectedRouteProps) => {
	const { token, isLoading } = useAuth();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	if (!token) {
		return <Redirect href={redirectPath} />;
	}

	return <>{children}</>;
};
