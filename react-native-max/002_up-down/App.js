import { appStyles as styles } from "./App.style";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";


export default function App() {
	const [userNumber, setUserNumber] = useState(null);

	const pickedNumberHandler = (pickedNumber) => {
		console.log('pickedNumber:: ', pickedNumber);
		setUserNumber(pickedNumber);
	};

	let screen = <StartGameScreen onPickNumber={ pickedNumberHandler }/>;

	if (!!userNumber) {
		screen = <GameScreen userNumber={userNumber}/>;
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
