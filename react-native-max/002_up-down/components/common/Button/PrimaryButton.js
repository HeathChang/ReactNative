import { Pressable, Text, View } from "react-native";
import { primaryButtonStyle as styles } from "./PrimaryButton.style";
import Colors from "../../../constants/colors";

const PrimaryButton = (props) => {
	return (
		<View style={ styles.buttonOuterContainer }>
			<Pressable style={ (pressedData) => pressedData.pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
								 onPress={ () => props.onPress() } android_ripple={ { color: Colors.primary600 } }>
				<Text style={ styles.buttonText }>{ props.children }</Text>
			</Pressable>
		</View>
	);
};


export default PrimaryButton;