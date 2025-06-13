import { goalInputsStyle as styles } from "./GoalInputs.style";
import { Button, Image, Modal, TextInput, View } from "react-native";
import { useState } from "react";

const GoalInputs = (props) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');


	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	};
	const cancelGoalHandler = () => {
		props.onCancelGoal();
		setEnteredGoalText('');
	};

	return (
		<Modal visible={ props.visible } animationType={ "slide" }>
			<View style={ styles.inputContainer }>
				<Image source={ require('../assets/goal.png') } style={ styles.image }/>
				<TextInput style={ styles.textInput } placeholder={ "Your course Goal" } onChangeText={ goalInputHandler }
									 value={ enteredGoalText }/>
				<View style={ styles.buttonContainer }>
					<View style={ styles.button }>
						<Button title="Add Goal" onPress={ addGoalHandler } color={"#b494de"}/>
					</View>
					<View style={ styles.button }>
						<Button title="Cancel" onPress={ cancelGoalHandler} color={"#f31282"}/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInputs;