import { Dimensions, StyleSheet } from 'react-native';
import Colors from "../../../constants/colors";

const deviceWidth = Dimensions.get('window').width


export const cardStyle = StyleSheet.create({
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: deviceWidth < 380 ? 18: 36,
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
})
