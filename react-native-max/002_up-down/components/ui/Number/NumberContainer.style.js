import { Dimensions, StyleSheet } from 'react-native';
import Colors from "../../../constants/colors";

const device = Dimensions.get('window');
console.log('device: ', device);
const deviceWidth = device.width;

export const numberContainerStyle = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: deviceWidth < 380 ? 12 : 24,
		margin: deviceWidth < 380 ? 12 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center'
	},
	numberText: {
		color: Colors.accent500,
		fontSize: deviceWidth < 380 ? 28 : 36,
		fontFamily: 'open-sans-bold',
	}
});
