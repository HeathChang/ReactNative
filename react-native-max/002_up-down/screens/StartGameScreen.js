import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/common/Button/PrimaryButton";
import { startGameStyle as styles } from "./StartGameScreen.style";
import { useState } from "react";

const StartGameScreen = (props) => {
	const [enteredNumber, setEnteredNumber] = useState('');


	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText);
	};

	const resetInputHandler = () => {
		setEnteredNumber('');
	};

	const confirmInputHandler = () => {
		if (!enteredNumber) return;
		const chosenNumber = +enteredNumber;
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid Number',
				'Number has to be a number between 1 and 99.',
				[
					{
						text: 'OK',
						style: 'destructive', onPress: resetInputHandler
					}
				]);
			return;
		}
		props.onPickNumber(chosenNumber)
	};


	return (
		<View style={ styles.inputContainer }>
			<TextInput style={ styles.numberInput } maxLength={ 2 } keyboardType={ 'number-pad' }
								 autoCapitalize={ 'none' } autoCorrect={ false } value={ enteredNumber }
								 onChangeText={ numberInputHandler }/>


			<View style={ styles.buttonsContainer }>
				<View style={ styles.buttonContainer }>
					<PrimaryButton onPress={ resetInputHandler }>RESET</PrimaryButton>
				</View>
				<View style={ styles.buttonContainer }>
					<PrimaryButton onPress={ confirmInputHandler }>CONFIRM</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default StartGameScreen;