import { Dimensions, StyleSheet } from 'react-native';


export const gameStyle = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: 'center'
	},
	instructionText: {
		marginBottom: 12
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer : {
		flex: 1
	},
	listContainer: {
		flex: 1,
		padding: 16
	},
	buttonsContainerWide: {
		flexDirection: 'row',
		alignItems: 'center'
	}

});
