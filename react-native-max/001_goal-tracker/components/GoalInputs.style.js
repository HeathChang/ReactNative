import { StyleSheet } from "react-native";

export const goalInputsStyle = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: "center",
		backgroundColor: '#311b6b',
		padding: 16
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 8,
		width: '100%',
		padding: 8,

	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",

	},
	button: {
		width: '30%',
		marginHorizontal: 0
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	}
});