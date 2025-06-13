import { Pressable, Text, View } from "react-native";
import { goalItemStyle as styles } from "./GoalItem.style";


const GoalItem = (props) => {
	return (
		<View style={ styles.goalItem } onPress>
			<Pressable onPress={ () => props.onDeleteItem(props.id) }
								 android_ripple={ { color: '#dddddd' } }
								 style={ ({ pressed }) => pressed && styles.iphonePressed }
			>
				<Text style={ styles.goalText }>{ props.text }</Text>
			</Pressable>
		</View>
	);
};
export default GoalItem;