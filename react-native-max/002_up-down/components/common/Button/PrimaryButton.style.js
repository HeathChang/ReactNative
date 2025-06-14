import { StyleSheet } from 'react-native';
import Colors from "../../../constants/colors";


export const primaryButtonStyle = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden'
	},

	buttonInnerContainer: {
		backgroundColor: Colors.primary500,
		paddingHorizontal: 16,
		paddingVertical: 8,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center'
	},
	pressed: {
		opacity: .75
	}
});