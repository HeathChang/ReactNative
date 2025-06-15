import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export const titleStyle = StyleSheet.create({
	title: {
		fontSize: 24,
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		fontFamily: 'open-sans-bold',
		padding: 12
	}
});
