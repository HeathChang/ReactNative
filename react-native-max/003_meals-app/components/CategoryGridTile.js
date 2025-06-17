import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = (props) => {
	return (
		<View style={ styles.gridItem }>
			<Pressable onPress={ props.onPress } android_ripple={ { color: '#ccc' } }
								 style={ ({ pressed }) => [styles.button, pressed ? styles.buttonPressedIOS : ''] }>
				<View style={ [styles.innerContainer, { backgroundColor: props.color }] }>
					<Text style={ styles.title }>{ props.title }</Text>
				</View>
			</Pressable>
		</View> );
};

export default CategoryGridTile;


const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		elevation: 4,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		shadowOpacity: .25,
		borderRadius: 8,
		shadowColor: 'black',
		backgroundColor: 'white',
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},

	button: {
		flex: 1
	},
	buttonPressedIOS: {
		opacity: .5
	},
	innerContainer: {
		flex: 1,
		padding: 6,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,

	},
	title: {
		fontWeight: 'bold',
		fontSize: 18
	}
});