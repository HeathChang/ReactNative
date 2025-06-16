import { Alert, Dimensions, FlatList, Text, useWindowDimensions, View } from "react-native";
import { gameStyle as styles } from "./GameScreen.style";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title/Title";
import NumberContainer from "../components/ui/Number/NumberContainer";
import PrimaryButton from "../components/common/Button/PrimaryButton";
import Card from "../components/common/Card/Card";
import InstructionText from "../components/ui/Text/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/ui/GuessLog/GuessLogItem";

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
	const initialGuess = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);
	const { width, height } = useWindowDimensions();

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
		const newGuessRound = generateRandomBetween(min, max, currentGuess);
		setCurrentGuess(newGuessRound);
		setGuessRounds(prev => [...prev, newGuessRound]);
	};

	useEffect(() => {
		if (currentGuess === props.userNumber) {
			props.onGameOver(guessRounds.length);
		}
	}, [currentGuess, props.userNumber, props.onGameOver]);

	useEffect(() => {
		min = 1;
		max = 100;
	}, []);


	const guessRoundsListLength = guessRounds.length;
	let content =
		<>
			<NumberContainer>{ currentGuess }</NumberContainer>
			<Card>
				<InstructionText style={ styles.instructionText }>Up Down?</InstructionText>
				<View style={ styles.buttonsContainer }>
					<View style={ styles.buttonContainer }><PrimaryButton
						onPress={ () => nextGuessHandler('greater') }><Ionicons name={ "md-add" }
																																		size={ 24 }/></PrimaryButton></View>
					<View style={ styles.buttonContainer }><PrimaryButton
						onPress={ () => nextGuessHandler('lower') }><Ionicons name={ "md-remove" }
																																	size={ 24 }/></PrimaryButton></View>
				</View>
			</Card>

		</>;

		if(width > 500){
			content = <>
				<View style={styles.buttonsContainerWide}>
					<View style={ styles.buttonContainer }><PrimaryButton
						onPress={ () => nextGuessHandler('greater') }><Ionicons name={ "md-add" }
																																		size={ 24 }/></PrimaryButton></View>
					<NumberContainer>{ currentGuess }</NumberContainer>

					<View style={ styles.buttonContainer }><PrimaryButton
						onPress={ () => nextGuessHandler('lower') }><Ionicons name={ "md-remove" }
																																	size={ 24 }/></PrimaryButton></View>
				</View>

			</>
		}

	return (
		<View style={ styles.screen }>
			<Title>Opponent's GUESS</Title>
			{content}
			<View style={ styles.listContainer }>
				<FlatList data={ guessRounds }
									renderItem={ (itemData) => <GuessLogItem roundNumber={ guessRoundsListLength - itemData.index }
																													 guess={ itemData.item }/> }
									keyExtractor={ (_, index) => index.toString() }
				/>
			</View>
		</View>
	);

};

export default GameScreen;