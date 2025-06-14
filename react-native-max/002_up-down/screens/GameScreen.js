import { Alert, Text, View } from "react-native";
import { gameStyle as styles } from "./GameScreen.style";
import { useState } from "react";
import Title from "../components/common/Title/Title";
import NumberContainer from "../components/ui/game/NumberContainer";
import PrimaryButton from "../components/common/Button/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * ( max - min )) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let min = 1;
let max = 100;

const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(min, max, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	const nextGuessHandler = (direction) => {
		if (( direction === 'lower' && currentGuess < props.userNumber ) ||
			( direction === 'greater' && currentGuess > props.userNumber )) {
			Alert.alert("Don't lie!", "You know this is wrong");
			return;
		}
		if (direction === 'lower') {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}
		setCurrentGuess(generateRandomBetween(min, max, currentGuess));
	};

	console.log('current guess:: ', currentGuess);
	console.log('props.userNumber:: ', props.userNumber);

	return (
		<View style={ styles.screen }>
			<Title>Opponent's GUESS</Title>
			<NumberContainer>{ currentGuess }</NumberContainer>
			<View>
				<Text>GAME SCREEN</Text>
				<View>
					<PrimaryButton onPress={ () => nextGuessHandler('lower') }>-</PrimaryButton>
					<PrimaryButton onPress={ () => nextGuessHandler('greater') }>+</PrimaryButton>
				</View>
			</View>
			<View>
				<Text>LOG ROUNDS</Text>
			</View>
		</View>
	);
};

export default GameScreen;