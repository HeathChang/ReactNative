import { appStyles as styles } from "./App.style";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [isGameOver, setGameOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [isFontLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});

	if (!isFontLoaded) {
		return <AppLoading/>;
	}


	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setGameOver(false);
	};

	const gameOverHandler = (roundNumber) => {
		setGuessRounds(roundNumber)
		setGameOver(true);
	};

	const newGameHandler = () => {
		setUserNumber(null)
		setGuessRounds(0)
	}


	let screen = <StartGameScreen onPickNumber={ pickedNumberHandler }/>;

	if (!!userNumber) {
		screen = <GameScreen userNumber={ userNumber } onGameOver={ gameOverHandler }/>;
	}

	if (isGameOver && userNumber) {
		screen = <GameOverScreen roundNumbers={guessRounds} onStartNewGame={newGameHandler} userNumber={userNumber}/>;
	}


	return (
		<LinearGradient colors={ [Colors.primary700, Colors.accent500] } style={ styles.rootScreen }>
			<ImageBackground imageStyle={ styles.backgroundImage } style={ styles.rootScreen }
											 source={ require('./assets/images/background.png') } resizeMode={ 'cover' }>
				<SafeAreaView style={ styles.rootScreen }>
					{ screen }
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}
