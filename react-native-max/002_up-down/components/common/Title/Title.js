import { titleStyle as styles } from "./Title.style";
import { Text } from "react-native";

const Title = (props) => {
	return <Text style={ styles.title }>{ props.children }</Text>;
};

export default Title;