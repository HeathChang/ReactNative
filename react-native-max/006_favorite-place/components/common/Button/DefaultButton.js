import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../../constants/colors";

const DefaultButton = ({ onPress, children }) => {
	return (
		<Pressable onPress={ onPress } style={ ({ pressed }) => [styles.button, pressed && styles.pressed] }>
			<Text style={ styles.text }>{ children }</Text>
		</Pressable>
	);
};

export default DefaultButton;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		borderWidth: 1,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 4,
		shadowOpacity: 0.15,
	},
	pressed: {
		opacity: .7
	},

	text: {
		color: Colors.primary50,
		fontSize: 16,
		textAlign: 'center',
	}
});