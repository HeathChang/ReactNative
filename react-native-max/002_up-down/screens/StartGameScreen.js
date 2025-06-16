import {
	Alert,
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
	TextInput,
	useWindowDimensions,
	View
} from "react-native";
import PrimaryButton from "../components/common/Button/PrimaryButton";
import { startGameStyle as styles } from "./StartGameScreen.style";
import { useState } from "react";
import Title from "../components/ui/Title/Title";
import Card from "../components/common/Card/Card";
import InstructionText from "../components/ui/Text/InstructionText";

const StartGameScreen = (props) => {
	const [enteredNumber, setEnteredNumber] = useState('');
	const { width, height } = useWindowDimensions();

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
		props.onPickNumber(chosenNumber);
	};

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<ScrollView>
			<KeyboardAvoidingView style={ styles.screen} behavior={"position"}>
				<View style={ [styles.rootContainer, { marginTop: marginTopDistance }] }>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a Number.</InstructionText>
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
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;