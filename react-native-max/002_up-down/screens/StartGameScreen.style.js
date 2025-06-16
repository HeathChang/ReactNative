import { Dimensions, StyleSheet } from 'react-native';
import Colors from "../constants/colors";
import colors from "../constants/colors";


// const deviceHeight = Dimensions.get("window").height;


export const startGameStyle = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		// marginTop: deviceHeight < 300 ? 30 : 100,
		alignItems: "center"
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 36,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: colors.accent500,
		borderBottomWidth: 2,
		color: colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},

});
