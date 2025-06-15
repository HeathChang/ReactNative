import { View } from "react-native";
import { cardStyle as styles } from "./Card.style";

const Card = (props) => {
	return (
		<View style={ styles.inputContainer }>{ props.children }</View>
	);
};

export default Card;