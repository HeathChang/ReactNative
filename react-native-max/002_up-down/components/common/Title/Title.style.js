import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export const titleStyle = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		padding: 12
	}
});
