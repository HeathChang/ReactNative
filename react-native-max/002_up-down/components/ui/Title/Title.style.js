import { Platform, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export const titleStyle = StyleSheet.create({
	title: {
		fontSize: 24,
		color: Colors.white,
		textAlign: 'center',
		borderWidth: Platform.select({ ios: 0, android: 2}),
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderColor: Colors.white,
		fontFamily: 'open-sans-bold',
		padding: 12,
		maxWidth: '80%',
		width: 300
	}
});
