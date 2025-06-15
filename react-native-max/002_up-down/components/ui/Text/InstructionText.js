import { instructionTextStyle as styles } from "./InstructionText.style";
import { Text } from "react-native";


const InstructionText = (props) => {
	return (
		<Text style={ [styles.instructionText, props.style] }>{ props.children } </Text>
	);
};

export default InstructionText;