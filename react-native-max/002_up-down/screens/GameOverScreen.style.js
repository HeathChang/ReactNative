import { Dimensions, StyleSheet } from 'react-native';
import Colors from "../constants/colors";


const deviceWidth = Dimensions.get("window").width;


export const gameOverStyle = StyleSheet.create({
	screen: {
		flex: 1
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		// width: deviceWidth < 380 ? 150: 300,
		// height: deviceWidth < 380 ? 150: 300,
		// borderRadius: deviceWidth < 380 ? 75: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500
	}
});
