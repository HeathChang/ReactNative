import { Text, View } from "react-native";
import { numberContainerStyle as styles } from "./NumberContainer.style";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{props.children}</Text>
		</View>
	)
}

export  default  NumberContainer